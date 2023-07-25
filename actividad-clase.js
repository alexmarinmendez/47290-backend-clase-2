const objetos =  [
	{
		manzanas:3,
		peras:2,
		carne:1,
		jugos:5,
		dulces:2
	},
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}
]

// console.log(Object.keys(objetos[0]))
// console.log(Object.keys(objetos[1]))
// const result = [...Object.keys(objetos[0]), ...Object.keys(objetos[1])]
// const result = Object.keys(objetos[0]).concat(Object.keys(objetos[1]))
const result = []
for (let index = 0; index < Object.keys(objetos[0]).length; index++) {
    if (!result.includes(Object.keys(objetos[0])[index])) {
        result.push(Object.keys(objetos[0])[index])
    }
    if (!result.includes(Object.keys(objetos[1])[index])) {
        result.push(Object.keys(objetos[1])[index])
    }
}
console.log(result)