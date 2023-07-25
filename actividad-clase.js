const objetos = [
	{
		manzanas: 3,
		peras: 2,
		carne: 1,
		jugos: 5,
		dulces: 2,
	},
	{
		manzanas: 1,
		sandias: 1,
		huevos: 6,
		jugos: 1,
		panes: 4,
	},
];

// ya agregue aqui mi codigo
const keys = objetos.reduce((acc, curr) => {
	Object.keys(curr).forEach((key) => {
		if (!acc.includes(key)) {
			acc.push(key);
		}
	});
	return acc;
}, []);

console.log(keys);
