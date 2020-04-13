// MEDIUM (1)
// Implement pow(x, n), which calculates x raised to the power n (xn).
// Example 1:
// Input: 2.00000, 10
// Output: 1024.00000
// Example 2:
// Input: 2.10000, 3
// Output: 9.26100
// Example 3:
// Input: 2.00000, -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

var num1 = prompt("Enter base number.")
var num2 = prompt("Enter exponent number.")

function power(num1, num2) {
    return Math.pow(num1, num2);
};

console.log(power(num1 , num2));