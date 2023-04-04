// console.log('Hello mona')
// console.log('Healing takes time')
// console.log('You can make it bro!')
// //console.log('WHY? Mercy')

//variable uses CONST AND LET //Const is used wen the value assigned is fixed a nd let is used when u would like to change the values.

// let age = 35;
// age = 56; //new result become 56
// console.log(age);

// const salary = 1000;
// console.log(salary);

// // non-primitive datatype
// const person = {
//   firstname: "frank",
//   lastname: "mona",
//   age: 400,
// };
// console.log(person.firstname);

// using array
// const oddnumber = [1, 2, 3, 4, 5, 9];
// console.log(oddnumber[0]);

// Operators

// Assignment operator

// let x = 40;

// Arithemetic operators

// let x = 10;
// y = 5;
// console.log(x + y);
// console.log(x - y);
// console.log(x % y);
// console.log(++x);
// console.log(--x);

// comparison operator

// console.log(x == y);
// console.log(x > y);
// console.log(x === y);
// console.log(x !== y);

// logical operators
// AND symbol
// const isValid = x > 8 && 8 > y;
// console.log(isValid);

// OR symbol
// const isValid = x < 8 || 8 > y;
// console.log(isValid);

// NOT symbol
// const isValid = x > 8 || 8 > y;
// console.log(!isValid);

// string operators

// console.log("Frank " + "Mona");

// const isEven = 10 % 2 === 0 ? true : false;
// (means if 10/2 and the remainder is equeal to zero print true else print false)
// console.log(isEven);

// Type conversion
// Implicit conversion which is done by javascripts
// explicit conversion which is done manually

// console.log(12 + "3");

// console.log("4 " - "2");
// console.log("4 " + "2");
// Javascript converts the  string to number and minus but for addition is see it as concatenation
// Javascript sees True as 1 and False as 0
// console.log(4 + true);
// console.log(4 + false);

// EXPLICIT Conversion which is done manually
//  below means i am converting the string  into number
// console.log(Number("5"));
// console.log(Number(true));
// console.log(Number(false));

// console.log(parseInt("6"));
// console.log(parseFloat("9.4"));

// console.log(String(500));
// console.log(String(false));

// console.log(Boolean(10));
// // all numbers return true but other like undefned null NAN returns false
// console.log(Boolean(5));
// console.log(Boolean(NaN));
// console.log(Boolean(null));

// Equality

// const var1 = 10;
// const var2 = "10";

// console.log(var1 == var2); check equlity of values
// console.log(var1 === var2); checks equality of data type e.g if both are string or numbers

// conditional statement
// if
// else
// else if
// switch

// const num = 0;
// if (num > 0) {
//   console.log("positve number");
// } else {
//   console.log("input a number");
// }

// if (num > 0) {
//   console.log("positve number");
// } else if (num < 0) {
//   console.log("Negative number");
// } else {
//   console.log("number is zero");
// }

// const color = "green";
// switch (color) {
//   case "red":
//     console.log("color is red");
//     break;

//   case "green":
//     console.log("color is green");
//     break;

//   case "black":
//     console.log("color is black");
//     break;

//   default:
//     console.log("not a valid color");
// }

// Looping code
// for
// while
// do while
// for of

// for(intializer; condition; final expression){
//     code to run
// }

// for (let i = 1; i <= 5; i++) {
//   console.log("iteration number " + i);
// }

// intializer
// while(condition){
//     code to run

//     final-expression
// }

// let i = 1;
// while (i <= 5) {
//   console.log("iteration number " + i);
//   i++;
// }

// DO WHILE LOOP
// intializer
// Do{
//     code to run
//     final expression
// }while(condition)

// let i = 1;
// do {
//   console.log("iteration number " + i);
//   i++;
// } while (i <= 5);

// FOR OF LOOP

// for(const array of item){
//     code to run
// }

// const numArray = [1, 2, 3, 4, 5];
// for (const num of numArray) {
//   console.log("iteration number " + num);
// }

// Functions

// function name(parameter1, parameter2,parameter3){
//     code to be excuted
// }

//  after a function is defined its is called at the end

// function greet() {
//   console.log("Welcome Frank Good morning");
// }
// greet();

// function greet(username) {
//   console.log("welcome " + username + " Good morning");
// }
// greet("frank");
// greet("Oguche");
// greet("Ilemona");
// greet("FrankMona");

// function add(a, b) {
//   return a + b;
// }

// const sum = add(5, 20);
// console.log(sum);

// SCOPE
// Block SCOPE
// function SCOPE
// global scope

// Block scope -- allows const and let to be defined inside the block even the console.log must be inside the block {}

// if (true) {
//   const myName = "Frank";
//   console.log(myName);
// }

// Function scope-- allows const and let to be defined inside the block even the console.log must be inside the block {}

// function testfn(superhero) {
//   console.log("welcome " + superhero);
// }

// testfn("Thor");
// testfn("Batman");
// testfn("Superman");
