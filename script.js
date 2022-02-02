let containerDiv = document.getElementById("container")
// let textField = document.getElementById("textfield")
// let submitButton = document.getElementById("submit-button")


// submitButton.addEventListener("click", function () {alert("Vowel total is _ "); 
// })


// split string into array
// loop over new array
// for each item in array, compare item against letter checker
// if the item matches the letter checker, increment the counter by 1

let wordsExample = "I like to eat apples and other things not that"
let wordsExampleArray = wordsExample.split(" ")
let letterChecker = "o"
let vowelCounter = 0; 

for (let i = 0; i < wordsExampleArray.length; i++) {
        if (wordsExampleArray[i].includes(letterChecker)) {
        vowelCounter ++;
        console.log(letterChecker)
}}




