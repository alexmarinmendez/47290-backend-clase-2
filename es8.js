const impuestos = {
    iva: 16,
    imp2: 5,
    imp3: 10
}

console.log(Object.entries(impuestos))
console.log(Object.keys(impuestos))
console.log(Object.values(impuestos))

const impuestoTotal = Object.values(impuestos).reduce((acc, item) => acc + item)
console.log(impuestoTotal)