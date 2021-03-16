import React from 'react';

/**
 * 
 * @param {String} id 			Id for Input
 * @param {String} label 		Visible label for input
 * @param {String} type 		Checkbox or radio
 * @param {String} description 	Description below input
 * @param {*} value 			State component (default="")
 * @param {Function} change 	Function called onChange
 * @param {Boolean} checked		Wheather the box is checked or not.
 */
const FormGroupCheck = ( { id, label,  type ,description="", value="", change, checked} ) => {
	return (
		<div className="form-check">
			<input type={ type } className="form-check-input" id={ id } value={ value } onChange={ change } checked={ checked }></input>
      		<label className="form-check-label" htmlFor={ id }>{ label }</label>
			{description !== "" && <small id="description" className="form-text text-muted" >{ description }</small>}
    </div>
	)
}

export default FormGroupCheck;