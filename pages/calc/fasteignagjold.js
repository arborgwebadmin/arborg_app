import React from 'react';
import styles from '../../styles/Home.module.css';
import FormGroup from '../../components/form-group';
import PageHead from '../../components/page-head';
import {currencyFormat, inputFormat, formatedToInt, percentageFormat} from '../../components/functions.js';
import CheckFormGroup from '../../components/check-form-group';
import { fasteignagjöldPrice as calcMap } from '../../constants/index.js';
import { Table } from 'react-bootstrap';

const idsMap = {
	FASTEIGNAMAT: 'fasteignamat',
	LODAMAT: 'lodamat',
	FASTEIGNAFLOKKUR: 'fasteignaflokkur',
	EIGNALOD: 'eignalod',
	SORP: 'sorp'
};

class Fasteignagjold extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			field: {
				fasteignamat: '',
				lodamat: '',
				atvStaerd: '',
				fasteignaflokkur: 'A',
				eignalod: false,
				sorp: 'grunn'
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

	calcSorp = (kerfi) => {
		let fastgj = this.state.fasteignaflokkur
	}

	handleSubmit = (e) => {
		e.preventDefault();
		// let flokkur = this.state.field.fasteignaflokkur ==='A' ? calcMap.FASTSK_A : this.state.flokkur === 'B' ? calcMap.FASTSK_B : calcMap.FASTSK_C;
		let flokkur = calcMap.FASTSK_A;
		let houseInt = formatedToInt(this.state.field.fasteignamat);
		let lodInt = formatedToInt(this.state.field.lodamat);
		let tFastsk = Math.round(houseInt * flokkur);
		let tLodaleiga = this.state.field.eignalod? 0 : Math.round(lodInt * calcMap.LODALEIGA_A);
		let tVatnsgjald = Math.round(houseInt * calcMap.VATNSGJALD);
		let tFráveitugjald = Math.round(houseInt * calcMap.FRAVEITUGJ);
		let tSorp = calcMap.FASTAGJALD_A + calcMap.SORPGJ_FJ_240 + calcMap.SORPGJ_BL_240 + (this.state.field.sorp === 'tvi' ? calcMap.SORPGJ_TV : calcMap.SORPGJ_BR_140 + (this.state.field.sorp === 'grunn' ? calcMap.SORPGJ_GR_240 : calcMap.SORPGJ_GR_140));
		// let tSorp = this.state.field.sorptunna === '120'? calcMap.SORPGJ_A : calcMap.SORPGJ_B;
		let total = tFastsk + tLodaleiga + tVatnsgjald + tFráveitugjald + tSorp;
		let month = Math.ceil(total/11);
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
				<PageHead title="Reiknivél fasteignagjalda íbúðarhúsnæðis"></PageHead>
						<div className={ styles.main }>
							<div className="container">
								<h1>Reiknivél fasteignagjalda {calcMap.YEAR}</h1>
								<a href="https://fasteignaskra.is/leit-i-fasteignaskra/" target="_blank" rel="nofollow" className={ styles.secondaryLink }>Smelltu hér til að fletta upp fasteignamati eignar</a>
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
									{/* <div className="form-group">
										<label htmlFor={ idsMap.FASTEIGNAFLOKKUR }>Tegund húsnæðis: </label>
										<CheckFormGroup id={ idsMap.FASTEIGNAFLOKKUR}  label="Íbúðarhúsnæði" type="radio" value='A' change={this.handleChange} checked={ this.state.field.fasteignaflokkur === 'A' }></CheckFormGroup>
										<CheckFormGroup id={ idsMap.FASTEIGNAFLOKKUR}  label="Opinber bygging" type="radio" value='B' change={this.handleChange} checked={ this.state.field.fasteignaflokkur === 'B' }></CheckFormGroup>
										<CheckFormGroup id={ idsMap.FASTEIGNAFLOKKUR}  label="Atvinnuhúsnæði" type="radio" value='C' change={this.handleChange} checked={ this.state.field.fasteignaflokkur === 'C' }></CheckFormGroup>
									</div> */}
									
									<div className="form-group">
										<label htmlFor={ idsMap.SORP }>Sorpkerfi: </label>
										<CheckFormGroup id={ idsMap.SORP } label="Grunnkerfi" type="radio" value='grunn' change={ this.handleChange } checked={ this.state.field.sorp === 'grunn'} description='240 ltr grá-, blá- og fjólublá tunna. 140 ltr brún tunna.'></CheckFormGroup>
										<CheckFormGroup id={ idsMap.SORP } label="Sparkerfi" type="radio" value='spar' change={ this.handleChange } checked={ this.state.field.sorp === 'spar' } description='240 blá- og fjólublá tunna. 140 ltr grá- og brún tunna.'></CheckFormGroup>
										<CheckFormGroup id={ idsMap.SORP } label="Tvískipt sparkerfi" type="radio" value='tvi' change={ this.handleChange } checked={ this.state.field.sorp === 'tvi' } description='140/100 l tvískipt grá/brún tunna. 240 blá- og fjólublá tunna.'></CheckFormGroup>
									</div>
									<input type="submit" value="Reikna" className="btn btn-primary"></input>
								</form>
									<div className={this.state.total==0? styles.hidden +" card mt-3" : styles.visible + " card mt-3"}>
									{/* <div className={ styles.visible + " card mt-3"}> */}
										<div className="card-body">
											<h5 className="card-title">Heildarkostnaður: {currencyFormat(this.state.total)}</h5>
											<h6 className="card-subtitile mb-2 text-muted">Mánaðarleg greiðsla frá febrúar-desember: {currencyFormat(this.state.month)}</h6>
											<div className='my-4'>
												<h4>Sundurliðun:</h4>

											<Table >
												<thead>
													<tr>			
														<th>Liður</th>
														<th>Stofn</th>
														<th>Hlf/Upph</th>
														<th>Álagning</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>Fasteingaskattur</td>
														<td>{this.state.field.fasteignamat}</td>
														<td>{percentageFormat(calcMap.FASTSK_A)}</td>
														<td>{currencyFormat(this.state.tFastsk)}</td>
													</tr>
													{
														!this.state.field.eignalod &&
														<tr>
															<td>Lóðaleiga</td>
															<td>{this.state.field.lodamat}</td>
															<td>{percentageFormat(calcMap.LODALEIGA_A)}</td>
															<td>{currencyFormat(this.state.tLodaleiga)}</td>
														</tr>
													}
													<tr>
														<td>Fráveitugjald</td>
														<td>{this.state.field.fasteignamat}</td>
														<td>{percentageFormat(calcMap.FRAVEITUGJ)}</td>
														<td>{currencyFormat(this.state.tFráveitugjald)}</td>
													</tr>
													<tr>
														<td>Vatnsgjald</td>
														<td>{this.state.field.fasteignamat}</td>
														<td>{percentageFormat(calcMap.VATNSGJALD)}</td>
														<td>{currencyFormat(this.state.tVatnsgjald)}</td>
													</tr>
													{
														this.state.field.sorp === 'tvi' ?
														<tr>
															<td>Tvískipt 140/100l</td>
															<td></td>
															<td>{currencyFormat(calcMap.SORPGJ_TV)}</td>
															<td>{currencyFormat(calcMap.SORPGJ_TV)}</td>
														</tr> : 
														<>
														<tr>
															<td>Heimilissorp {this.state.field.sorp == 'grunn' ? '240': '140'}l</td>
															<td></td>
															<td>{currencyFormat(this.state.field.sorp === 'grunn' ? calcMap.SORPGJ_GR_240 : calcMap.SORPGJ_GR_140)}</td>
															<td>{currencyFormat(this.state.field.sorp === 'grunn' ? calcMap.SORPGJ_GR_240 : calcMap.SORPGJ_GR_140)}</td>
														</tr>
														<tr>
															<td>Lífrænt sorp 140l</td>
															<td></td>
															<td>{currencyFormat(calcMap.SORPGJ_BR_140)}</td>
															<td>{currencyFormat(calcMap.SORPGJ_BR_140)}</td>
														</tr>
														</>
													}

													<tr>
														<td>Pappír 240l</td>
														<td></td>
														<td>{currencyFormat(calcMap.SORPGJ_BL_240)}</td>
														<td>{currencyFormat(calcMap.SORPGJ_BL_240)}</td>
													</tr>
													<tr>
														<td>Plast 240l</td>
														<td></td>
														<td>{currencyFormat(calcMap.SORPGJ_FJ_240)}</td>
														<td>{currencyFormat(calcMap.SORPGJ_FJ_240)}</td>
													</tr>
													<tr>
														<td>Fastagjald</td>
														<td></td>
														<td>{currencyFormat(calcMap.FASTAGJALD_A)}</td>
														<td>{currencyFormat(calcMap.FASTAGJALD_A)}</td>
													</tr>
													<tr>
														<td><b>Samtals</b></td>
														<td></td>
														<td></td>
														<td><b>{currencyFormat(this.state.total)}</b></td>
													</tr>
													
												</tbody>
											</Table>
											</div>
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