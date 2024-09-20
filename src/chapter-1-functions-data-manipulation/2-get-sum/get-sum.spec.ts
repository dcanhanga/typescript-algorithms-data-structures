import { describe, expect, it } from "vitest";
import { getSum } from "./get-sum";
const sut = getSum
describe('Get Sum', () => {
  it('Deve retornar a soma de 20 - 5 = 15', () => {
    expect(sut(20, -5)).toBe(15);
  });

  it('Deve retornar a soma de 20 + 10 = 30', () => {
    expect(sut(20, 10)).toBe(30);
  });

  it('Deve retornar a soma de 0 + 0 = 0', () => {
    expect(sut(0, 0)).toBe(0);
  });

  it('Deve retornar a soma de -5 + 5 = 0', () => {
    expect(sut(-5, 5)).toBe(0);
  });

  it('Deve retornar a soma de -10 + -5 = -15', () => {
    expect(sut(-10, -5)).toBe(-15);
  });
});
