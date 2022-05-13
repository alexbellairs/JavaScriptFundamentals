// let weather = "sunny";

// if (weather == "sunny"){
//     console.log("Well I bet wear some suncream!")
// }else if (weather == "rainy"){
//     console.log("Better take my umbrella")
// }else {
//     console.log("Hmmm could go either way")
// }

// if (1 === "1"){
//     console.log(true)
// }else {
//     console.log(false)
// }
// if (1 != "1"){
//     console.log(true)
// }else {
//     console.log(false)
// }

// let place = "Manchester";
// let weather = "Cloudy";

// if (place == "Manchester" && weather == "Sunny") {
//     console.log("Check Again")
// } else if (place == "Manchester" && weather == "Rainy") {
//     console.log("Obvs")
// }else {
//     console.log("What is isn't rainig?!?!")
// }

// let day = "Saturday"

// if (day == "Saturday" || day == "Sunday"){
//     console.log("It's the weekend!!")
// }else {
//     console.log("When is the weekend?")
// }

// let car = "Peugeot";

// if (car == "Ford" || car == "GM") {
//     console.log("You've got an American car!")
// } else if (car == "Peugeot" || car == "Citroen") {
//     console.log("You've got a French car!")
// }else if (car == "Honda" || car == "Toyota") {
//     console.log("You've got an Japanese car!")
// }else if (car == "Mercedes") {
//     console.log("You've got a fancy German car!")
// }else if (car == "Ford" || car == "GM") {
//     console.log("You've got an American car!")
// }else if (car == "Volkwagen") {
//     console.log("You've got a German car!")
// }else if (car == "Hyundai" || car == "KIA") {
//     console.log("You've got a South Korean car!")
// }else {
//     console.log("Your car isn't in the top 10 in the world")
// }

// let car = "Peugeot";

// switch(car){
//     case "Ford":
//     case "GM":
//         console.log("You've got an American car!")
//         break;
//     case "Peugeot":
//     case "Citroen":
//         console.log("You've got a French car!")
//         break;
//     case "Honda":
//     case "Toyota":
//     case "Suzuki":
//         console.log("You have a Japanese car")
//         break;
//     case "Mercedes":
//         console.log("You have a fancy German car")
//         break;
//     case "Volkswagen":
//         console.log("You hvae a german car")
//     case "Hyundai":
//     case "Kia":
//         console.log("You have a South Korean Car")
//         break;
//     default:
//         console.log("Your car isn't in the top 10 in the world")

// const grade = 87;

// switch (true) {
//     case grade >= 70:
//         console.log("Distinction")
//         break;
//     case grade >= 60:
//         console.log("Merit")
//         break;
//     case grade >= 50:
//         console.log("Pass")
//         break;
//     default:
//         console.log("Fail")
// }

// Activity 1

// let age = 19;
// let country = "UK"

// if (age > 17 && country == "UK") {
//     console.log("What can I get you mate?")
// }else {
//     console.log("Sorry I can't serve you")
// }

// Activity 2

// let pizzaTopping = "Pepperoni"

// switch(pizzaTopping){
//     case "Pepperoni":
//         console.log("Safe choice")
//         break;
//     case "Meatball":
//         console.log("My Favourite")
//         break;
//     case "Chicken":
//         console.log("Could be worse")
//         break;
//     case "Pineapple":
//         console.log("Absolutely not!!!!")
//         break;
//     case "Mushroom":
//         console.log("Ewwwwww")
//         break;
//     default:
//         console.log("Cheese is always a solid choice")
// }

// Activity 3

// const password = "mcfc"

// if (password.length < 8){
//     console.log("Sorry your password is to short please use a minimum of 8 charecters")
// }else{
//     console.log("thankyou your password meets the requirements")
// }

// Activity 4

// let num = 17

// if (num % 3 == 0 || num % 5 == 0){
//     console.log("this number is divisable by 3 or 5")
// }else{
//     console.log("this number is not divisable by 3 or 5")
// }

// Activity 5

// let numb = 65

// if (numb % 3 == 0 && numb % 5 == 0){
//     console.log("fizz buzz")
// }else if (numb % 3 == 0){
//     console.log("fizz")
// }else if (numb % 5 == 0){
//     console.log("buzz")
// }else{
//     console.log(numb)
// }

// Activity 6

// let num2 = 3001;
// let text = num2.toString();
// let arrayText = text.split("");
// let reverseArray = arrayText.reverse();
// let joinArray = reverseArray.join("");

// if (text == joinArray){
//     console.log("Palindrome")
// }
// else{
//     console.log("Not a Palindrome")
// }

// Activity 7

// let time = 22;
// let placeOfWork = "Manchester"
// let townOfHome = "Stockport"

// if (time < 9 && time > 7){
//     console.log(`Commuting from ${townOfHome} to ${placeOfWork}`);
// }
// else if (time > 9 && time < 18){
//     console.log(`In work in ${placeOfWork}`)
// }
// else if (time > 18 && time < 20){
//     console.log(`Commuting from ${placeOfWork} to ${townOfHome}`);
// } else {
//     console.log(`At home in ${townOfHome}`)
// }

// Activty 8

// let theString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshs"
// console.log(theString.lastIndexOf("i"))

// Activity 9

// let word = "scream"
// if (word[0] == word[word.length - 1]){
//     console.log(`${word} starts and ends with the same letter`);
// }
// else {
//     console.log(`${word} does not start and end in the same letter`);
// }

// Activity 10

// let num1 = 3;
// let num2 = 15;
// let sum = num1 * num2;
// if (sum % 2 == 0) {
//   console.log(sum);
// } else {
//   console.log(num1 * num2);
// }
