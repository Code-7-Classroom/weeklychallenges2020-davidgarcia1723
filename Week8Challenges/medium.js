// MEDIUM: Write a function that would allow you to do this:
// var sharePizza = cutPizzaSlices(8);
// console.log(sharePizza(2));                                                                                                                                                                    
//   // prints "Each person gets 4.00 slices of pizza"
// console.log(sharePizza(3)); 
//   // prints "Each person gets 2.67 slices of pizza"


var sharePizza = cutPizzaSlices(8);
    
function cutPizzaSlices(slices) {
    return function sharePizza(people){
        console.log("Each person gets " + (slices / people) + " slices of pizza");
    };
};    

console.log(sharePizza(4));
console.log(sharePizza(3));