const createStudent = (nameParam , gradeParam) => {
    let studentTemplate = {
        name: nameParam,
        grade: gradeParam
    }
    return studentTemplate;
}

const addMathGrade = (studentParam) => {
    studentParam.math = "B";
    return studentParam;
}

const addHistoryGrade = (studentParam) => {
    studentParam.history = "C";
    return studentParam;
}

const addScienceGrade = (studentParam) => {
    studentParam.scince = "A";
    return studentParam;
}

let realStudent = createStudent("Gandalf Grey" , "First")
realStudent = addMathGrade(realStudent);
realStudent = addHistoryGrade(realStudent);
realStudent = addScienceGrade(realStudent);
console.log(realStudent);