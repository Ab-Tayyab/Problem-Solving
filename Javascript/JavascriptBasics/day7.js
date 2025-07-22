// 1.Win Check: Check if team score > 200 and log "High Score".

// let score = 201;
// if(score>200){
//     console.log("High Score")
// }

// 2.Match Type: Use switch to log rules for "Test", "ODI", or "T20".

// let match = "ODI";
// switch(match){
//     case "Test":
//         console.log("5 Day match, 90 overs per day")
//         break;
//     case "ODI":
//         console.log("One Day, 50 over per team");
//         break;
//     case "T20":
//         console.log("T20 Match, 20 over per team")
//         break;
// }

// 3.Count Players: Count players with runs > 50 in an array using a loop.

// let scores=[123,32,23,51,65,45,76,49];
// let count = 0;
// for(let i=0;i<scores.length;i++){
//     if(scores[i]>50){
//         count +=1;
//     }
// }
// console.log(count)

// 4.Nested If: Check if a player is a batsman and has runs > 100.

// let player ={
//     role :"batsman",
//     score:100
// }
// if(player.role==="batsman"){
//     if(player.score>100){
//         console.log("Great!")
//     }
// }

// 5.Loop Overs: Print "Ball X" for 6 balls in an over.

// for(let i=1;i<=6;i++){
//         console.log("Ball: " +i)
// }

// 6.Score Range: Log scores between 50 and 100 from an array.

// let scores = [12,43,56,76,78,34,4,2,212]
// for(let i=0;i<scores.length;i++){
//     if(scores[i]>=50 && scores[i]<=100){
//         console.log(scores[i])
//     }
// }

// 7.Ternary Status: Use a ternary to log "Batting" or "Bowling" based on status.

// let isBatting = false;
// console.log(isBatting?"Batting":"Bowling")

// 8.While Loop: Print numbers 1 to 5 using a while loop.

// let i=1;
// while(i<6){
// console.log(i)
// i++
// }

// 9.Star Square: Print a 4x4 square of asterisks using nested loops.

// for(let i=0;i<4;i++){
//     for(let j=0;j<4;j++){
//         console.log("*")
//     }
// }

// 10.Skip Low Scores: Skip scores < 10 in an array using continue.

// let score = [12,32,1,4,6,34,21,15,76];
// for(let i=0;i<score.length;i++){
//     if(score[i]<10){
//         continue;
//     }
//     else{
//         console.log(score[i])
//     }
// }