import React from 'react';
import styles from '../../styles/Home.module.css';
import FormGroup from '../../components/form-group';
import PageHead from '../../components/page-head';
import {currencyFormat, inputFormat, formatedToInt} from '../../components/functions.js';
import CheckFormGroup from '../../components/check-form-group';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import NrOfDaysPWeek from '../../components/nr-of-days-p-week';
import { selectTag } from '../../constants'


class Blandgjold extends React.Component {
  constructor(props) {
		super(props);
	  this.state = {
      field: {
				vistun: [''],
				dagforeldri: [],
				leikskoli: [],
				grunnskoli: [],
				friDays: selectTag.LBL1,
      }
    }
	}
	
	handleChange = (e) => {
		console.log(e.target)
		const [ftype, index, field] = e.target.id.split('-')
		let fields = this.state.field;
		field ? console.log('is field'): console.log('no field');
		if(field) {
			let obj = {};
			obj[field] = e.target.value;
			fields[ftype][index] = obj;
		} else {
			fields[ftype][index] = e.target.value;
		}
		
		this.setState({
			field: fields,
		});
		console.log(this.state)
	}

	handleLoopChange = (e, index) => {
		console.log(e.target.value);
		console.log(index);
		let fields = this.state.field;
		switch (e.target.value) {
			case 'Dagforeldri':
				fields.dagforeldri = [...this.state.field.dagforeldri, '']
				break;
			case 'Leikskóli':
				fields.leikskoli = [...this.state.field.leikskoli, '']
				break;
			case 'Grunnskóli':
				fields.grunnskoli = [...this.state.field.grunnskoli, '']
				break;
			default:
				break;
		}
		fields.vistun[index] = e.target.value;
		this.setState({
			field: fields,
		})
		console.log(this.state.field.vistun)
	}

	addKid = (e) => {
		this.setState({field: {vistun: [...this.state.field.vistun,'']}});
	}

	handleSubmit = (e) => {

	}

  render() {
    return (
      <div className={ styles.container }>
				<PageHead title="Reiknivél vistunargjalda"></PageHead>
				<div className={ styles.main }>
					<div className="container">
						<h1>Reiknivél vistunargjalda</h1>
					</div>
					<div className="container">
						<Form onSubmit={this.handleSubmit}>
							{
								this.state.field.vistun.map((vistun, index) => {
									return (
										<Form.Group controlId={index} key={index}>
											<Form.Label>Tegund vistunar/skóla {index+1}. barns</Form.Label>
											<Form.Control as="select" onChange={(e) => this.handleLoopChange(e, index)} value={vistun}>
												<option>Veldu tegund</option>
												<option>Dagforeldri</option>
												<option>Leikskóli</option>
												<option>Grunnskóli</option>
											</Form.Control>
										</Form.Group>
									)
								})
							}
							{
								this.state.field.leikskoli.map((barn, index) => {
									return (
										<div key={`leikskoli-${index}`}>
											<FormGroup id={`leikskoli-${index}`} label="Lengd dvalar í klukkustundum á dag?" type="number" value={barn} change={this.handleChange} step={0.25}></FormGroup>
										</div>
									)
								})
							}
							{
								this.state.field.grunnskoli.map((barn, index) => {
									return (
										<div key={`grunnskoli-${index}`}>
											<Form.Check type='checkbox' id={`grunnskoli-${index}-hressing`} label='Morgunhressing' onChange={this.handleChange}/>
											<Form.Check type='checkbox' id={`grunnskoli-${index}-hadegi`} label='Hádegismatur' onChange={this.handleChange}/>
											<Form.Check type='checkbox' id={`grunnskoli-${index}-fristund`} label='Frístund' onChange={this.handleChange}/>
											{ this.state.field.grunnskoli[index].fristund == true &&
											<Form.Check type='checkbox' id={`grunnskoli-${index}-fristundDagar`} label='Fjöldi daga á viku' onChange={this.handleChange}/>}
										</div>
									)
								})
							}
							<label>Bæta við barni</label>
							<Button variant="secondary" onClick={ this.addKid }>+</Button>
							<Button variant="primary" type="submit">Reikna</Button>
						</Form>
					</div>
				</div>
      </div>
    )
  }
}

export default Blandgjold;