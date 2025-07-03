// 1 : Basic For Loop: Write a for loop to print numbers from 1 to 10 to the console.

// for(let i=1; i<=10;i++)
// {
//     console.log(i)
// }

// 2 : While Loop Basics: Use a while loop to print numbers from 5 to 15.

// let num = 5;
// while(num<=15){
//     console.log(num);
//     num++;
// }

// 3 : Do-While Loop: Write a do-while loop to print even numbers from 2 to 10.

// let i = 2;
// do {
//     if(i%2==0){
//         console.log(i)
//     }
//         i++;
// } while (i<= 10)

// 4 : Sum of Numbers: Use a for loop to calculate the sum of numbers from 1 to 100 and log the result.

// let sum = 0;
// for(let i=1; i<=100;i++){
//     sum +=i;
// }
// console.log(sum)

// 5: Counting Backwards: Write a for loop to print numbers from 20 to 1 in descending order.

// for(let i=20; i>0;i--){
//     console.log(i)
// }

// 6 : Loop with Increment: Use a for loop to print multiples of 5 from 5 to 50.

// for(let i=5; i<=50;i++){
//     if(i%5==0){
//         console.log(i)
//     }
// }

// 7 : Simple Array Iteration: Create an array of 5 fruits. Use a for loop to print each fruit to the console.

// let arr = ["apple","guava","mango","banana"];
// for(let i=0; i<arr.length;i++){
//     console.log(arr[i])
// }

// 8 : While Loop with Condition: Write a while loop that doubles a number (starting from 1) until it exceeds 100 and logs each value.

// let i=1;
// let j;
// while(i<=100){
//     i*=2
//     console.log(i)
// }

// 9 : Break Statement: Write a for loop to print numbers from 1 to 20 but stop when the number is 15 using break.

// for(let i=1; i<20;i++){
//     if(i==15 || i>15){
//         break
//     }
//     else{
//         console.log(i)
//     }
// }

// 10 : Use a for loop to print numbers from 1 to 10, skipping 5 using continue.

// for(let i=1;i<=10;i++){
//     if(i==5){
//         continue;
//     }
//     else{
//         console.log(i)
//     }
// }

// 11 : Nested Loops: Write a nested for loop to print a 5x5 grid of asterisks (*) to the console.

// for(let i=1;i<=5;i++){
//     for(j=1;j<=5;j++){
//         document.write(" * ")
//     }
//     document.write("</br>")
// }

// 12 : Array Sum with Loop: Create an array of 10 numbers. Use a for loop to calculate and log their sum.

// let sum =0;
// let arr = [1,2,3,4,5,6,7,8,9,10];
// for(let i=0; i<arr.length;i++){
//     sum += arr[i]
// }
// console.log(sum)

// 13 : For...Of Loop: Use a for...of loop to iterate over an array of names and print each name in uppercase.

// let arr = ["abdullah","tayyab","sheraz","ibrahim"];
// for(let array of arr){
//     console.log(array.toUpperCase());
// }

// 14 : For...In Loop: Create an object with properties name, age, and city. Use a for...in loop to print each property name and value.

// let obj = {
//     name:"Abdullah",
//     age:25,
// }
// for(let object in obj){
//     console.log(obj[object])
// }

// 15 : Prime Number Check: Write a for loop to check if a given number (e.g., 17) is prime. Log "Prime" or "Not Prime".

// let prime = 17;
// let isPrime = true;
// for(let i=2;i<prime;i++){
//     if(prime%i ==0){
//         isPrime = false;
//         break;
//     }
// }
// if(isPrime){
//     console.log("Prime Number")
// }
// else{
//     console.log("Not a Prime Number")
// }

// 16 : Fibonacci Sequence: Use a while loop to generate the first 10 numbers of the Fibonacci sequence and store them in an array.

// let i = 2;
// let arr = [0, 1];
// while (arr.length < 10) {
//     arr[i] = arr[i - 1] + arr[i - 2];
//     i++;
// }
// console.log(arr)

// 17 : Loop with Array Modification: Create an array of numbers. Use a for loop to double each number and store the result in a new array.

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let newArr = [];
// for(let i=0; i<arr.length;i++){
//     newArr.push(arr[i]*2);
// }
// console.log(newArr);

// 18 : Pattern Printing: Write a for loop to print a right-angled triangle of asterisks with 5 rows:

// for(let i=0; i<5;i++){
//     for(let j=0;j<i;j++){
//         document.write("*")
//     }
//     document.write("</br>")
// }

// 19 : FizzBuzz: Write a for loop to print numbers from 1 to 100. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; for multiples of both, print "FizzBuzz".

// for(let i=1; i<=100;i++){
//     if(i%3==0){
//         console.log(i + " Fizz")
//     }
//     else if(i%5==0){
//         console.log(i + " Buzz")
//     }
//     else if(i%3==0 && i%5==0){
//         console.log(i + " FizzBuzz")
//     }
//     else{
//         console.log(i)
//     }
// }

// 20 : Array Filtering with Loop: Create an array of 20 random numbers. Use a for loop to create a new array containing only numbers greater than 10.

// let arr = [1,3,5,7,12,121,234,222,1222];
// let newArr=[];
// for(let i=0; i<arr.length;i++){
//     if(arr[i]>20){
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr)

// 21 : Nested Loop Matrix: Write nested for loops to create a 3x3 matrix (2D array) filled with sequential numbers (1 to 9). Log the matrix.

// let num =0;
// let matrix = [];
// for(let i=0; i<3;i++){
//     let row = [];
//     for(let j=0;j<3;j++){
//         num += 1
//         row.push(num)
//     }
//     matrix.push(row)
// }
// document.write(matrix)

// 22 : Loop with Early Exit: Write a while loop to find the first number divisible by both 7 and 11 between 1 and 100. Stop the loop once found.

// let i = 1;
// while(i<=100){
//     if(i%7==0 && i%11==0){
//         console.log(i)
//         break;
//     }
//     i++;
// }

// 23 :Reverse Array with Loop: Create an array of 10 numbers. Use a for loop to reverse the array without using built-in methods like reverse().

// let arr = [1,2,3,4,5,6,7,8,9];
// let newArr = [];
// for(let i=arr.length-1;i>=0;i--){
//     newArr.push(arr[i])
// }
// console.log(newArr);

// 24 : Infinite Loop Prevention: Write a while loop that increments a counter but includes a condition to prevent an infinite loop. Log the counter until it reaches 50.

// let counter = 1;
// while (counter <= 50) {
//   console.log(counter);
//   counter++;
// }

// 25 : Complex Pattern: Use nested for loops to print a diamond pattern with 5 rows (3 rows up, 1 middle, 1 down): 

// let sp = 3;
// for(let i = 1; i<=sp;i++){
//     document.write("&nbsp;".repeat(sp-i) + "*".repeat(2*i-1))
//     document.write("</br>")
// }

// for(let i=sp-1; i>=1;i--){
//     document.write("&nbsp;".repeat(sp-i) + "*".repeat(2*i-1))
//     document.write("</br>")
// }