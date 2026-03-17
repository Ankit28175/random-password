const passwordBox = document.getElementById("password") ;
const length = 12 ;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const symbol = "!@#$%^&*(){}[]?><|\/";
const numbers = "0123456789"

allChars = upperCase + lowerCase + symbol + numbers ;

function creatpassWord(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];

    while(length > password.length){
    password += allChars[Math.floor(Math.random() * allChars.length)];

    }
    passwordBox.value = password;
}