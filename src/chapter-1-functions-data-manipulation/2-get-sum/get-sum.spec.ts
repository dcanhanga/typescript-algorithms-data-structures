import { describe, expect, it } from 'vitest';
import { getSum } from './get-sum';
const sut = getSum;
describe('Get Sum', () => {
	it('Deve retornar a soma de 20 - 5 = 15', () => {
		const result = sut(20, -5);
		expect(result).toBe(15);
	});

	it('Deve retornar a soma de 20 + 10 = 30', () => {
		const result = sut(20, 10);
		expect(result).toBe(30);
	});

	it('Deve retornar a soma de 0 + 0 = 0', () => {
		const result = sut(0, 0);
		expect(result).toBe(0);
	});

	it('Deve retornar a soma de -5 + 5 = 0', () => {
		const result = sut(-5, 5);
		expect(result).toBe(0);
	});

	it('Deve retornar a soma de -10 + -5 = -15', () => {
		const result = sut(-10, -5);
		expect(result).toBe(-15);
	});
});
