

function toArray(obj) {
	if (Object.keys(obj).length === 0) return []

    const arr = Object.entries(obj)    
    
    return arr
}


console.log(toArray({ a: 1, b: 2 })); // ➞ [["a", 1], ["b", 2]]
console.log(toArray({ shrimp: 15, tots: 12 }));  // ➞ [["shrimp", 15], ["tots", 12]]
console.log(toArray({})); // ➞ []