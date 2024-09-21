import { describe, expect, it } from 'vitest';
import { twoFerOne } from './two-fer-one';

const sut = twoFerOne;

describe('Desafio Two-Fer', () => {
	it("Deve retornar 'Um para Alice, um para mim.' quando o nome for 'Alice'", () => {
		const result = sut('Alice');

		expect(result).toBe('Um para Alice, um para mim.');
	});

	it("Deve retornar 'Um para você, um para mim.' quando nenhum nome for fornecido", () => {
		const result = sut();
		expect(result).toBe('Um para você, um para mim.');
	});

	it("Deve retornar 'Um para João, um para mim.' quando o nome for 'João'", () => {
		const result = sut('João');

		expect(result).toBe('Um para João, um para mim.');
	});
});
