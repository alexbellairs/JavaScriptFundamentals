// const person = {
//     name: "Alex",
//     age: 29,
// }
// console.log(person.name, person.age)
// console.log(person["name"])

// let offer = "none";
// let time = 1200;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappucino",
//         "Latte",
//         "Filter Coffee",
//         "Tea",
//         "Hot Chocolate"
//     ],
//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with sandwich",
//     noOffer: "Sorry no offer"
// };
// if (time < 1100){
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer);
// }else if (time < 1500){
//     offer = cafe.lunchOffer;
//     console.log(cafe.lunchOffer)
// }else {
//     console.log(cafe.noOffer)
// }

// let day = "Saturday"

// const alarm = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "get up at 7am",
// }
// if (day == "Saturday" || (day == "Sunday")){
//     console.log(alarm.weekendAlarm)
// }else{
//     console.log(alarm.weekdayAlarm)
// }

// const person = {
//     name: "Alex",
//     age: 29,
//     favSongs:[
//         "Strobe - Deadmau5",
//         "Country Roads - John Denver",
//         "Metalingus - Alter Bridge"
//     ]
// }
// console.log(person.name, person.age, person.favSongs)
// console.log(person["name"])

// offer = "none";
// let time = 1200;

// const cafe = {
//   name: "Whitesheep",
//   seatingCapacity: 100,
//   hasSpecialOffers: true,
//   drinks: ["Cappucino", "Latte", "Filter Coffee", "Tea", "Hot Chocolate"],
//   breakfastOffer: "Free croissant with coffee",
//   lunchOffer: "Free drink with sandwich",
//   noOffer: "Sorry no offer",
//   openCafe() {
//     if (this.hasSpecialOffers) {
//       return "Time for a special offer!";
//     }
//   },
//   closeCafe() {
//     return "We are closed, come back tomorrow!";
//   },
// };
// console.log(cafe.openCafe());
// console.log(cafe.closeCafe())
// if (time < 1100){
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer);
// }else if (time < 1500){
//     offer = cafe.lunchOffer;
//     console.log(cafe.lunchOffer)
// }else {
//     console.log(cafe.noOffer)
// }

// Activity 1

// const person = {
//   name: "Alex",
//   age: 29,
//   favSongs: [
//     "Strobe - Deadmau5",
//     "Country Roads - John Denver",
//     "Metalingus - Alter Bridge",
//   ],
//   sayHi() {
//     return `Hello my name is ${this.name}`;
//   },
// };
// console.log(person.name, person.age, person.favSongs)
// console.log(person["name"])
// console.log(person.sayHi());

// Activty 2

// const pet = {
//   name: "Cooper",
//   typeOfPet: "Labradoodle",
//   age: 1,
//   colour: "Dirty Blonde",
//   eat() {
//     return `${this.name} is eating`;
//   },
//   drink() {
//     return `${this.name} is drinking`;
//   },
// };
// console.log(pet);
// console.log(pet.eat());
// console.log(pet.drink());

// Activity 3

// let order = [];
// const coffeeShop = {
//   branch: "manchester",
//   drinksWithPrices: {
//     tea: 1.0,
//     americano: 2.0,
//     mocha: 3.0,
//     latte: 3.0,
//     water: 0.85,
//   },
//   foodWithPrices: { salad: 2.0, sandwich: 3.0, tunaJacket: 4.5, grape: 5.0 },
//   drinksOrdered(drink1, drink2) {
//     // taking the sring
//     let drinks = Object.keys(this.drinksWithPrices);
//     // taking the number
//     let drinkValues = Object.values(this.drinksWithPrices);
//     order.push(drinkValues[drinks.indexOf(drink1)]);
//     order.push(drinkValues[drinks.indexOf(drink2)]);
//     return `For drinks you've ordered ${drink1} and ${drink2}`;
//   },
//   foodOrdered(food1, food2) {
//     let foods = Object.keys(this.foodWithPrices);
//     let foodValues = Object.values(this.foodWithPrices);
//     order.push(foodValues[foods.indexOf(food1)]);
//     order.push(foodValues[foods.indexOf(food2)]);
//     return `For food you've ordered ${food1} and ${food2}`;
//   },
// };
// console.log(coffeeShop.drinksOrdered("americano", "water"));
// console.log(coffeeShop.foodOrdered("sandwich", "tunaJacket"));
// let total = 0;
// for (i = 0; i < order.length; i++) {
//   total += order[i];
// }

console.log(`Your total comes to £${total}.`);
