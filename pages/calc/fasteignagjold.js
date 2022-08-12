import React from 'react';
import styles from '../../styles/Home.module.css';
import FormGroup from '../../components/form-group';
import PageHead from '../../components/page-head';
import {currencyFormat, inputFormat, formatedToInt} from '../../components/functions.js';
import CheckFormGroup from '../../components/check-form-group';

const idsMap = {
	FASTEIGNAMAT: 'fasteignamat',
	LODAMAT: 'lodamat',
	FASTEIGNAFLOKKUR: 'fasteignaflokkur',
	SORPTUNNA: 'sorptunna',
	EIGNALOD: 'eignalod',
};

const calcMap = {
	FASTSK_A: 0.002544,
	FASTSK_B: 0.0132,
	FASTSK_C: 0.0160,
	LODALEIGA_A: 0.01,
	LODALEIGA_B: 0.03,
	VATNSGJALD: 0.001720,
	VIDBOTARGJ: 17.8,
	FRAVEITUGJ: 0.002510,
	SORPGJ_A: 52000,
	SORPGJ_B: 65000,
	SORPAFSLATTUR: 0.5,
};

class Fasteignagjold extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			field: {
				fasteignamat: '',
				lodamat: '',
				fasteignaflokkur: 'A',
				sorptunna: '120',
				eignalod: false,
 			},
			total: 0,
			tSorp: 0,
			tFráveitugjald: 0,
			tVatnsgjald: 0,
			tLodaleiga: 0,
			tFastsk: 0,
			month: 0,
		};
        
	}
	
	handleChange = (e) => {
		let fields = this.state.field;
		let value = e.target.type === "text" ? inputFormat(e.target) : e.target.id === idsMap.EIGNALOD? !fields[idsMap.EIGNALOD] : e.target.value;
		fields[e.target.id] = value;
		this.setState({
			field: fields,
			total: 0,
		});
		
	}

	handleSubmit = (e) => {
		e.preventDefault();
		let flokkur = this.state.field.fasteignaflokkur ==='A' ? calcMap.FASTSK_A : this.state.flokkur === 'B' ? calcMap.FASTSK_B : calcMap.FASTSK_C;
		let houseInt = formatedToInt(this.state.field.fasteignamat);
		let lodInt = formatedToInt(this.state.field.lodamat);
		let tFastsk = Math.round(houseInt * flokkur);
		let tLodaleiga = this.state.field.eignalod? 0 : Math.round(lodInt * calcMap.LODALEIGA_A);
		let tVatnsgjald = Math.round(houseInt * calcMap.VATNSGJALD);
		let tFráveitugjald = Math.round(houseInt * calcMap.FRAVEITUGJ);
		let tSorp = this.state.field.sorptunna === '120'? calcMap.SORPGJ_A : calcMap.SORPGJ_B;
		let total = tFastsk + tLodaleiga + tVatnsgjald + tFráveitugjald + tSorp;
		let month = Math.ceil(total/10);
		this.setState({
			total: total,
			tSorp: tSorp,
			tFráveitugjald: tFráveitugjald,
			tVatnsgjald: tVatnsgjald,
			tLodaleiga: tLodaleiga,
			tFastsk: tFastsk,
			month: month,
		});
		

	}

  render() {
    return (
		<main>	
			<div className={ styles.container }>
				<PageHead title="Reiknivél fasteignagjalda"></PageHead>
						<div className={ styles.main }>
							<div className="container">
								<h1>Reiknivél fasteignagjalda</h1>
								<a href="https://skra.is/leit-i-fasteignaskra/" target="_blank" rel="nofollow" className={ styles.secondaryLink }>Smelltu hér til að fletta upp fasteignamati eignar</a>
							</div>
							<div className="container">
								<form onSubmit={ this.handleSubmit }>
									<FormGroup id={ idsMap.FASTEIGNAMAT } label="Fasteignamat eignar" type="string" value={ this.state.field.fasteignamat } change={ this.handleChange } required={true}></FormGroup>
									<div className="form-group">
										<label htmlFor={ idsMap.EIGNALOD }>Tegund lóðar: </label>
										<CheckFormGroup id={idsMap.EIGNALOD} label="Leigulóð" type="radio" value={ false } change={this.handleChange} checked={this.state.field.eignalod === false} ></CheckFormGroup>
										<CheckFormGroup id={idsMap.EIGNALOD} label="Eignalóð" type="radio" value={ true } change={this.handleChange} checked={this.state.field.eignalod === true} ></CheckFormGroup>
									</div>
									{
										!this.state.field.eignalod &&
										<FormGroup id={ idsMap.LODAMAT } label="Þar af lóðamat" type="string" value={ this.state.field.lodamat } change={ this.handleChange } required={!this.state.field.eignalod} disabled={this.state.field.eignalod}></FormGroup>
									}
									<div className="form-group">
										<label htmlFor={ idsMap.FASTEIGNAFLOKKUR }>Tegund húsnæðis: </label>
										<CheckFormGroup id={ idsMap.FASTEIGNAFLOKKUR}  label="Íbúðarhúsnæði" type="radio" value='A' change={this.handleChange} checked={ this.state.field.fasteignaflokkur === 'A' }></CheckFormGroup>
										<CheckFormGroup id={ idsMap.FASTEIGNAFLOKKUR}  label="Opinber bygging" type="radio" value='B' change={this.handleChange} checked={ this.state.field.fasteignaflokkur === 'B' }></CheckFormGroup>
										<CheckFormGroup id={ idsMap.FASTEIGNAFLOKKUR}  label="Atvinnuhúsnæði" type="radio" value='C' change={this.handleChange} checked={ this.state.field.fasteignaflokkur === 'C' }></CheckFormGroup>
									</div>
									<div className="form-group">
										<label htmlFor={ idsMap.SORPTUNNA }>Stærð sorputunnu: </label>
										<CheckFormGroup id={ idsMap.SORPTUNNA } label="120 lítra" type="radio" value='120' change={ this.handleChange } checked={ this.state.field.sorptunna === '120'}></CheckFormGroup>
										<CheckFormGroup id={ idsMap.SORPTUNNA } label="240 lítra" type="radio" value='240' change={ this.handleChange } checked={ this.state.field.sorptunna === '240' }></CheckFormGroup>
									</div>
									<input type="submit" value="Reikna" className="btn btn-primary"></input>
								</form>
									<div className={this.state.total==0? styles.hidden +" card mt-3" : styles.visible + " card mt-3"}>
										<div className="card-body">
											<h5 className="card-title">Heildarkostnaður: {currencyFormat(this.state.total)}</h5>
											<h6 className="card-subtitile mb-2 text-muted">Mánaðarleg greiðsla frá febrúar-nóvember: {currencyFormat(this.state.month)}</h6>
											<p className="card-text">
												<b>Sundurliðun: </b><br></br>
												Miðað við þínar forsendur má reikna með að fasteignagjöldin séu eftirfarandi: <br></br>
												Fasteignaskattur: {currencyFormat(this.state.tFastsk)}<br></br>
												{ this.state.tLodaleiga !== 0 && <span>Lóðaleiga: {currencyFormat(this.state.tLodaleiga)}<br></br></span>}
												Fráveitugjald: {currencyFormat(this.state.tFráveitugjald)}<br></br>
												Vatnsgjald: {currencyFormat(this.state.tVatnsgjald)}<br></br>
												Sorp- og urðunargjald: {currencyFormat(this.state.tSorp)}<br></br>
												<b>Samtals: {currencyFormat(this.state.total)}</b>
											</p>
											<h6 className="card-subtitle mb-2 text-muted">Fyrirvari: </h6>
											<p className="card-text">Eingöngu er um áætlun að ræða miðað við þær forsendur sem slegnar eru inn.</p>
								</div>
							</div>
						</div>
					</div>
			</div>
		</main>
    );
  }



}

export default Fasteignagjold;