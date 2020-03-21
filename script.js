/****
 * WRITE YOUR CODE HERE
 */

//  Define arrays by character type
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "/", ":", ";", "<", ">", "?", "[", "]", "_", "`", "|", "{", "}", "~"];

//define password length variable outside function so it still exists
var passLength = "";
// define passType array to store user requirements on character types
var passType = [];

// adds event listener for when generate password button is clicked
document.getElementById("generate").addEventListener("click", userInput)

// function userInput runs when Generate Password button is clicked
function userInput(){
 // define user confirms for character types
  var lcase = confirm("Do you want lowercase letters in your password?");
  var caps = confirm("Do you want capitcal letters in your password?");
  var nums = confirm("Do you want numbers in your password?");
  var spec = confirm("Do you want special characters in your password?");

// add lowercase to passType if user wants to inlude lowercase
  if (lcase) {
   passType = passType.concat(lowercase);
  }
// add capital to passType if user wants to inlude caps
  if (caps) {
    passType = passType.concat(capital);
  }
// add nubmers to passType if user wants to inlude nums
  if (nums) {
    passType = passType.concat(number);
  }
// add special to passType if user wants to inlude special characters
  if (spec) {
    passType = passType.concat(special);
  }
 //Have user define password length
  passLength = prompt("How many characters do you want your password to be? Choose a number between 8 and 128.");
// check to make sure user input is a number between 8 and 128
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
// will keep prompting until number between 8 and 128 is chosen
  passLength = prompt("Please enter a number between 8 and 128.");
  
  }
}
// define passChar array to store randomly generated characters
var passChar = [];

function generatePassword() {
   for (var i = 0; i <= passLength; i++) {
    // Math.random() generates random decimal
    // * passType.length multiplies that decimal by length of array
    // Match.floor() rounds that value down to whole number
    // passChar.push stores the random characters into the passChar array
    passChar.push(passType[Math.floor(Math.random() * passType.length)]);
  }
  // returns the array values as a string
  return passChar.join("");
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