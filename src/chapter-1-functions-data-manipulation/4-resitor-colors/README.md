# Desafio: Decodificação de Resistor

## Introdução
Os resistores são componentes eletrônicos comuns usados em circuitos para limitar a corrente elétrica. Eles são codificados com cores que representam seus valores de resistência. Devido ao tamanho pequeno dos resistores, os fabricantes utilizam um código de cores para indicar esses valores.

Neste exercício, seu objetivo é criar um programa que ajude a calcular o valor da resistência a partir dos códigos de cores dos resistores.

## Instruções

Você deve implementar duas funcionalidades principais:

1. **`resistorColorToValue(color: string): number`**
    - Dada uma cor, essa função deve retornar o valor numérico correspondente àquela cor.
    - Use a tabela de cores e valores abaixo:
      - black: 0
      - brown: 1
      - red: 2
      - orange: 3
      - yellow: 4
      - green: 5
      - blue: 6
      - violet: 7
      - grey: 8
      - white: 9

2. **`listResistorColors(): string[]`**
    - Essa função deve retornar uma lista com as cores na ordem em que os valores são representados. Exemplo: `["black", "brown", "red", ...]`

## Tabela de Referência

| Cor      | Valor |
|----------|-------|
| black    | 0     |
| brown   | 1     |
| red | 2     |
| orange  | 3     |
| yellow  | 4     |
| green    | 5     |
| blue     | 6     |
| violet  | 7     |
| grey    | 8     |
| white   | 9     |

### Assinaturas das Funções

```typescript
/**
 * Dada uma cor, retorna o valor numérico correspondente àquela cor.
 * @param {string} color - A cor do resistor.
 * @returns {number} - O valor numérico associado à cor.
 */
function resistorColorToValue(color: string): number;

/**
 * Retorna uma lista das cores de resistores em ordem do valor correspondente.
 * @returns {string[]} - Lista de cores em ordem do valor numérico.
 */
function listResistorColors(): string[];
```

## Exemplos

```typescript
// Exemplo de uso da função resistorColorToValue
resistorColorToValue('red');    // 2
resistorColorToValue('blue');   // 6
resistorColorToValue('yellow'); // 4

// Exemplo de uso da função listResistorColors
listResistorColors(); // ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
```

## Restrições
1. **Validação de Input**: A função `resistorColorToValue` deve verificar se a cor fornecida é válida. Caso contrário, deve retornar um erro ou valor que indique a entrada inválida.
2. **Apenas cores válidas**: A função `listResistorColors` deve retornar uma lista ordenada apenas com as cores válidas e na sequência correta.

## Dicas
- Use um array ou objeto para armazenar a correspondência entre cores e valores.
- O índice das cores no array pode ser usado diretamente como valor numérico.

