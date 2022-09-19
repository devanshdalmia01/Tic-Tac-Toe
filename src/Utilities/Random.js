export default function getRandom(grid) {
	let random = Math.floor(Math.random() * grid.length);
	if (grid[random] === "X" || grid[random] === "O") {
		random = getRandom(grid);
	}
	return random;
}
