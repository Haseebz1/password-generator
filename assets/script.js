// Assignment Code
var generateBtn = document.querySelector("#generate");
//var number = "0123456789";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  const number = "0123456789";
  const lwrCase = "abcdefgkhijlmnopqrstuvxwyz";
  const upperCase = "ABCEDFGILKNMOPQSRTUVWYXZ";
  const characters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  var lengthOfPassword = 0;
  var passwordUppercase = false;
  var passwordLwrCase = false;
  var passwordNumber = false;
  var passwordCharacters = false;

  lengthOfPassword = window.prompt("Chose number of characters");
  if (lengthOfPassword < 8 || lengthOfPassword > 128) {
    window.alert("Lenght of pasword must be between 8-128 character ")
    return;
  }
  passwordCharacters = window.confirm("Press ok for special characters selection")
  passwordNumber = window.confirm("Press ok for selection of number")
  passwordLwrCase = window.confirm("Press ok for slection of lower case characters")
  passwordUppercase = window.confirm("Press ok for selection of Upper case characters")

  if (passwordCharacters === false && passwordLwrCase === false && passwordNumber === false && passwordUppercase === false  ) {
    window.alert("Select atleast one condition")
    return;
  }

  var password = "";
  const characterAvailable = []
  if (passwordUppercase) {
    characterAvailable.push(upperCase.split(""))
  }
  if (passwordLwrCase) {
    characterAvailable.push(lwrCase.split(""))
  }
  if (passwordNumber) {
    characterAvailable.push(number.split(""))
  }
  if (passwordCharacters) {
    characterAvailable.push(characters.split(""))
  }
  
  for (var i = 0; i < lengthOfPassword; i++) {
    var randomChar = characterAvailable[Math.floor(Math.random() * characterAvailable.length)];
    password += randomChar[Math.floor(Math.random() * randomChar.length)];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
