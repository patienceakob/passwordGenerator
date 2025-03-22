
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V",
                    "W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
                    "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`",
                    "!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",
                    ">",".","?","/"];


let firstPassword = document.getElementById("first-pass")
let secondPassword = document.getElementById("second-pass")
let generateBtn = document.getElementById("generate-btn")
// let random = Math.floor(Math.random() * characters.length)
// function generatePassword() {
//     firstPassword.textContent = "strong password"
//     secondPassword.textContent = "weak password"
// }
function generatePassword() {
     firstPassword.textContent = ""
     secondPassword.textContent= ""
    for (let i = 0; i < 15; i ++){
    firstPassword.textContent += characters[Math.floor(Math.random() * characters.length)]
    secondPassword.textContent += characters[Math.floor(Math.random() * characters.length)]

}

    

}
generateBtn.addEventListener("click", generatePassword)

