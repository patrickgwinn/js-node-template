function getOddNumbers(numbers) {
	return numbers.filter((number) => number % 2 !== 0);
}

const myNumbers = [1, 2, 3, 4, 5, 6];
const myOddNumbers = getOddNumbers(myNumbers);
console.log(myOddNumbers); // Output: [1, 3, 5]
