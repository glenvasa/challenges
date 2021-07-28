/*
DESCRIPTION:
In this challenge, you are curious about how old you would be in dog years.
You are expected to write JavaScript code that will convert any human age 
to dog years. When a user enters a human age into the calculator and pressed 
‘convert me to dog years’, the new dog years age should show up in the space 
below it.

On average, a dog’s first year on the planet worth is the equivalent of 10.5 
human years.

event listeners, getElementById, operators


DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. use the input value and convert it into dog years on 'click'
3. display the result in the h1 tag

STRETCH GOALS:
- Can you convert your age into dog years, months and days? 
- Can you improve the overall design?

*/

let input = document.getElementById("input");
let mainButton = document.querySelector(".main");
let resetButton = document.querySelector('.reset')
let result = document.getElementById("result");



const calcDogYears = (num) => {
  let dogYears = Math.floor(num / 10.5);
  result.innerText = dogYears
};

const resetCounter = () => {
    result.innerText = 00
}

const inputValue = (val) => {
    console.log(val);
}

mainButton.addEventListener("click", () => calcDogYears(input.value));
resetButton.addEventListener("click", resetCounter);

// input.addEventListener('keypress', (e) => inputValue(e.target.value) )
