import { createSlice } from "@reduxjs/toolkit";

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
	},
	reducers: {
		registerChance(state, action) {
			switch (action.payload[0]) {
				case "user1":
					state[0][action.payload[1][0]][action.payload[1][1]] = state["user1"][1];
					state["user1"][0] = !state["user1"][0];
					state["user2"][0] = !state["user2"][0];
					break;
				case "user2":
					state[0][action.payload[1][0]][action.payload[1][1]] = state["user2"][1];
					state["user2"][0] = !state["user2"][0];
					state["user1"][0] = !state["user1"][0];
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

export const { registerChance, setUser, resetGame } = dataSlice.actions;

export default dataSlice.reducer;
