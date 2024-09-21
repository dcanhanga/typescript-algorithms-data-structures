import { describe, expect, it } from 'vitest';
import { decodedValue } from './resistor-color-duo';

describe('Desafio Resistor Color Duo', () => {
	const sut = decodedValue;
	it('Deve lançar um erro se passar uma cor inválida', () => {
		//@ts-ignore
		expect(() => sut(['pink', 'red'])).toThrow('Cor inválida');
	});
	it('Deve retornar 15 quando as cores forem "brown" e "green"', () => {
		const result = sut(['brown', 'green']);
		expect(result).toBe(15);
	});
	it('Deve retornar 92 quando as cores forem "white" e "red"', () => {
		const result = sut(['white', 'red']);
		expect(result).toBe(92);
	});
	it('Deve retornar 52 quando as cores forem "green" e "red"', () => {
		const result = sut(['green', 'red']);
		expect(result).toBe(52);
	});
});
