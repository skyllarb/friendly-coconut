document.querySelector("#generate").addEventListener("click", writePassword); 

  var randomNumber = "0123456789";
  var upperCase = "ABCDEFGIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var randomSymbol = "~!@#$%^&*(){}[]_ -";
  var min = [8];
  var max = [128];
  confirmPasswordLength = (min || max);
  var selectedCharacter = "";
  
  function writePassword() {
    var length = passwordLength();
    if (length <= 8 || length >= 128) {
      window.alert("Your password must be between 8-128 characters. Please try again!");
      return;
    }
    confirmRandomNums();
    confirmUpperCase();
    confirmLowerCase();
    confirmSpecialCharacters();
    var newPassword = generatePassword(length);
    var passwordText = document.querySelector("#password");
    passwordText.value = newPassword; 
    selectedCharacter = "";
  }
 

  var passwordLength = function() {
  var confirmPasswordLength = window.prompt("How many characters would you like your password to contain? Must contain at least 8-129 characters.");
  return confirmPasswordLength;
  }

  function confirmRandomNums() {
  var randomNums = window.confirm("Do you want to add numbers?"); 
  if (randomNums) {
  selectedCharacter += randomNumber
  }
}

  function confirmUpperCase() {
    var bigLetters = window.confirm("Do you want uppercase letters?");
    if (bigLetters) {
      selectedCharacter += upperCase
    }
  }


  function confirmLowerCase() {
    var smallLetters = window.confirm("Do you want lowercase letters?");
    if (smallLetters) {
      selectedCharacter += lowerCase
    }
  }


  function confirmSpecialCharacters() {
    var randomSpecials = window.confirm("Do you want special characters?");
    if (randomSpecials) {
      selectedCharacter += randomSymbol
    }
  }
 

  function generatePassword(length) {
    var randomPassword = ""
  for(var i = 0; i < length; i++) {
   randomPassword = randomPassword + selectedCharacter.charAt(Math.floor(Math.random() * selectedCharacter.length));
   }
   return randomPassword;
  }