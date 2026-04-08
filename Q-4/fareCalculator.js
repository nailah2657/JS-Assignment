let base = parseInt(prompt("Enter base:"));
let distance = parseInt(prompt("Enter distance:"));
let minutesLate = parseInt(prompt("Enter minuteslate:"));
let seed = parseInt(prompt("Enter seed:"));

let fare = base + 7 *distance;

if(minutesLate > 15) fare += 20;

if(distance > 10) fare = fare + Math.floor(fare / 10);

if(seed % 2 !==0) fare -= seed;
else fare += seed;

fare = Math.ceil(fare / 5)* 5;

alert(fare);
