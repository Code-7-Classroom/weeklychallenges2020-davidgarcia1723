var userInput = prompt("What did you say?");

if (userInput === userInput.toUpperCase()) {
console.log("The user is shouting!");
}
else if (userInput === userInput.toLowerCase()) {
console.log("The user is whispering.")
}
else {
console.log("The user is talking normally.")
}


