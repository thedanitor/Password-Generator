/****
 * WRITE YOUR CODE HERE
 */

//  Define arrays
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "/", ":", ";", "<", ">", "?", "[", "]", "_", "`", "|", "{", "}", "~"];

// Define variables used to create random character from each array.

// define variable to store random item from array lowercase
// Math.random() generates random decimal
// * lowercase.length multiplies that decimal by length of array
// Match.floor() rounds that value down to whole number
// return lowercase[] uses that whole number as the index of the array and returns that value
var lowRandom = lowercase[Math.floor(Math.random() * lowercase.length)];
// generates random capital letter.
var capRandom = capital[Math.floor(Math.random() * capital.length)];
// generates random number.
var numRandom = number[Math.floor(Math.random() * number.length)];
// generates random special character.
var specRandom = special[Math.floor(Math.random() * special.length)];

//random value from arrays are checked in console 
// console.log(lowRandom, capRandom, numRandom, specRandom);

//define password length variable outside function so it still exists.
// ***********does not seem to retain user input value outside of function...
var passLength = "";

// adds event listener for when generate password button is clicked
document.getElementById("generate").addEventListener("click", userInput)

// function userInput runs when Generate Password button is clicked.
function userInput(){
 // define user confirms for character types
  // var lcase = confirm("Do you want lowercase letters in your password?");
  // var caps = confirm("Do you want capitcal letters in your password?");
  // var nums = confirm("Do you want numbers in your password?");
  // var spec = confirm("Do you want special characters in your password?");

// //Have user define password length
  var passLength = prompt("How many characters do you want your password to be? Choose a number between 8 and 128.");
// check to make sure user input is a number between 8 and 128.
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("You must enter a number between 8 and 128.");
  // will keep prompting until number between 8 and 128 is chosen.
    var passLength = prompt("How many characters do you want your password to be? Choose a number between 8 and 128.");
}
 // once conditions are met will inform user of choice.
  alert("You have chosen a length of " + passLength);
  
}

//  **********Somehow need to make user input of var passLength exist outside of function...***


// *****Need if statement to check which character arrays to use.
// *****Do I add arrays? create object?

// if (lcase == true && caps == true && nums == true && spec == true) {
  passType = [...lowercase, ...capital, ...number, ...special];
// }  
  // console.log(passType.length);
  // console.log(passType);

var passkey = "";

function generatePassword() {
  for (var i = 0; i <= passLength.length; i++) {
  var passChar = passType[Math.floor(Math.random() * passType.length)];

    // ****not sure how to store string of all iterations****

  }

}
// generatePassword();

//////////////////////////////////////////////////////////////
// DO NOT TOUCH THE CODE BELOW
//////////////////////////////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
