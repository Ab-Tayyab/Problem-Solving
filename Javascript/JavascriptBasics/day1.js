// 1.Declare Variables: Declare let variables for a player’s name, runs, and team. Log them. 

// let name = "Abdullah";
// let runs= 100;
// let isTeamPresent = true;
// console.log(name + " , "+ runs + " , "+isTeamPresent) ;

// 2.Swap Variables: Swap two run scores using a temporary variable. 

// let num1 = 10;
// let num2 =20;
// let num;
// console.log(num1 + " and " + num2)
// num = num1;
// num1=num2;
// num2=num;
// console.log(num1 + " and " + num2)

// 3.Check Positive: Use if to check if a match score is positive and log "Positive". 

// let num = 10;
// if(num>0){
//     console.log("Positive")
// }

// 4.Age Check: Check if a fan’s age is >= 18 and log "Can Vote" or "Cannot Vote". 

// let age = 17;
// if(age>=18){
//     console.log("Can Vote");
// }
// else{
//     console.log("Cannot Vote");
// }

// 5.Grade System: Assign a grade (A, B, C) based on a score (0–100) using if-else. 

// let grade = 39;
// if(grade>80){
//     console.log("A")
// }
// else if(grade>60)
// {
//     console.log("B")
// }
// else if(grade>40){
//     console.log("C")
// }
// else{
//     console.log("F")
// }

// 6.Day Type: Log whether a day (e.g., "Sunday") is a weekend using a ternary operator. 
// let day = "Friday"
// console.log(day == "Sunday" ? "Weakend":"working day");

// 7.Ticket Price: Set ticket price based on seat type ("VIP" = 100, "Regular" = 50). 

// let vip = 100;
// let reg = 50;
// let seat = "vip";
// if(seat=="vip"){
//     console.log("Ticket Price is: " + vip)
// }
// else{
//     console.log("Ticket Price is: " + reg)
// }

// 8.Weather Check: Log "Play" if temperature is between 20–30°C, else "Cancel". 

// let temp = 31;
// if(temp>=20 && temp<=30){
// console.log("Play")
// }
// else{
//     console.log("Cancel")
// }

// 9.Number Parity: Check if a number of overs is even or odd using modulo. 

// let over = 11;
// if(over%2==0){
//     console.log("Number of overs is even. ")
// }
// else{
//     console.log("Number of overs is odd. ")
// }

// 10.Match Status: Log "Win" if team score > opponent score, else "Loss". 

let target = 300;
let lScore = 299;
if(lScore>target){
    console.log("Win")
}
else if(lScore == target){
    console.log("Tie")
}
else{
    console.log("Loss")
}