// 1.Count Vowels: Count vowels in a team name using a function.

// function countVowals(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
//             count += 1;
//         }
//     }
//     return count;
// }
// console.log(countVowals("I'm a web developer!"))

// 2.Capitalize Name: Capitalize the first letter of a player’s name.

// function cap(name) {
    // let captelize = "";
//     for (let i = 0; i < name.length; i++) {
//         if (i == 0) {
//             let cape = name[i].toUpperCase();
//             captelize += cape;
//         }
//         else {
//             captelize += name[i]
//         }
//     }
//     return captelize;
// }
// console.log(cap("abdullah"))

// 3.Reverse Word: Reverse a single word (e.g., "cricket" → "tekcirc").

// function strReverse(str){
    // let rev = "";
//     for(let i=str.length-1;i>=0;i--){
//         rev += str[i]
//     }
//     return rev;
// }
// console.log(strReverse("abdullah"))

// 4.Word Count: Count words in a match description.

// function match(des) {
//     return des.split(/\s+/).length;
// }
// console.log(match("i'm a web developer"))

// 5.Format Score: Format-seeking: Format Score Display Format a score as "XXX runs" in a function.

// function format(score){
//     return score + " runs";
// }
// console.log(format(123))

// 6.Check Palindrome: Check if a team name is a palindrome.

// function palindrome(word) {
//     let rev = "";
//     for (let i = word.length - 1; i >= 0; i--) {
//         rev += word[i];
//     }
//     if (word === rev) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(palindrome("aba"))

// 7.Remove Spaces: Remove all spaces from a string.

// function str(letter){
//     return letter.replace(/\s+/g,"")
// }
// console.log(str("Abdullah Tayyab"))

// 8.String Joiner: Join two strings with a hyphen.

// function joinStr(a,b){
// return a+" - "+b;
// }
// console.log(joinStr("Abdullah","Tayyab"))

// 9.Check Suffix: Check if a string ends with "CC" (e.g., "BCCI").

// function suffix(str){
//     return str.endsWith("CC");
// }
// console.log(suffix("BCC"))

// 10.Extract Middle: Extract the middle 3 characters of a string.

// function suffix(str){
//     let len = Math.floor(str.length/2);
//     let res = str.slice(len-1,len+2)
//     return res;
// }
// console.log(suffix("Abdullah"))
