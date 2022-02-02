// 1-6, 2-11, 3-16

function matchHouses(step) {
	return step === 1 ? 6 : 6 + (step - 1) * 5
}


console.log(matchHouses(1)); //➞ 6
console.log(matchHouses(4)); //➞ 21
console.log(matchHouses(87)); //➞ 436

