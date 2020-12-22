import React from 'react';
import styles from '../../styles/Home.module.css';
import FormGroup from '../../components/form-group';
import PageHead from '../../components/page-head';
import {currencyFormat, inputFormat, formatedToInt} from '../../components/functions.js';
import CheckFormGroup from '../../components/check-form-group';
import Form from 'react-bootstrap/Form'

class Blandgjold extends React.Component {
  constructor(props) {
		super(props);
	  this.state = {
      field: {
        dagBorn: '',
        leikBorn: '',
				skolBorn: '',
				leikHours: '',

      }
    }
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
							<FormGroup id="dagBorn" label="Fjöldi barna hjá dagforeldri" type="number" value={this.state.field.dagBorn} change={this.handleChange}></FormGroup>
							<FormGroup id="leikBorn" label="Fjoldi barna á leikskóla" type="number" value={this.state.field.leikBorn} change={this.handleChange}></FormGroup>
							<FormGroup id="leikHours" label="Fjöldi klukkustunda á dag" type="number" value={this.state.field.leikHours} change={this.handleChange}></FormGroup>
							<FormGroup id="skolMatur" label="Fjöldi barna í hádegismat" type="number" value={this.state.field.launchHours} change={this.handleChange}></FormGroup>
						</Form>
					</div>
				</div>
      </div>
    )
  }
}

export default Blandgjold;