function redundant(str) {
	return () => {
        return str
    }
}

const f1 = redundant("apple")
// const f2 = redundant("pear")
// const f3 = redundant("")
console.log(f1());  