/****
 * WRITE YOUR CODE HERE
 */

//  Define arrays
 var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", ",", "-", ".", "/", ":", ";", "<", ">", "?", "[", "]", "_", "`", "|", "{", "}", "~"];

// Define variables used to create random character from each array.

// define variable to store random item from array lowercase
// Math.random() generates random decimal
// * lowercase.length multiplies that decimal by length of array
// Match.floor() rounds that value down to whole number
// return lowercase[] uses that whole number as the index of the array and returns that value
var lowRandom = lowercase[Math.floor(Math.random() * lowercase.length)];

var capRandom = capital[Math.floor(Math.random() * capital.length)];

var numRandom = number[Math.floor(Math.random() * number.length)];

var specRandom = special[Math.floor(Math.random() * special.length)];





// // define user confirms for character types
// var lcase = confirm("Do you want lowercase letters in your password?");
// var caps = confirm("Do you want capitcal letters in your password?");
// var nums = confirm("Do you want numbers in your password?");
// var spec = confirm("Do you want special characters in your password?");

// //Have user define password length
// var passLength = prompt("How many characters do you want your password to be?")



  //random array value is checked in console 
console.log(lowRandom);
console.log(capRandom);
console.log(numRandom);
console.log(specRandom);

function generatePassword() {
  alert("password");

  return "password";

}


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
