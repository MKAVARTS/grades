const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60];
const grades = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0,
}; // You'll need to change this line of code

var gradesDiv = document.getElementById('grades');


for (var i = 0; i < scores.length; i++) {
    if(scores[i] >= 90) {
        grades.A++;
    } else if(scores[i] >= 80) {
        grades.B++;
    } else if(scores[i] >= 70) {
        grades.C++;
    } else if(scores[i] >= 60) {
        grades.D++;
    } else {
        grades.F++;
    }
}

for(key in grades) {
    gradesDiv.innerHTML += [key] + ' : ' + grades[key] + '<br>';
}

scores.sort(function(a,b) {
    return a - b;
});

gradesDiv.innerHTML += '<br>'+ "lowest grade: " + scores[0] + '<br>';
gradesDiv.innerHTML += '<br>'+ "higest grade: " + scores[13] + '<br>';

var mostCommon = 0;
var mostCommonGrade;

for(key in grades) {
    if(grades[key] >= mostCommon) {
        mostCommon = grades[key];
    }
    if(grades[key] === mostCommon) {
        mostCommonGrade = key;
    }
}

gradesDiv.innerHTML += '<br>' + 'most common grade is: ' + mostCommonGrade +'<br>';

var leastCommon
var leastCommonGrade;


for(key in grades) {
    if(grades[key] <= grades[key]) {
        grades[key] = grades[key];
        leastCommon = grades[key];
    }
    if(grades[key] === leastCommon) {
        leastCommonGrade = key;
    }
}

gradesDiv.innerHTML += '<br>' + 'least common grade is: ' + leastCommonGrade;
