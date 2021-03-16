import React from 'react';
import Form from 'react-bootstrap/Form';
import { selectTag } from '../constants'

const NrOfDaysPWeek = ({ id, change, value}) => {
	return (
		<Form.Group controlId={ id }>
			<Form.Label>Fjöldi daga á viku</Form.Label>
				<Form.Control  as="select" onChange={change} value={value}>
					<option>{selectTag.LBL1}</option>
					<option>{selectTag.LBL2}</option>
					<option>{selectTag.LBL3}</option>
					<option>{selectTag.LBL4}</option>
					<option>{selectTag.LBL5}</option>
				</Form.Control>
		</Form.Group>
	)
}

export default NrOfDaysPWeek;