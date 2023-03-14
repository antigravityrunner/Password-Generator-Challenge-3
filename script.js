// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = Number(
    prompt("How long would you like the password? \nMin:8\nMax:128", 8)
  );
  if (passwordLength < 8) {
    alert("Too short");
    return;
  } else if (passwordLength > 128) {
    alert("Too long");
    return;
  }

  var uppercase = confirm("Do you want uppercase letters?");
  var lowercase = confirm("Do you want lowercase letters?");
  var numbers = confirm("Do you want any numbers?");
  var specialCharaters = confirm("Do you want any special charaters?");

  if (!(uppercase || lowercase || numbers || specialCharaters)) {
    alert("You must select some charaters to generate a password with!");
    return;
  }

  var password = generatePassword(
    passwordLength,
    uppercase,
    lowercase,
    numbers,
    specialCharaters
  );
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(passLen, upper, lower, numbers, specials) {
  var password = "";

  var possibleCharacters = "";

  if(lower){
    possibleCharacters+="abcdefghijklmnopqrstuvwxyz";
  }

  if(upper){
    possibleCharacters+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if(numbers){
    possibleCharacters+="1234567890";
  }

  if(specials){
    possibleCharacters+="!@#$%^&*()_+<>?/.,';:\"\\"
  }

  for (var i = 0; i < passLen; i++) {

  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
