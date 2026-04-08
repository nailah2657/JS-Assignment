let a = parseInt(prompt("Enter no. of correct answers:"));
let b = parseInt(prompt("Enter no. of partially correct answer:"));
let c = parseInt(prompt("Enter no. of wrong answer:"));

let score = 3*a + b - 2*c;
let result = "FAIL";

if(score<0) score = 0;
if(a + b + c > 50) score -= 10;
if(score >= 60) result = "PASS"; 

alert(score + ',' + result);