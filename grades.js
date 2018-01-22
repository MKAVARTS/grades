// create [scores] array that holds all of the grades
// create a {grades} object will hold property (grade) a value (how many of each)

const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60];
const grades = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0,
};

// create <div> in HTML document for printing javascript loops 

var gradesDiv = document.getElementById('grades');
var mostCommonDiv = document.getElementById('most-common');
var lowestCommonDiv = document.getElementById('lowest-common');

// variables for grades

var leastCommon = mostCommon;
var leastCommonGrade;
var mostCommon = 0;
var mostCommonGrade;

// subject each number in [scores] array to greater than equal to test at
// the different grade values. If they meet the condition the loop increments
// that grade letter's number in the {grades} object


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

// loop through {grades object} for the length of object
//  and print to "grades" <div> each key (grade letter) 
// and property (how many of each grade) to the HTML document. 

for(key in grades) {
    gradesDiv.innerHTML += [key] + ' : ' + grades[key] + '<br>';
}

// sort [scores] array from highest to lowest using sort function 

scores.sort(function(a,b) {
    return a - b;
});

// print lowest score (first score in in [score] array
// and highest score (last score in [score] array) to HTML document.

gradesDiv.innerHTML += '<br>'+ "lowest grade: " + scores[0] + '<br>';
gradesDiv.innerHTML += '<br>'+ "higest grade: " + scores[13] + '<br>';


// loop through {grades} object and test current position 
// to the last position for a greater than or equal to condition.
// at the end of the loop, store the highest number in most mostCommonGrade variable. 

for(key in grades) {
    if(grades[key] >= grades[key]) {
        mostCommon = grades[key];
    }
}

// loop through {grades} object 
// if "mostCommon" variable matches the letter grade
// print the letter grade to HTML <div>

for(key in grades) {
    if(grades[key] === mostCommon) {
    mostCommonGrade = key;
    mostCommonDiv.innerHTML += mostCommonGrade + " ";
  }
}


// loop through {grades} object and test current position 
// to the previous condition for a less than or equal to condition
// store the lowest grade in leastCommon varaible

for(key in grades) {
    if(grades[key] <= grades[key]) {
        leastCommon = grades[key];
    }
}


// loop through {grades} object 
// if "leastCommon" variable matches the letter grade
// print the letter grade to HTML <div>

for(key in grades) {
    if(grades[key] === leastCommon) {
        leastCommonGrade = key;
        lowestCommonDiv.innerHTML += leastCommonGrade + " ";
  }
}
