import React from 'react';
/**
 * 
 * @param {String} id 			Id for input
 * @param {String} label 		Visible label for input
 * @param {String} type 		Input type (number, string)
 * @param {String} description 	Description below input (default="")
 * @param {*} value 			Value of the input
 * @param {Function} change 	Function called on change 
 */
const FormGroup = ( { id, label, type ,description="", value, change, required=false, step=1} ) => {
	return (
		<div className="form-group">
			<label htmlFor={ id }>{ label }</label>
			<input type={ type } className="form-control" id={ id } value={ value } onChange={ change } required={required} step={step}></input>
			{description !== "" && <small id="description" className="form-text text-muted" >{ description }</small>}
		</div>
	)
}

export default FormGroup;