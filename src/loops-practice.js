for (let i = 1; i < 11; i++) {
	//start with 1 add 1 each time until 10
	console.log(i); //print the number using console property
}

let i = 1; //start with 1
while (i < 11) {
	//add 1 each time until 10
	console.log(i); //print the number
	i++;
} //end loop

const movies = [
	"Ever After",
	"The Princess Bride",
	"The Sound of Music",
	"The Lion King",
	"The Little Mermaid",
]; //array of movies
for (let i = 0; i < movies.length; i++) {
	/*
    start with 0 add 1 each time until the length of the array
    this will loop through the array until the end
    */
	const movie = movies[i]; //get the movie
	console.log(`Movie ${i + 1}: ${movie}`); //print the movie and position
} //end loop

players = [
	{ name: "Patrick", kills: 5, deaths: 0 }, //object
	{ name: "Michael", kills: 3, deaths: 4 }, //object
	{ name: "Lebron", kills: 6, deaths: 4 }, //object
]; //array of players
for (let i = 0; i < players.length; i++) {
	/*
    start with 0 add 1 each time until the length of the array
    this will loop through the array until the end
    */
	const player = players[i]; //get the player

	kdratio = (player.kills / Math.max(player.deaths, 1)).toFixed(2); //calculate the kill/death ratio
	const newProperty = "ratio";
	player[newProperty] = `${kdratio}`; //add the ratio to the array

	console.log(
		`Player ${i + 1}: ${player.name} has ${player.kills} kills and ${player.deaths} deaths and has a Kill/Death ratio of ${kdratio}`,
	); //print the player and stats
} //end loop
console.log(players); //find the highest ratio

if (
	players[0].ratio > players[1].ratio &&
	players[0].ratio > players[2].ratio
) {
	console.log(`${players[0].name} has the highest Kill/Death ratio`); //print the player with the highest ratio
} else if (
	players[1].ratio > players[0].ratio &&
	players[1].ratio > players[2].ratio
) {
	console.log(`${players[1].name} has the highest Kill/Death ratio`); //print the player with the highest ratio
} else {
	console.log(`${players[2].name} has the highest Kill/Death ratio`); //print the player with the highest ratio
}
