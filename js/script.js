var lonStudent = document.getElementById('lonely-student');

var student = {
    name: 'Pino',
    lastName: 'Nopi',
    age: 122
}

for(var k in student) { // k sta per key dell'oggetto student;
    lonStudent.innerHTML += '<li>' + (k,student[k]) + '</li>';
}

// ----------------

var socialStudents = document.getElementById('students-group');

var classroom = {
    scholars : [
        {nome: 'Carlo', cognome: 'Olrac',},
        {nome: 'Luigi', cognome: 'Igiul'},
        {nome: 'Luca', cognome: 'Acul'}
    ]
}

for(var i = 0; i < classroom.scholars.length; i++){

    for(var k in classroom.scholars[i]) {
        socialStudents.innerHTML += '<li>' + (k,classroom.scholars[i] [k]) + '</li>';
    }
}

// ------------------