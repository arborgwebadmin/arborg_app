import styles from '../../styles/Home.module.css'
import FormGroup from '../../components/form-group'
import PageHead from '../../components/page-head'
import React from 'react'
import {currencyFormat} from '../../components/functions'
import Form from 'react-bootstrap/Form';
import NrOfDaysPWeek from '../../components/nr-of-days-p-week'
import { selectTag } from '../../constants'


const idsMap = {
	KIDS: "kids",
	DAYS: "days",
};

const priceMap = {
	'5 dagar': [16090, 4645],
	'4 dagar': [13121, 3720],
	'3 dagar': [10128, 2784],
	'2 dagar': [7145, 1872],
	'1 dagur': [4152, 949],
}

class Fristund extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			field: {
				kids: '',
				days: selectTag.LBL1,
			},
			total: 0,
			tfood: 0,
			tstay: 0,
		};
	}

	handleChange = (e) => {
		let fields = this.state.field;
		let value = e.target.value;
		fields[e.target.id] = value;
		this.setState({
			field: fields,
			total: 0,
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		let [ppm, food] = priceMap[this.state.field.days];
		// if more than 1 kid than 50% of price for the 2nd
		ppm = this.state.field.kids > 1 ? Math.round(ppm*1.5) : ppm;
		food = food * this.state.field.kids;
		this.setState({
			total: food+ppm,
			tfood: food,
			tstay: ppm,
		})
		
	}

  render() {
	  return(
		<div className={ styles.container }>
			<PageHead>Frístunda reiknivél</PageHead>
			<div className={styles.main}>
				<div className="container">
					<h1>Reiknvél frístundagjalda</h1>
				</div>
				<div className="container">
					<form onSubmit={ this.handleSubmit }>
						<FormGroup id={ idsMap.KIDS } label="Fjöldi barna í frístund" type="number" value={ this.state.field.kids } change={ this.handleChange } required={ true }></FormGroup>
						<NrOfDaysPWeek id={idsMap.DAYS} change={ this.handleChange } value={ this.state.field.days }></NrOfDaysPWeek>
						<input type="submit" value="Reikna" className="btn btn-primary"></input>
					</form>
					<div className={ this.state.total==0? styles.hidden + " card mt-3" : styles.visible + " card mt-3"}>
						<div className="card-body">
							<h5 className="card-title">Heildarkostnaður: {currencyFormat(this.state.total)}</h5>
							<h6 className="card-subtitile mb-2 text-muted">Að vera með {this.state.field.kids} {this.state.field.kids==1? 'barn': 'börn'} í {this.state.field.days} {this.state.field.days==1?'dag':'daga'} á viku kostar {currencyFormat(this.state.total)}</h6>
							<p className="card-text">
								<b>Sundurliðun:</b><br></br>
								Miðað við þínar forsendur má reikna með að frístundagjöldin séu eftirfarandi:<br></br>
								Þáttaka: {currencyFormat(this.state.tstay)}<br></br>
								Hressing: {currencyFormat(this.state.tfood)}<br></br>
								<b>Samtals: {currencyFormat(this.state.total)}</b>
							</p>
							<h6 className="card-subtitle mb-2 text-muted">Fyrirvari: </h6>
							<p className="card-text">Eingöngu er um áætlun að ræða miðað við þær forsendur sem slegnar eru inn.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		);
  }
}

export default Fristund;