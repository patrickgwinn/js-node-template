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

const cart = {
	price: 100,
	tax: 0.07,
};
function calculateTotalWithTax(cart) {
	return cart.price * (1 + cart.tax);
}
console.log(calculateTotalWithTax(cart)); // 107

const nameInfo = {
	firstName: "Patrick",
	lastName: "Gwinn",
};
function formatFullName(firstName, lastName) {
	return `${firstName} ${lastName}`;
}
console.log(formatFullName(nameInfo.firstName, nameInfo.lastName)); // Patrick Gwinn

const character = {
	name: "Hero",
	weapon: "Sword",
	level: 1,
};
function displayCharacterInfo(character) {
	return `${character.name} is at level ${character.level} and wields a ${character.weapon}.`;
}
console.log(displayCharacterInfo(character)); // Hero is at level 1 and wields a Sword.
