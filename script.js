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

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
