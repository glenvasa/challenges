const output = document.querySelector(".output");
const btn = document.querySelector(".btn");
const min = document.querySelector(".min");
const max = document.querySelector(".max");
const range = document.querySelector(".range");

let minNum = min.value;
let maxNum = max.value;
let numArray = [];

const buildArray = (low, high) => {
  numArray = [];
  for (let i = low; i <= high; i++) {
    numArray.push(i);
  }
};

const randomNoRepeats = (arr) => {
  if (arr.length === 0) {
    return (output.innerText = "No more numbers left!");
  }
  while (arr.length > 0) {
    let index = Math.floor(Math.random() * numArray.length);
    let number = numArray[index];
    numArray.splice(index, 1);
    return (output.innerText = number);
  }
};

btn.addEventListener("click", () => {
  randomNoRepeats(numArray);
});

min.addEventListener("keyup", () => {
  minNum = min.value;
  range.innerText = `The range is from ${minNum} to ${maxNum}`;
  buildArray(minNum, maxNum);
});

max.addEventListener("keyup", () => {
  maxNum = max.value;
  range.innerText = `The range is from ${minNum} to ${maxNum}`;
  buildArray(minNum, maxNum);
});
