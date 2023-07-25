const obj1 = {
    propiedad1: 1,
    propiedad2: 'My property',
    propiedad3: true
}

const obj2 = {
    propiedad4: 'Backend',
    propiedad5: [8, 5, 7, 7, 5, 9, 7]
}

// let { propiedad1, propiedad2 } = obj1
// console.log(propiedad1)

const obj3 = { ...obj1, ...obj2 }
// console.log(obj3)

const {propiedad1, ...rest} = obj1
console.log(propiedad1)

console.log(rest)