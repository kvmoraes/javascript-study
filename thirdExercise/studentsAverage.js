let students = [
    { name: 'Joao', grades: [5, 7.5, 8, 8, 4.5, 9] },
    { name: 'Breno', grades: [10, 8.5, 10, 7.5, 9, 6.5] },
    { name: 'Pedro', grades: [5.5, 8.3, 9.5, 8, 9, 6.9] },
    { name: 'Fulano', grades: [5.9, 8.5, 4, 8, 9.5, 6] },
    { name: 'Angelino', grades: [0, 4.8, 9.2, 8.5, 4.9, 6.1] },
    { name: 'Jaja', grades: [10, 4.3, 6.8, 8.25, 9.4, 6] },
    { name: 'Frederico', grades: [3.5, 8, 10, 8.5, 9, 3.8] },
    { name: 'Jonatas', grades: [6, 8.5, 8, 6.5, 7, 10] },
    { name: 'Henrique', grades: [4, 8.2, 5.5, 8.5, 5.4, 6] }
]

let numberOfExams = 6;

let studentsAverage = {}

for (let student of students) {
    if(!studentsAverage[student.name]) {
        studentsAverage[student.name] = {
            'name': student.name, 'some': 0, 'grades': student.grades
        }
    }

    student.grades.forEach(grade => {
        studentsAverage[student.name].some += grade
    })

}

studentsAverage = Object.values(studentsAverage)
for (let student of studentsAverage) {
    student.average = student.some / numberOfExams
    delete student.some

    student.average = student.average.toFixed(1)
}

console.log(studentsAverage)