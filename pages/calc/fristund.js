import { isDynamicRoute } from 'next/dist/next-server/lib/router/utils';
import React from 'react';
import { currencyFormat } from '../../components/functions';
import PageHead from '../../components/page-head';
import styles from '../../styles/Home.module.css';


const idsMap = {
	KIDS: "kids",
	DAYS: "days",
};

const priceMap = {
	STAY_5: 15667,
	STAY_4: 12776,
	STAY_3: 9862,
	STAY_2: 6957,
	STAY_1: 4043,
}
class Fristund extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			field: {
				kids: '',
				days: '',
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
						<FormGroup id={ idsMap.KIDS } label="Fjöldi barna í vistun" type="number" value={ this.state.field.kids } change={ this.handleChange } required={ true }></FormGroup>
						<FormGroup id={ idsMap.DAYS } label="Fjöldi daga á viku" type="number" value={this.state.field.days } change={ this.handleChange } required={ true }></FormGroup>
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