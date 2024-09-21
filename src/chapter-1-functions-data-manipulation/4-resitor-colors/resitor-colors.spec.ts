import { describe, expect, it } from 'vitest';
import { listResistorColors, resistorColorToValue } from './resistor-colors';

describe('Desafio Resistor Colors', () => {
	describe('resistorColorToValue', () => {
		const sut = resistorColorToValue;
		it('Deve lançar um erro se passar uma cor fora do padrão do código de cor', () => {
			// @ts-ignore
			expect(() => sut().resistorColorToValue('pink')).toThrow();
		});
		it('Deve retornar zero com a com black', () => {
			const result = resistorColorToValue('black');
			expect(result).toBe(0);
		});
		it('Deve retornar 9 com a cor white', () => {
			const result = resistorColorToValue('white');
			expect(result).toBe(9);
		});
		it('Deve retornar 5 com a cor green', () => {
			const result = resistorColorToValue('green');
			expect(result).toBe(5);
		});
	});
	describe('listResistorColors', () => {
		const sut = listResistorColors;
		const listOfColor = [
			'black',
			'brown',
			'red',
			'orange',
			'yellow',
			'green',
			'blue',
			'violet',
			'grey',
			'white',
		];
		it(`Deve retornar a seguinte lista: [${listResistorColors()}]`, () => {
			const result = sut();
			expect(result).toEqual(listOfColor);
		});
	});
});
