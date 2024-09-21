# Resistor Color Duo

### Descrição

Neste exercício, você será desafiado a criar um programa que ajudará a calcular o valor de resistores usando um código de cores. A tarefa aqui é criar uma função que receba as cores das bandas e retorne o valor numérico correspondente.

### Instruções

1. Cada resistor possui um valor de resistência, mas devido ao tamanho reduzido, em vez de exibir os números diretamente, os fabricantes usam um código de cores.
2. As duas primeiras bandas de cores de um resistor seguem um esquema de codificação simples: cada cor corresponde a um número. Exemplo, se eles imprimissem uma faixa **brown(valor 1)**  seguida por uma faixa **green (valor 5)**, isso seria traduzido para o número **15**


Neste exercício, você criará um programa que converte as cores das duas primeiras bandas em um número de dois dígitos. Se forem fornecidas mais de duas cores, a função ignorará as cores extras.

### Exemplo de Codificação

- **black**: 0
- **brown**: 1
- **red**: 2
- **orange**: 3
- **yellow**: 4
- **green**: 5
- **blue**: 6
- **violet**: 7
- **grey**: 8
- **white**: 9

### Objetivo

A função que você vai implementar deve aceitar uma lista de cores e retornar um número de dois dígitos correspondente às duas primeiras cores. Se mais de duas cores forem fornecidas, ignore as cores extras.

### Assinatura da Função

```typescript
/**
 * Retorna o valor correspondente às duas primeiras cores das bandas do resistor.
 * @param {string[]} colors - Lista de cores das bandas.
 * @returns {number} - O valor numérico correspondente às duas primeiras bandas.
 * @throws {Error} - Se uma cor inválida for passada.
 */
function decodedValue(colors: string[]): number;
```

### Exemplos

```typescript
decodedValue(["brown", "green"]); // 15
decodedValue(["brown", "green", "violet"]); // 15 (ignora "violet")
decodedValue(["red", "blue"]); // 26
decodedValue(["yellow", "orange"]); // 43
```

### Restrições

- A função deve aceitar um array de cores e ignorar qualquer cor após as duas primeiras.
- Se uma cor inválida for passada, a função deve lançar um erro.
- A função deve funcionar apenas com as cores listadas acima.

### Dicas

- Armazene as cores e seus valores em um objeto ou mapa para facilitar a busca.
- Use `slice()` para pegar apenas as duas primeiras cores do array.
- Implemente uma validação para verificar se as cores passadas são válidas.


