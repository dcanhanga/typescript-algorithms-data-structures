## Desafio: Two-fer One
Neste desafio, você deve implementar uma função que simula a ação de dar um biscoito para outra pessoa em uma promoção de "dois pelo preço de um". Se você souber o nome da pessoa, deve referenciá-la diretamente, mas se não souber o nome, use `você` como pronome. O objetivo é retornar a frase adequada.

### Instruções

Você deve escrever uma função chamada `TwoFerOne` que retorna uma string com base no nome da pessoa. Se o nome for fornecido, a frase deve mencionar a pessoa. Caso contrário, a frase deve usar `você`.

### Assinatura da Função

```typescript
/**
 * Retorna uma string personalizada para a promoção de "dois pelo preço de um".
 * @param {string} [name] - O nome da pessoa para quem será dado o biscoito. Se não for fornecido, use 'you'.
 * @returns {string} - A frase indicando quem receberá o biscoito.
 */
function TwoFerOne(name?: string): string;
```

### Exemplos

```typescript
twoFer("Alice"); // "Um para Alice, um para mim."
twoFer("Brenda"); // "Um para Brenda, um para mim."
twoFer(); // "Um para você, um para mim."
```
### Restrições

- A função deve retornar uma string.
- O parâmetro `name` é opcional.
- Se o nome não for fornecido, o padrão deve ser `você`.

### Dicas

- Use uma estrutura de controle para verificar se o nome foi passado como argumento.
- Se o nome não for passado, utilize a string `você` como valor padrão.


### Desafio Extra

Adapte a função para lidar com diferentes casos de entrada, como strings vazias ou números, e retorne mensagens de erro apropriadas nesses casos.