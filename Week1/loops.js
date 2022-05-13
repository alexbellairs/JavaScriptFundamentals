// let favDrink = [
//     "Coke",
//     "Fanta",
//     "Tonic"
// ]

// console.log(favDrink[0])
// console.log(favDrink[1])
// console.log(favDrink[2])

// let favDrink = [
//     "Coke",
//     "Fanta",
//     "Tonic",
//     "Red Bull"
// ]

// for (let i = 0; i < favDrink.length; i++){
//     console.log(favDrink[i])
// }

// let multiplesTwo = [];

// for(let i = 0; i < 20; i++){
//     if (i %2 ==0){
//         multiplesTwo.push(i)
//     }
// }
// console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`)

// let age = 15;

// while(age < 18){
//     console.log("You're a child!");
//     age++;
// }
// console.log("You're an adult now!");

// let cards = [
//     "Diamond",
//     "Spade",
//     "Heart",
//     "Club"
// ]
// let currentCard = "Club";

// while(currentCard != "Spade"){
//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()*4)]
// }
// console.log(currentCard)

// Activity 1

// let favFilms = [
//     "How To Train Your Dragon 1",
//     "Interstellar",
//     "Coco"
// ]
// favFilms.push("How To Train Your Dragon 2")
// favFilms.push("How To Train Your Dragon 3")

// for (let i = 0; i < favFilms.length; i++){
//     console.log(favFilms[i])
// }

// Activity 2

// let randNum = [];
// while(randNum.length < 6){
//     let r = Math.floor(Math.random() * 50) + 1;
//     if(randNum.indexOf(r) === -1) randNum.push(r)
// }
// console.log(randNum)

// let randomNumbers = [];

// for (let i = 0; i < 6; i++) {
//   randomNumbers.push(Math.floor(Math.random() * 50));
// }
// console.log(randomNumbers);

// Activity 3

// let num = []

// for (let i = 0; i < 10; i++){
//     if (i % 1 == 0){
//         num.push(i)
//     }
// }
// console.log(num.reverse())

// Activity 4

// let films = [
//     "Toy Story",
//     "The Avengers",
//     "Ready Player One",
//     "Ghostbusters",
//     "The Green Mile"
// ]
// for (let i = 0; i < films.length; i++){
//     console.log(films[i])
//     }

//     if(films[2] == "Ghostbusters"){
//         console.log("Yay it's Ghostbusters")
//     }else{
//         console.log("Boo! We want Ghostbusters")
//     }

// Actvity 5

// let randomNumberList = [];
// for (let i = 0; i < 6; i++) {
//   randomNumberList.push(Math.floor(Math.random() * 30));
// }
// console.log(randomNumberList);

// for (let i = 0; i < randomNumberList.length; i++) {
//     if (randomNumberList[i] % 7 == 0) {
//       console.log(`${randomNumberList[i]} is divisible by 7`);
//     } else {
//       console.log(`${randomNumberList[i]} is not divisible by 7`);
//     }
//   }

// Activity 6

// let bobsFollowers = [
//     "Jim",
//     "Betty",
//     "Dave",
//     "Claire"
// ]

// let hannahsFollowers = [
//     "Mark",
//     "Oscar",
//     "Dwight",
//     "Jim"
// ]

// function arrayMatch(bobsFollowers, hannahsFollowers) {
//     let arr = [];
//     bobsFollowers = bobsFollowers.toString().split(',').map(String);
//     hannahsFollowers = hannahsFollowers.toString().split(',').map(String);
//     console.log(bobsFollowers);

//     for (var i in bobsFollowers) {
//        if(hannahsFollowers.indexOf(bobsFollowers[i]) !== -1)
//        arr.push(bobsFollowers[i]);
//     }
//     console.log(arr);

//     return arr.sort((x,y) => x-y);
//  }

// console.log(arrayMatch(bobsFollowers, hannahsFollowers));

// Activity 7

// // For
// let str = '';

// for (let i = 0; i < 9; i++) {
//   str = str + i;
// }

// console.log(str);

// // While

// let n = 0;

// while (n < 3) {
//   n++;
// }

// console.log(n);

// // Do While

// let a = '';
// let i = 0;
// do {
//     i += 1;
//     a += i + '';
// }
// while (i > 0 && i< 9);

// console.log(a)
