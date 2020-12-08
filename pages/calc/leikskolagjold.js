import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import FormGroup from '../../components/form-group'
import PageHead from '../../components/page-head'
import React from 'react'

class Leikskolagjold extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			kids: '',
			hours: '',
			primary: false,
			total: 0,
			totalfood: 0,
			totalstay: 0,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.per_hour_cost = 3570;
		this.per_quarter_cost = 1625;
		this.primary_hour_cost = 2499;
		this.primary_quarter_cost = 1137;
		this.launch_cost = 5850;
		this.breakfast_cost = 2065;
		this.refreshment_cost = 2065;
	}

	handleChange(event) {
		if(event.target.id === "kids") {
			this.setState({
				kids: event.target.value,
				total: 0,
			});
		}
		else if (event.target.id === "hours") {
			this.setState({
				hours: event.target.value
			});
		}
		else {
			this.setState({
				primary: !this.state.primary
			})
		}
	}

	handleSubmit(event) {
		var total = 0;
		var foodCost = this.breakfast_cost + this.refreshment_cost + this.launch_cost;
		var pph = this.state.primary === true ? this.primary_hour_cost : this.per_hour_cost;
		var ppq = this.state.primary === true ? this.primary_quarter_cost : this.per_quarter_cost;
		if(this.state.hours <= 8) {
			if (this.state.hours <=5 ) {
				foodCost -= this.refreshment_cost;
			}
			total = pph*this.state.hours;
			
		} else {
			//if longer than 8 hours, price = pph*8 -> rest = hours - 8
			total = pph*8;
			total += ppq*(this.hours-8)*4;
		}
		if(this.state.kids > 1) {
			total *= 1.5;
		}
		total += foodCost*this.state.kids;
		this.setState({
			total: total,
			totalfood: foodCost,
			totalstay: total-foodCost,
		});
		event.preventDefault();
	}

  render() {
		return (
			<div className={styles.container}>
				<PageHead>Leikskólagjöld</PageHead>
				<main className={styles.main}>
					<div className="container">
						<h1>Leikskólagjöld</h1>
					</div>
					<div className="container">
						<form onSubmit={ this.handleSubmit }>
							<FormGroup id="kids" label="Hversu mörg börn" type="number" description="Sláðu inn fjölda barna sem eru í leikskóla" value={ this.state.kids } change={ this.handleChange }></FormGroup>
							<FormGroup id="hours" label="Hversu margir tímar á dag" type="number" value={ this.state.hours } change={ this.handleChange }></FormGroup>
							<div className="form-group form-check">
								<input type="checkbox" className="form-check-input" id="is_primary" value={ this.state.primary } onChange={ this.handleChange }></input>
								<label className="form-check-label" htmlFor="is_primary">Forgangsgjald?</label>
							</div>
							
							<input type="submit" value="Reikna" className="btn btn-primary"></input>

						</form>
						{
							this.state.total > 0 &&
							<div className="card mt-3">
  							<div className="card-body">
									<h5 className="card-title">Heildarkostnaður: { this.state.total }</h5>
									<h6 className="card-subtitle mb-2 text-muted">Að vera með {this.state.kids} {this.state.kids == 1? 'barn' : 'börn' } í {this.state.hours } klukkutíma á dag kostar {this.state.total} kr á mánuði.</h6>
									<p className="card-text"><strong>Sundurliðun:</strong></p>
									<p className="card-text">Miðað við þínar forsendur má reikna með að leikskólagjöldin séu eftirfarandi: <br></br>Dvalargjald: { this.state.totalstay }<br></br>Fæðisgjald: { this.state.totalfood }<br></br><strong>Samtals: { this.state.total }</strong></p>
									<h6 className="card-subtitle mb-2 text-muted">Fyrirvari: </h6>
									<p className="card-text">Eingöngu er um áætlun að ræða miðað við þær forsendur sem slegnar eru inn.</p>
  							</div>
							</div>
							
						}
				
					</div>
				</main>
			</div>
		);
	}
}


export default Leikskolagjold