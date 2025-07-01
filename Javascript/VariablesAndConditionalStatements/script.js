// 1 : Declare three variables using var, let, and const to store your name, age, and favorite color. Print them to the console.

// var name = "Abdullah Tayyab";
// let age = 25;
// const color = "Black";
// console.log("My name is "+name + ". I'm "+ age+" year old. My favorite color is "+color +".")

// 2 : Create a variable score with an initial value of 0. Reassign it to 100 and log the result. Try reassigning a const variable and explain what happens.

// const score = 0;
// score = 100;
// console.log(score) 

// 3 :  Write a program that checks if a number stored in a variable num is positive. If it is, log "Positive" to the console.

// let number = 1;
// if(number>0){
//     console.log(number + " is positive")
// }

// 4 : Create a variable age. Write a conditional statement to check if the person is eligible to vote (age >= 18). Log "Eligible" or "Not Eligible". 

// let age = 10;
// if(age >= 18){
//     console.log("You are aligible to vote")
// }
// else{
//     console.log("You are not aligible")
// }

// 5 :  Write a program that checks if a variable temperature is greater than 30. If true, log "Hot"; otherwise, log "Cool". 

// let temperature = 31;
// if(temperature>30){
//     console.log("Hot Day")
// }
// else{
//     console.log("Noarmal Day")
// }

// 6 : Declare a variable isRaining as a boolean. Write an if statement to log "Take an umbrella" if isRaining is true.

// let isRaining = true;
// if(isRaining){
//     console.log("Take an umbrella")
// }

// 7 : Declare variables of different types (string, number, boolean, null, undefined). Use typeof to log their types to the console.

// let var1 = "Abdullah";
// let var2 = 25;
// let var3 = true;
// let var4 = null;
// let var5 = undefined;
// console.log("Var1 is: " + typeof(var1) + ". Var2 is: " + typeof(var2) + ". Var3 is: "+ typeof(var3) + ". Var4 is: "+typeof(var4)+". Var5 is: "+typeof(var5)+".") 

// 8 : Write a program that uses a switch statement to check a variable day (e.g., "Monday", "Tuesday") and log whether it’s a weekday or weekend.

// let day = "Monday";
// switch(day){
//     case day="Tuesday":
//         console.log("WeakDay");
//         break;
//     case day="Monday":
//         console.log("Weakend");
//         break;
// }

// 9 : Use a ternary operator to check if a variable marks is greater than or equal to 50. Log "Pass" or "Fail" based on the condition.

// let marks = 50;
// console.log(marks >=50?"Pass":"Fail");

// 10 : Declare a variable x inside an if block. Try accessing it outside the block and explain the result. Repeat with let and var.

// if("name"){
// var x = 10;
// let y = 20;
// const z = 30;
// }
// console.log(x)
// console.log(y)
// console.log(z)

// 11 : Write a program to categorize a person’s age into "Child" (0-12), "Teen" (13-19), or "Adult" (20+). Use nested if statements.
 
// let age = 21;
//  if(age <=12){
//     console.log("Child");
//  }
//  else if(age <=19){
//     console.log("Teen")
//  }
// else{
//     console.log("Adult")
//  }

// 12 : Create a program that checks if a number is both even and positive. Use && to combine conditions and log "Valid" if true. 

// let num = 12;
// if(num%2 == 0 && num>0){
//     console.log("Valid")
// }
// else{
//     console.log("Invalid")
// }

// 13 : Write a program that demonstrates variable hoisting with var. Declare a variable after logging it and explain the output. 

// console.log(x)
// var x = 10;

// 14 : Declare a const object with properties name and age. Update the age property and log the object. Explain why this is allowed.

// const obj = {
//     name : "Abdullah",
//     age : 25
// }
// obj.age = 26;
// console.log(obj.age)

// 15 : Write a program that checks if a variable day is "Saturday" or "Sunday". Log "Weekend" if true, else "Weekday".

// let day = "Saturday";
// if(day == "Sunday"  || day == "Saturday"){
//     console.log("Weekend")
// }
// else{
//     console.log("WeekDay")
// }

// 16 : Write a switch statement to assign a grade (A, B, C, D, F) based on a score variable (0-100). Include a default case for invalid scores.

// let grade = 99;
// switch(true){
//     case grade >= 90 && grade <=100:
//         console.log("A");
//         break;
//     case grade <90:
//         console.log("B");
//         break;
//     case grade<70:
//         console.log("C");
//         break;
//     case grade<50 && grade >0:
//         console.log("F");
//         break;
//     default:
//         console.log("Invalid Value");
//         break;
// }

// 17 :  Use nested ternary operators to check if a number is positive, negative, or zero. Log the appropriate message.

// let num = -1;
//  console.log(num>0?"Positive":num<0?"Negtive":"Zero")

// 18 : Write a program with two let variables named x in different blocks (e.g., inside two separate if blocks). Show how block scope works.

// if("name"){
//     let x= 10;
// }
// if("nm"){
//     let x= 16;
// }

// console.log(x)

// 19 : Write a program that checks a variable input and logs whether it’s truthy or falsy using an if statement.

// let name = "";
// if(name){
//     console.log("This is truthy.")
// }
// else{
//     console.log("This is falsy")
// }

// 20 : Use && or || to assign a default value to a variable if another variable is falsy. For example, set username to "Guest" if name is undefined.

// let name = null;
// let username = name ||"Guest";
// console.log(username)


// 21 : Write a program that demonstrates variable shadowing with let in nested scopes. Log the variable values at different points to show the effect.

// let x = 10;
// if(true){
//     let x = 20;
//     console.log(x)
// }

// if(true){
//     let x = 30;
//     console.log(x)
// }
//     console.log(x)

// 22 : Write a program that determines the type of a triangle based on three side lengths stored in variables (side1, side2, side3). Check if it’s equilateral, isosceles, scalene, or not a triangle.

// let side1 = 2;
// let side2 = 5;
// let side3 = 6;

// if(side1+side2>side3 && side2+side3>side1 && side3+side1>side2){
//     console.log("Triangle")
//     if(side1 === side2 && side2 === side3){
//         console.log("Equilateral")
//     }
//     else if(side1 !=side2 && side2 != side3 && side3!=side1){
//         console.log("Scalene")
//     }

//     else if(side1 == side2 || side2==side3 || side3==side1){
//         console.log("isosceles")
//     }
// }
// else{
//     console.log("No a triangle")
// }

// 23 : Write a function that uses a var variable before its declaration inside the function. Explain how hoisting affects the output.

// function xy(){
//     var x;
//     console.log(x)
//     x = 10
//     console.log(x)
// }
// xy(x)

// 24 : Create a program that uses a switch statement to handle different operations (+, -, *, /) based on a variable operator. Use variables for operands and log the result.

// let op = "/";
// let v1 = 10;
// let v2 = 12;

// switch(op){
//     case "*":
//         console.log(v1*v2);
//         break;
//     case "+":
//         console.log(v1+v2);
//         break;
//     case "-":
//         console.log(v1-v2);
//         break;
//     case "/":
//         console.log(v1/v2);
//         break;
// }

// 25 : Write a program that uses a chain of ternary operators to categorize a variable temperature into "Freezing" (<= 0), "Cold" (1-15), "Mild" (16-25), or "Hot" (>25).

// let temp = 0;

// console.log(temp<=0? "Freezing":temp<16?"Cold":temp<25?"Mild":"Hot")