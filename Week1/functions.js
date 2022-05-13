// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds");
// }
// pressGrindBeans();

// let coffeeIsGrinding = true;

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("Stopping the grind");
//         coffeeIsGrinding = false;
//     } else {
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding = true;
//     }
// }
// pressGrindBeans();

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`)
// }

// cashWithdrawal(300, 50449921);
// cashWithdrawal(30, 50449921);
// cashWithdrawal(200, 50447921);

// let accnumber = 50449921;

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`)
// }

// cashWithdrawal(300, accnumber);
// cashWithdrawal(30, 50449921);
// cashWithdrawal(200, 50447921);

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

// addUp(7, 3);
// console.log(addUp(2, 5))

// const multiplyByNineFifths = (celsius) => {
//     return celsius * (9/5);
// };
// const getFahrenheit = (celsius) => {
//     return multiplyByNineFifths(celsius) + 32;
// };

// console.log("The temperature is " + getFahrenheit(15) + "°F")

// Declaration 1
// function square(number) {
//     return number * number;
// };
// square(5);
// console.log(square(5))

// Expression 2
// const square = function(number) {
//     return number * number;
// };
// square(5)
// console.log(square(5));

// Activity 1

// const factorial = (n) => {
//     if ((n === 0) || (n === 1)){
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }
// console.log(factorial(33))

// Activity 2

// let orderCount = 0;

// const takeOrder = (size, topping) => {
//     orderCount ++;
//     console.log(`Order number ${orderCount}, ${size} Pizza with ${topping}`);
// }
// takeOrder("Large","Pepperoni")
// takeOrder("Small","BBQ")

// Activity 3

// let pinCorrect = false;
// let attempts = 0;
// let balance = 4000;

// // define withdraw function
// const withdraw = (pin, amount) => {
//   // pin check
//   if (pin === 2468) {
//     pinCorrect = true;
//   } else pinCorrect = false;

//   // lock out of the account if attempts > 3
//   if (attempts >= 3) {
//     console.log(`This account has been locked due to security reasons`);
//   }

//   // both correct - withdraw
//   else if (pinCorrect === true && balance >= amount) {
//     console.log(
//       `You have successfully withdrawn £${amount}. \n Your balance is now £${
//         balance - amount
//       }`
//     );
//     balance = balance - amount;
//   }

//   // both incorrect
//   else if (pinCorrect === false && balance < amount) {
//     attempts++;
//     console.log(
//       `Your PIN number is incorrect and you have less cash in your account than you are attempting to withdraw. Looks like a bad day. Withdrawal unsuccessful. \nAttempts made: ${attempts} `
//     );
//     console.log(
//       `Three unsuccessful PIN attempts will lock you out of this account for security reasons`
//     );
//   }

//   // pin false, enough balance available
//   else if (pinCorrect === false && balance >= amount) {
//     attempts++;
//     console.log(
//       `PIN incorrect. Withdrawal unsuccessful. \nAttempts made: ${attempts}`
//     );
//     console.log(
//       `Three unsuccessful PIN attempts will lock you out of this account for security reasons`
//     );
//   }

//   // pin true, not enough balance available
//   else if (pinCorrect === true && balance < amount) {
//     console.log(
//       `Your PIN was correct, but you have insufficient funds for this withdrawal. Withdrawal unsuccessful.`
//     );
//   }

//   // any other option
//   else {
//     console.log(`Something went wrong. Withdrawal unsuccessful.`);
//   }
// };

// withdraw(1234, 500);
// withdraw(2468, 2000);
// withdraw(1004, 2000);
// withdraw(2468, 1000);
// withdraw(2468, 400);
// withdraw(2468, 3000);
