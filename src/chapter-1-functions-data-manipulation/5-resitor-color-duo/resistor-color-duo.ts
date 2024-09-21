const COLORS = [
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
type Color = (typeof COLORS)[number];
export function decodedValue(colors: Color[]): number {
	const [firstBand, secondBand] = colors;
	const hasInvalidColorCode =
		!COLORS.includes(firstBand) || !COLORS.includes(secondBand);
	if (hasInvalidColorCode) {
		throw new Error('Cor inválida');
	}
	console.log(firstBand, secondBand);
	const firstBandValue = COLORS.indexOf(firstBand);
	const secondBandValue = COLORS.indexOf(secondBand);
	return firstBandValue * 10 + secondBandValue;
}
