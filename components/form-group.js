import React from 'react';

const FormGroup = ( { id, label, type ,description="", value, change} ) => {
	return (
		<div className="form-group">
			<label htmlFor={ id }>{ label }</label>
			<input type={ type } className="form-control" id={ id } value={ value } onChange={ change }></input>
			{description !== "" && <small id="description" className="form-text text-muted" >{ description }</small>}
		</div>
	)
}

export default FormGroup;