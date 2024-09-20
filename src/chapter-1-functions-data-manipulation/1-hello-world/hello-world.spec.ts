import { describe, it, expect } from "vitest";
import { helloWorld } from "./hello-world";


const sut = helloWorld;

describe('Hello World', () => {
  it("Deve retornar 'Hello World!' como uma string", () => {
    const result = sut();
    expect(result).toBe('Hello World!');
  });
});
