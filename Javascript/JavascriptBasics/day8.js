//  1.Double Scores: Double each score in an array using a loop.

// let score = [1,2,4,6,8,10];
// for(let i=0;i<score.length;i++){
//     console.log(score[i]*2)
// }

// 2.Count High Scores: Count scores > 100 in an array.

// let num = [12,321,234,56,87,99,100]
// let count=0;
// for(let i=0;i<num.length;i++){
//     if(num[i]>100){
//         count +=1;
//     }
// }
// console.log(count)

// 3.Concat Arrays: Merge two arrays of player names.

// let name1 = ["Abdulah", "Ibrahim", "Sheraz"];
// let name2 = ["Tayyab", "Shareef", "Shamsi"];
// console.log(name1.concat(name2))
// let fullName = [];
// for (let i = 0; i < name1.length; i++) {
//     for (let j = i; j <= i; j++) {
//         fullName.push(name1[i].concat(" " + name2[j]))
//     }
// }
// console.log(fullName)

// 4.Reverse Loop: Print an array of scores in reverse order.

// let score = [2,4,2,1,3,6,5,4,7,9];
// let revScore=[]
// for(let i=score.length-1;i>=0;i--){
// revScore.push(score[i])
// }
// console.log(revScore)

// 5.Filter Names: Create an array of names starting with "A".

// let names =["Abdullah","Tayyab","Afzal","Fatima"];
// let filterName=[];
// for(let i=0;i<names.length;i++){
//     if(names[i].startsWith("A")){
//         filterName.push(names[i])
//     }
// }
// console.log(filterName)

// 6.Sum Even Indices: Sum scores at even indices in an array.

// let score = [3,2,5,8,9,8,3,6,1];
// let sum=0;
// for(let i=0;i<score.length;i++){
//     if(i%2==0 || i==0){
//         sum +=score[i]
//     }
// }
// console.log(sum)

// 7.Loop Nested Array: Print elements of a 2x2 array using nested loops.

// let nestedArray = [[1,2],[3,4]];
// for(let i=0;i<nestedArray.length;i++){
//     for(let j=0;j<nestedArray[i].length;j++){
//         console.log(nestedArray[i][j])
//     }
// }

// 8.Replace Scores: Replace scores < 0 with 0 in an array.

// let score = [3,2,4,-9,-5,2,-1];
// let replaceScore=[];
// for(let i=0;i<score.length;i++){
//     if(score[i]<0){
//         score[i]=0;
//     }
// }
// console.log(score)

// 9.Team List: Print team names with indices (e.g., "1. India").

// let teams = ["Pakistan","India","New zeeland","America"];
// for(let i=0;i<teams.length;i++){
//     console.log(i+" . "+teams[i])
// }

// 10.Check Empty: Check if an array of matches is empty.

// let teams = ["Pakistan","India","New zeeland","America"];
// console.log(teams.filter(name =>name=="Bangladesh"))