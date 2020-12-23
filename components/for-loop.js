import React from 'react';

const ForLoop = ({times, obj, attr}) => {
	var rows = []
	for (var i = 0; i<times; i++) {
		obj(attr);
	}
} 

export default ForLoop;