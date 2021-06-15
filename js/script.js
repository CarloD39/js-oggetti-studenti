var lonStudent = document.getElementById('lonely-student');

var student = {
    name: 'Pino',
    lastaName: 'Nopi',
    age: 122
}

for(var k in student) { // k sta per key dell'oggetto student;
    lonStudent.innerHTML += '<li>' + (k,student[k]) + '</li>';
}

// ----------------