import styles from '../../styles/Home.module.css'
import FormGroup from '../../components/form-group'
import PageHead from '../../components/page-head'
import React from 'react'
import {currencyFormat} from '../../components/functions'
import { leikskoliGjaldskra } from '../../constants'

class Leikskolagjold extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			field: {
				kids: '',
				hours: '',
				primary: false,
			},
			total: 0,
			totalfood: 0,
			totalstay: 0,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.per_hour_cost = leikskoliGjaldskra.per_hour_cost;
		this.per_quarter_cost = leikskoliGjaldskra.per_quarter_cost;
		this.primary_hour_cost = leikskoliGjaldskra.primary_hour_cost;
		this.primary_quarter_cost = leikskoliGjaldskra.primary_quarter_cost;
		this.launch_cost = leikskoliGjaldskra.launch_cost;
		this.breakfast_cost = leikskoliGjaldskra.breakfast_cost;
		this.refreshment_cost = leikskoliGjaldskra.refreshment_cost;
	}

	handleChange(event) {
		let fields = this.state.field;
		let value = event.target.type === "number" ? event.target.value : !this.state.field.primary;
		fields[event.target.id] = value;
		this.setState({
			field: fields,
			total: 0,
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		var total = 0;
		var foodCost = this.breakfast_cost + this.refreshment_cost + this.launch_cost;
		var pph = this.state.field.primary === true ? this.primary_hour_cost : this.per_hour_cost;
		var ppq = this.state.field.primary === true ? this.primary_quarter_cost : this.per_quarter_cost;
		var hours = this.state.field.hours;
		var kids = this.state.field.kids;
		if(hours <= 8) {
			if (hours <=5 ) {
				foodCost -= this.refreshment_cost;
			}
			total = pph*hours;
		} else {
			//if longer than 8 hours, price = pph*8 -> rest = hours - 8
			total = pph*8;
			total += ppq*(hours-8)*4;
		}
		if(kids > 1) {
			total *= 1.5;
		}
		let dvol = total;
		foodCost = foodCost*kids;
		total += foodCost;
		this.setState({
			total: total,
			totalfood: foodCost,
			totalstay: dvol,
		});
	}

  	render() {
		return (
			<main>
				<div className={styles.container}>
					<PageHead>Leikskólagjöld</PageHead>
					<main className={styles.main}>
						<div className="container">
							<h1>Leikskólagjöld</h1>
						</div>
						<div className="container">
							<form onSubmit={ this.handleSubmit }>
								<FormGroup id="kids" label="Fjöldi barna í leikskóla?" type="number" value={ this.state.field.kids } change={ this.handleChange } required={ true }></FormGroup>
								<FormGroup id="hours" label="Lengd dvalar í klukkustundum á dag?" type="number" value={ this.state.field.hours } change={ this.handleChange } required={ true } step={0.25}></FormGroup>
								<div className="form-group form-check">
									<input type="checkbox" className="form-check-input" id="primary" value={ this.state.field.primary } onChange={ this.handleChange }></input>
									<label className="form-check-label" htmlFor="is_primary">Forgangsgjald?</label>
									<small id="description" className="form-text text-muted" >Forgangsgjald er fyrir einstæðaforeldra og námsmenn</small>
								</div>
					
								<input type="submit" value="Reikna" className="btn btn-primary"></input>

							</form>
								<div className={this.state.total==0? styles.hidden +" card mt-3" : styles.visible + " card mt-3"}>
								<div className="card-body">
										<h5 className="card-title">Heildarkostnaður: { currencyFormat(this.state.total) }</h5>
										<h6 className="card-subtitle mb-2 text-muted">Að vera með {this.state.field.kids} {this.state.field.kids == 1? 'barn' : 'börn' } í { this.state.field.hours } klukkutíma á dag kostar {currencyFormat(this.state.total)} á mánuði.</h6>
										<p className="card-text">
											<b>Sundurliðun:</b><br></br>
											Miðað við þínar forsendur má reikna með að leikskólagjöldin séu eftirfarandi: <br></br>
											Dvalargjald: { currencyFormat(this.state.totalstay) }<br></br>
											Fæðisgjald: { currencyFormat(this.state.totalfood) }<br></br>
											<strong>Samtals: { currencyFormat(this.state.total) }</strong>
										</p>
										<h6 className="card-subtitle mb-2 text-muted">Fyrirvari: </h6>
										<p className="card-text">Eingöngu er um áætlun að ræða miðað við þær forsendur sem slegnar eru inn og gjaldskrá fyrir leikskóla Árborgar frá 1. janúar 2024.</p>
								</div>
								</div>
						</div>
					</main>
				</div>
			</main>
		);
	}
}


export default Leikskolagjold
