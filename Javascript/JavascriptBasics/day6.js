// 1.Player Object: Create an object with name, runs, and team.

// let player ={
//     name:"Abdullah",
//     runs:300,
//     team:"Pakistan"
// }
// console.log(player)

// 2.Access Runs: Log the runs property of a player object.

// let player ={
//     name:"Abdullah",
//     runs:300,
//     team:"Pakistan"
// }
// console.log(player.runs)

// 3.Update Team: Update a player’s team property.

// let player ={
//     name:"Abdullah",
//     runs:300,
//     team:"Pakistan"
// }
// player.team="New Zeeland";
// console.log(player)

// 4.Add Role: Add a role property to a player object.

// let player ={
//     name:"Abdullah",
//     runs:300,
//     team:"Pakistan"
// }
// player.role="Batsman";
// console.log(player)

// 5.Delete Property: Delete the age property from a player object.

// let player ={
//     name:"Abdullah",
//     runs:300,
//     team:"Pakistan",
//     age:25
// }
// let deleted = delete player.age
// console.log(player)
// console.log(deleted)

// 6.Object Loop: Log all properties of a match object using for...in.

// let player ={
//     name:"Abdullah",
//     runs:300,
//     team:"Pakistan",
//     age:25
// }
// for(let item in player){
//     console.log(item)
// }

// 7.Nested Object: Create a player object with a nested stats object.

// let player = {
//     name: "Abdullah",
//     runs: 300,
//     team: "Pakistan",
//     age: 25,
//     stats: {
//         runRate: 6.5
//     }
// }
//     for (let stat in player.stats) {
//         console.log(stat)
//     }

// 8.Object Method: Add a method to return a player’s full name.

// let player = {
//     fName: "Abdullah",
//     lName: "Tayyab",
//     runs: 300,
//     team: "Pakistan",
//     age: 25,
//     stats: {
//         runRate: 6.5
//     },
//     getFullName: function () {
//         return this.fName + " " + this.lName;
//     }
// }
// console.log(player.getFullName())

// 9.Array of Players: Log names from an array of 3 player objects.

// let players = [
//     {
//         fName: "Abdullah",
//         lName: "Tayyab",
//         runs: 300,
//         team: "Pakistan",
//     }, {
//         fName: "Sheraz",
//         lName: "Shamsi",
//         runs: 300,
//         team: "India",
//     }, {
//         fName: "Ibrahim",
//         lName: "Shreef",
//         runs: 300,
//         team: "America",
//     }
// ]
// for(let i in players){
//     for(let detail in players[i])
//     {
//         console.log(detail + "=" +players[i][detail])
//     }
// }

// 10.Clone Object: Clone a match object without modifying the original.

// let player = {
//     fName: "Abdullah",
//     lName: "Tayyab",
//     runs: 300,
//     team: "Pakistan",
//     age: 25,
// }

// let cloneObj = Object.assign({},player);
// cloneObj.fName = "Fatima"
// console.log(cloneObj)
// console.log(player)