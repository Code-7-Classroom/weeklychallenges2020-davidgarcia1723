// Easy
//  Create two variables and assign a person’s name to each.
// Console log a statement that says which name is shorter or longer, and by how many characters.
// Example output: “The name Thomas is longer than John by 2 characters”
var firstName = "David";
var secondName = "Garcia";
console.log(firstName.length)
console.log('The name ' + firstName + ' is longer than ' + secondName + ' by ' + Math.abs(firstName.length - secondName.length) + ' character.')