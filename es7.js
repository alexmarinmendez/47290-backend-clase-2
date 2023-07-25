const grades = [8, 5, 7, 7, 5, 9, 7]

// const newGrades = grades.map(item => {
//     if (item>=9) return 10
//     return item + 2
// })
// const newGrades = grades.map(item => item>=9 ? 10 : item + 2)
const newGrades = grades.map(item => item ** 2)

console.log(newGrades)

const names = ['Uriel', 'Hector', 'Diego', 'Yully']
if (names.includes('Yully')) {
    console.log('Yully is on!!')
}