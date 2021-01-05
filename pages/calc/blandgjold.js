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
      }
    }
	}
	
	handleChange = (e) => {
		const [index, ftype, field] = e.target.id.split('-')
		let fields = this.state.field.vistun;
		if(field) {
			console.log(e);
			fields[index][ftype][field] = e.target.checked !== undefined? e.target.checked : e.target.value;
		} else if(ftype) {
			fields[index][ftype] = e.target.value;
		} else {
			let obj = {};
			obj[e.target.value] = {};
			fields[index] = obj;
		}
		
		this.setState({
			field: {
				vistun: fields,
			}
		});
		console.log(this.state.field)
	}

	addKid = (e) => {
		this.setState({field: {vistun: [...this.state.field.vistun,{}]}});
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
								this.state.field.vistun.map((barn, index) => {
									return (
										<div key={index}>
											<Form.Group controlId={index} key={index}>
												<Form.Label>Tegund vistunar/skóla {index+1}. barns</Form.Label>
												<Form.Control as="select" onChange={this.handleChange}>
													<option>Veldu tegund</option>
													<option>Dagforeldri</option>
													<option>Leikskóli</option>
													<option>Grunnskóli</option>
												</Form.Control>
											</Form.Group>
											{ this.state.field.vistun[index].Leikskóli !== undefined && 
											<FormGroup id={`${index}-Leikskóli`} label="Lengd dvalar í klukkustundum á dag?" type="number" value={this.state.field.vistun[index].Leikskóli} change={this.handleChange} step={0.25}></FormGroup>
											}
											{ this.state.field.vistun[index].Grunnskóli !== undefined &&
											<div key={`${index}-Grunnskóli`}>
											<Form.Check type='checkbox' id={`${index}-Grunnskóli-hressing`} label='Morgunhressing' onChange={this.handleChange}/>
											<Form.Check type='checkbox' id={`${index}-Grunnskóli-hadegi`} label='Hádegismatur' onChange={this.handleChange}/>
											<Form.Check type='checkbox' id={`${index}-Grunnskóli-fristund`} label='Frístund' onChange={this.handleChange}/>
											{ this.state.field.vistun[index].Grunnskóli.fristund == true &&
											<NrOfDaysPWeek id={`${index}-Grunnskóli-fristundDagar`} change={this.handleChange} value={this.state.field.vistun[index].Grunnskóli.fristundDagar}></NrOfDaysPWeek>}
											</div>}
										
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