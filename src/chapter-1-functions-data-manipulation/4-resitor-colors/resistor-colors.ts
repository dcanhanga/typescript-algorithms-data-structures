/* // Solução com Objeto
type ResistorColorMap = {
	[key in
		| 'black'
		| 'brown'
		| 'red'
		| 'orange'
		| 'yellow'
		| 'green'
		| 'blue'
		| 'violet'
		| 'grey'
		| 'white']: number;
};

const COLORS: ResistorColorMap = {
	black: 0,
	brown: 1,
	red: 2,
	orange: 3,
	yellow: 4,
	green: 5,
	blue: 6,
	violet: 7,
	grey: 8,
	white: 9,
};

type Color = keyof typeof COLORS;

export function resistorColorToValue(color: Color): number {
	const value = resistorColors[color];
	if (value === undefined) {
		throw new Error('Cor inválida');
	}
	return value;
}

export function listResistorColors(): Color[] {
	return Object.keys(resistorColors).filter((color): color is Color =>
		Object.keys(resistorColors).includes(color),
	);
}
*/
type Color = (typeof COLORS)[number];

export const COLORS = [
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
] as const;

export const resistorColorToValue = (color: Color) => COLORS.indexOf(color);

export const listResistorColors = () => COLORS;
