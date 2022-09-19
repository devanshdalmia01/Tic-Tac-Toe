import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const dataSlice = createSlice({
	name: "data",
	initialState: {
		0: [
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0],
		],
		isUserChance: false,
	},
	reducers: {
		registerChance(state, action) {},
		changeUserChance(state, action) {
			state["isUserChance"] = action.payload;
		},
		resetGame(state, action) {},
	},
});

export const { registerChance, changeUserChance, resetGame } = dataSlice.actions;

export default dataSlice.reducer;
