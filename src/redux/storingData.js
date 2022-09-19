import { createSlice } from "@reduxjs/toolkit";
import getRandom from "../Utilities/Random";

const dataSlice = createSlice({
	name: "data",
	initialState: {
		0: [
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0],
		],
		user1: [false, ""],
		user2: [false, ""],
		moves: 0,
	},
	reducers: {
		registerChance(state, action) {
			switch (action.payload[0]) {
				case "user1":
					state[0][action.payload[1][0]][action.payload[1][1]] = state["user1"][1];
					state["user1"][0] = !state["user1"][0];
					state["user2"][0] = !state["user2"][0];
					state["moves"] = state["moves"] + 1;
					break;
				case "user2":
					state[0][action.payload[1][0]][action.payload[1][1]] = state["user2"][1];
					state["user2"][0] = !state["user2"][0];
					state["user1"][0] = !state["user1"][0];
					state["moves"] = state["moves"] + 1;
					break;
				default:
			}
		},
		setUser(state, action) {
			switch (action.payload[0]) {
				case "user1":
					state["user1"] = action.payload[1];
					break;
				case "user2":
					state["user2"] = action.payload[1];
					break;
				default:
			}
		},
		computerChance(state, action) {
			if (state["moves"] < 9) {
				const grid = state[0].flat().map((num, index) => {
					if (!(num === "X" || num === "O")) {
						if (index <= 2) {
							return `${num}${index}`;
						} else if (index > 2 && index < 6) {
							return `${num + 1}${index - 3}`;
						} else {
							return `${num + 2}${index - 6}`;
						}
					} else return num;
				});
				console.log(grid);
				const val = grid[getRandom(grid)];
				console.log(val);
				state[0][val[0]][val[1]] = state["user2"][1];
				state["user2"][0] = !state["user2"][0];
				state["user1"][0] = !state["user1"][0];
				state["moves"] = state["moves"] + 1;
			}
		},
		resetGame(state, action) {
			state[0] = [
				[0, 0, 0],
				[0, 0, 0],
				[0, 0, 0],
			];
			state["user1"] = [false, ""];
			state["user2"] = [false, ""];
		},
	},
});

export const { registerChance, setUser, computerChance, resetGame } = dataSlice.actions;

export default dataSlice.reducer;
