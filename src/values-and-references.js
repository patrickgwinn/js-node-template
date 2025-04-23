const numbers = [1, 2, 3, 4, 5];
function doubleNumbers(numbers) {
	return numbers.map((number) => number * 2);
}
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubleNumbers(numbers)); // [2, 4, 6, 8, 10]

// Monsters data for Coding Challenge 2
const monsters = [
	// Deals 10-60 damage per bite
	{ name: "Cacodemon", health: 400, damage: 35 },

	// Deals 15-75 damage per claw/fireball
	{ name: "Baron of Hell", health: 1000, damage: 45 },

	// Deals 20-200 damage per rocket
	{ name: "Cyberdemon", health: 4000, damage: 125 },

	// Deals 5-50 damage per bite
	{ name: "Hell Knight", health: 800, damage: 25 },

	// Deals 10-100 damage per bite
	{ name: "Imp", health: 200, damage: 20 },

	// Deals 5-25 damage per bite
	{ name: "Lost Soul", health: 100, damage: 10 },

	// Deals 5-50 damage per bite
	{ name: "Pinky", health: 300, damage: 15 },

	// Deals 10-100 damage per bite
	{ name: "Revenant", health: 500, damage: 30 },

	// Deals 5-50 damage per bite
	{ name: "Spectre", health: 200, damage: 20 },

	// Deals 5-50 damage per bite
	{ name: "Spider Mastermind", health: 2000, damage: 50 },

	// Deals 5-50 damage per bite
	{ name: "Vile", health: 1000, damage: 40 },

	// Deals 5-50 damage per bite
	{ name: "Zombie", health: 100, damage: 5 },

	// Deals 5-50 damage per bite
	{ name: "Zombieman", health: 200, damage: 10 },
];
const monstersWithHealthBonus = monsters.map((monster) => {
	return { ...monster, health: monster.health + 100 };
});

console.log(monsters);
console.log(monstersWithHealthBonus);

const groceries = [
	{ name: "Apples", price: 1.0, quantity: 3 },
	{ name: "Bananas", price: 0.5, quantity: 6 },
	{ name: "Cherries", price: 2.0, quantity: 1 },
	{ name: "Dates", price: 3.0, quantity: 2 },
	{ name: "Elderberries", price: 4.0, quantity: 1 },
];

const groceryTotal = groceries.map((grocery) => {
	return { ...grocery, total: grocery.price * grocery.quantity };
});

console.log(groceries);
console.log(groceryTotal);
