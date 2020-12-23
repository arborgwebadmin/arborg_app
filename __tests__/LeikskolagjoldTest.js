import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Leikskolagjold from "../pages/calc/leikskolagjold";
import React from "react";

describe('Leikskolagjold', () => {
	const setup = () => {
		render(<Leikskolagjold></Leikskolagjold>);
		return screen.getByLabelText(/Fjöldi/)
	}
	test('renders Leikskolagjold component', () => {
		render(<Leikskolagjold></Leikskolagjold>);
		const comp = screen.getByLabelText(/Fjöldi/)

		fireEvent.change(comp, {
			target: {value: 5}
		});
		expect(comp.value).toBe('5');
	});

	test('It should not allow letters to be inputted', () => {
		const input = setup();
		fireEvent.change(input, { target: {value: 'k'} });
		expect(input.value).toBe('');
	})
})
