// EASY: Write a function that would allow you to do this:
// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"

var run = exercise('running');
var swim = exercise('swimmming');

function exercise(value) {
    return function () {
    return ("Today's Exercise: " + (value));
    };
};

console.log(run());
console.log(swim());