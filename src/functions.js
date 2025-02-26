const order = {
	price: 10,
	quantity: 2,
};
function calculateTotal(order) {
	return order.price * order.quantity;
}
console.log(calculateTotal(order)); // 20

const user = {
	name1: "Patrick",
	name2: "Gwinn",
};
function formatUsername(name1, name2) {
	return `${name2}, ${name1}`;
}
console.log(formatUsername(user.name1, user.name2)); // Gwinn, Patrick

const hello = {
	word1: "Hello",
	word2: "World",
};
function formatGreeting(word1, word2) {
	return `${word1} ${word2}!`;
}
console.log(formatGreeting(hello.word1, hello.word2)); // Hello World!
