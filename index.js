import { studentsArr } from './studentsArr.js'

const grades = [75, 83, 66, 43, 55, 99, 87, 16, 89, 64, 70, 80, 94, 77, 66, 73]



const totalGrades = grades.reduce(function(total, currentGrade){
    return total + currentGrade
})

console.log(`The class average is ${totalGrades/grades.length}`)


function calculateClassAverage(studentsArr) {
    const totalGrades = studentsArr.reduce(function(total, currentStudent){
        return total + currentStudent.grade
    }, 0)
    return totalGrades / studentsArr.length
}

console.log( 'Class average between Mike , Emma and Seth  ' + calculateClassAverage(studentsArr))