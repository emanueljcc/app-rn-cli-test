const formatDate = (date: Date) => {
	const dateFormat = new Date(date);
	const options = {day: 'numeric', month: 'long', year: 'numeric'};
	let result = dateFormat.toLocaleDateString('es-ES', options);
	let lastPosition = result.lastIndexOf('de');

	if (lastPosition !== -1) {
		result =
			result.substring(0, lastPosition) +
			',' +
			result.substring(lastPosition + 2);
	}

	return result;
};

const formatNumber = (number: number) => {
	const formattedTotal = number.toLocaleString('en-US', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});
	const splitTotal = formattedTotal.split('.');
	const integerPart = splitTotal[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
	const decimalPart = splitTotal[1];
	const finalTotal = `${integerPart}.${decimalPart}`;
	return finalTotal;
};

const getMonth = () => {
	const months = [
		'Enero',
		'Febrero',
		'Marzo',
		'Abril',
		'Mayo',
		'Junio',
		'Julio',
		'Agosto',
		'Septiembre',
		'Octubre',
		'Noviembre',
		'Diciembre',
	];
	const date = new Date();
	const currentMoth = months[date.getMonth()];

	return currentMoth;
};

export {formatDate, formatNumber, getMonth};
