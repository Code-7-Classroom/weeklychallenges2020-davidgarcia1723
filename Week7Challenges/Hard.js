// HARD: Given the information below for Tom and Jerry. 

// Tom - 	height:  9in   	mass: 8 lbs
// Jerry - 	height: 10cm 	mass: 45 g

// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:

//     BMI = mass / height ^2 = mass / (height * height)

// Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

var tomMass = 8; //lb
var tomHeight = 9; //in
var jerryMass = 10; //g
var jerryHeight = 45; //cm

var bmiTom = tomMass / (tomHeight * tomHeight);
var bmiJerry = jerryMass / (jerryHeight * jerryHeight);

var higherBMI = bmiTom > bmiJerry;

console.log("Does Tom have a higher BMI than Jerry?");
console.log(higherBMI);
