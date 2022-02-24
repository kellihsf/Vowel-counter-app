let containerDiv = document.getElementById("container");
let textField = document.getElementById("textfield");
let submitButton = document.getElementById("submit-button");

// split string into array
// loop over new array
// for each item in array, compare item against letter checker
// if the item matches the letter checker, increment the counter by 1

// let wordsExample = "I like to eat apples and other things not that"
// let wordsExampleArray = wordsExample.split(" ")
// let letterChecker = "a"
// let vowelCounter = 0;

// for (let i = 0; i < wordsExampleArray.length; i++) {
//         if (wordsExampleArray[i].includes(letterChecker)) {
//         vowelCounter ++;
//         //console.log(vowelCounter)
//         console.log(letterChecker)
// }}

// const showVowelTotals = document.querySelector(".container")
// showVowelTotals.innerHTML += vowelCounter;

function getCount(str) {
  let vowelsCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let char of str) {
    if (vowels.includes(char)) {
      vowelsCount++;
    }
  }
  submitButton.addEventListener("click", () => {
    submitButton.textContent = `Vowel count: ${vowelsCount}`
  });
  return vowelsCount;
}

console.log(getCount("poole"));
