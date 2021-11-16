document.querySelector('#generate').addEventListener('click', givePassword)

var randomNumber = "0123456789";
var upperCase = "ABCDEFGIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var randomSymbol = "~!@#$%^&*(){}[]_ -";
var min = [8];
var max = [128];
confirmPasswordLength = (min || max);
var selectedCharacter = "";

