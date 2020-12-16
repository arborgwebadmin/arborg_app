import React from 'react';
import styles from '../../styles/Home.module.css';
import FormGroup from '../../components/form-group';
import PageHead from '../../components/page-head';
import currencyFormatter from '../../components/currency-format';
import CheckFormGroup from '../../components/check-form-group';

const idsMap = {
	FASTEIGNAMAT: 'fasteingamat',
	LODAMAT: 'lodamat',
	FASTEIGNAFLOKKUR: 'fasteignaflokkur',
	SORPTUNNA: 'sorptunna',
};

const calcMap = {
	FASTSK_A: 0.2544/100,
	FASTSK_B: 1.32/100,
	FASTSK_C: 1.60/100,
	LODALEIGA_A: 1.0/100,
	LODALEIGA_B: 3.0/100,
	VATNSGJALD: 0.1721/100,
	VIDBOTARGJ: 17.8,
	FRAVEITUGJ: 0.2512,
	SORPGJ_A: 52000,
	SORPGJ_B: 65000,
	SORPAFSLATTUR: 50/100,
};

class Fasteignagjold extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fasteignamat: '',
			lodamat: '',
			fasteignaflokkur: 'A',
			sorptunna: '120',
			total: 0,
		};
        
	}
	
	handleChange(e) {
		switch (e.target.id) {
			case idsMap.FASTEIGNAMAT:
				this.setState({
					fasteignamat: e.target.value,
				})
			case idsMap.LODAMAT:
				this.setState({
					lodamat: e.target.value,
				})
			case idsMap.FASTEIGNAFLOKKUR:
				this.setState({
					fasteignaflokkur: e.target.value,
				})
			case idsMap.SORPTUNNA:
				this.setState({
					sorptunna: e.target.value,
				})
				
		}
	}
	handleSubmit(e){
		let flokkur = this.state.flokkur ==='A' ? calcMap.FASTSK_A : this.state.flokkur === 'B' ? calcMap.FASTSK_B : calcMap.FASTSK_C;
		let tFastsk = this.state.fasteignamat * flokkur;
		let tLodaleiga = this.state.lodamat * calcMap.LODALEIGA_A;
		let tVatnsgjald = this.state.fasteignamat * calcMap.VATNSGJALD;
		let tFráveitugjald = this.state.fasteignamat * calcMap.FRAVEITUGJ;
		let tSorp = this.state.sorptunna === '120'? calcMap.SORPGJ_A : calcMap.SORPGJ_B;
		let total = tFastsk + tLodaleiga + tVatnsgjald + tFráveitugjald + tSorp;
		this.setState({
			total: total,
			tSorp: tSorp,
			tFráveitugjald: tFráveitugjald,
			tVatnsgjald: tVatnsgjald,
			tLodaleiga: tLodaleiga,
			tFastsk: tFastsk,
		});

	}

  render() {
    return (
      <div className={ styles.container }>
        <PageHead>Fasteignagjöld</PageHead>
				<div className={ styles.main }>
					<div className="container">
						<h1>Fasteignagjöld</h1>
					</div>
					<div className="container">
						<form onSubmit={ this.handleSubmit }>
							<FormGroup id={ idsMap.FASTEIGNAFLOKKUR } label="Fasteignamat eignar" type="number" description="Hér er hægt að fletta upp fasteignamati eignar" value={ this.state.fasteignamat } change={ this.handleChange }></FormGroup>
							<FormGroup id={ idsMap.LODAMAT } label="Þar af lóðamat" type="number" value={ this.state.lodamat } change={ this.handleChange }></FormGroup>
							<div className="form-group">
								<label htmlFor={ idsMap.FASTEIGNAFLOKKUR }>Gerð húsnæðis: </label>
								<CheckFormGroup id={ idsMap.FASTEIGNAFLOKKUR}  label="Íbúðarhúsnæði" type="radio" value='A' change={this.handleChange} checked={ this.state.fasteignaflokkur === 'A' }></CheckFormGroup>
								<CheckFormGroup id={ idsMap.FASTEIGNAFLOKKUR}  label="Opinber bygging" type="radio" value='B' change={this.handleChange} checked={ this.state.fasteignaflokkur === 'B' }></CheckFormGroup>
								<CheckFormGroup id={ idsMap.FASTEIGNAFLOKKUR}  label="Atvinnuhúsnæði" type="radio" value='C' change={this.handleChange} checked={ this.state.fasteignaflokkur === 'C' }></CheckFormGroup>
							</div>
							<div className="form-group">
								<label htmlFor={ idsMap.SORPTUNNA }>Stærð sorputunnu: </label>
								<CheckFormGroup id={ idsMap.SORPTUNNA } label="120 lítra" type="radio" value='120' change={ this.handleChange } checked={ this.state.sorptunna === '120'}></CheckFormGroup>
								<CheckFormGroup id={ idsMap.SORPTUNNA } label="240 lítra" type="radio" value='240' change={ this.handleChange } checked={ this.state.sorptunna === '240' }></CheckFormGroup>
							</div>
							<input type="submit" value="Reikna" className="btn btn-primary"></input>
						</form>
						{
							this.state.total > 0 &&
							<div className="card mt-3">
								<div className="card-body">
									<h5 className="card-title">HeildarKostnaður: { currencyFormatter(this.state.total) }</h5>
									<h6 className="card-subtitile mb-2 text-muted">Mánaðarleg greiðsla frá febrúar-nóvember: {currencyFormatter(this.state.month)}</h6>
									<p className="card-text font-weight-bold">Sundurliðun:</p>
									<p className="card-text">Miðað við þínar forsendur má reikna með að fasteignagjöldin séu eftirfarandi: <br></br>Fasteignaskattur: {currencyFormatter(this.state.totalFastsk)}<br></br>Fráveitugjald: Vatnsgjald: Sorp- og urðunargjald: <b>Samtals: {currencyFormatter(this.state.total)}</b></p>
									<h6 className="card-subtitle mb-2 text-muted">Fyrirvari: </h6>
									<p className="card-text">Eingöngu er um áætlun að ræða miðað við þær forsendur sem slegnar eru inn.</p>
								</div>
							</div>
						}
					</div>
				</div>

      </div>

    );
  }



}

export default Fasteignagjold;