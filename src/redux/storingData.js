import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
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
		winnerDeclared: false,
		lastFilled: "",
	},
	reducers: {
		registerChance(state, action) {
			switch (action.payload[0]) {
				case "user1":
					state[0][action.payload[1][0]][action.payload[1][1]] = state["user1"][1];
					state["user1"][0] = !state["user1"][0];
					state["user2"][0] = !state["user2"][0];
					state["moves"] = state["moves"] + 1;
					state["lastFilled"] = action.payload[1];
					break;
				case "user2":
					state[0][action.payload[1][0]][action.payload[1][1]] = state["user2"][1];
					state["user2"][0] = !state["user2"][0];
					state["user1"][0] = !state["user1"][0];
					state["moves"] = state["moves"] + 1;
					state["lastFilled"] = action.payload[1];
					break;
				default:
			}
			dataSlice.caseReducers.winningLogic(state, action);
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
				const val = grid[getRandom(grid)];
				state[0][val[0]][val[1]] = state["user2"][1];
				state["user2"][0] = !state["user2"][0];
				state["user1"][0] = !state["user1"][0];
				state["moves"] = state["moves"] + 1;
				state["lastFilled"] = val;
				dataSlice.caseReducers.winningLogic(state, action);
			}
		},
		winningLogic(state, action) {
			switch (state["lastFilled"]) {
				case "00":
					if (
						(state[0][0][0] === state[0][0][1] && state[0][0][1] === state[0][0][2]) ||
						(state[0][0][0] === state[0][1][0] && state[0][1][0] === state[0][2][0]) ||
						(state[0][0][0] === state[0][1][1] && state[0][1][1] === state[0][2][2])
					) {
						state["user1"][1] === state[0][0][0] && toast.success(`${state["user1"][1]} is winner.`);
						state["user2"][1] === state[0][0][0] && toast.success(`${state["user2"][1]} is winner.`);
						state["winnerDeclared"] = true;
					}
					break;
				case "01":
					if ((state[0][0][0] === state[0][0][1] && state[0][0][1] === state[0][0][2]) || (state[0][0][1] === state[0][1][1] && state[0][1][1] === state[0][2][1])) {
						state["user1"][1] === state[0][0][1] && toast.success(`${state["user1"][1]} is winner.`);
						state["user2"][1] === state[0][0][1] && toast.success(`${state["user2"][1]} is winner.`);
						state["winnerDeclared"] = true;
					}
					break;
				case "02":
					if (
						(state[0][0][0] === state[0][0][1] && state[0][0][1] === state[0][0][2]) ||
						(state[0][0][2] === state[0][1][2] && state[0][1][2] === state[0][2][2]) ||
						(state[0][0][2] === state[0][1][1] && state[0][1][1] === state[0][2][0])
					) {
						state["user1"][1] === state[0][0][2] && toast.success(`${state["user1"][1]} is winner.`);
						state["user2"][1] === state[0][0][2] && toast.success(`${state["user2"][1]} is winner.`);
						state["winnerDeclared"] = true;
					}
					break;
				case "10":
					if ((state[0][1][0] === state[0][1][1] && state[0][0][1] === state[0][1][2]) || (state[0][0][0] === state[0][1][0] && state[0][1][0] === state[0][2][0])) {
						state["user1"][1] === state[0][1][0] && toast.success(`${state["user1"][1]} is winner.`);
						state["user2"][1] === state[0][1][0] && toast.success(`${state["user2"][1]} is winner.`);
						state["winnerDeclared"] = true;
					}
					break;
				case "11":
					if (
						(state[0][0][0] === state[0][1][1] && state[0][1][1] === state[0][2][2]) ||
						(state[0][0][1] === state[0][1][1] && state[0][1][1] === state[0][2][1]) ||
						(state[0][1][0] === state[0][1][1] && state[0][1][1] === state[0][1][2]) ||
						(state[0][0][2] === state[0][1][1] && state[0][1][1] === state[0][2][0])
					) {
						state["user1"][1] === state[0][1][1] && toast.success(`${state["user1"][1]} is winner.`);
						state["user2"][1] === state[0][1][1] && toast.success(`${state["user2"][1]} is winner.`);
						state["winnerDeclared"] = true;
					}
					break;
				case "12":
					if ((state[0][1][0] === state[0][1][1] && state[0][1][1] === state[0][1][2]) || (state[0][0][2] === state[0][1][2] && state[0][1][2] === state[0][2][2])) {
						state["user1"][1] === state[0][1][2] && toast.success(`${state["user1"][1]} is winner.`);
						state["user2"][1] === state[0][1][2] && toast.success(`${state["user2"][1]} is winner.`);
						state["winnerDeclared"] = true;
					}
					break;
				case "20":
					if (
						(state[0][0][0] === state[0][1][0] && state[0][1][0] === state[0][2][0]) ||
						(state[0][2][0] === state[0][1][1] && state[0][1][1] === state[0][0][2]) ||
						(state[0][2][0] === state[0][2][1] && state[0][2][1] === state[0][2][2])
					) {
						state["user1"][1] === state[0][2][0] && toast.success(`${state["user1"][1]} is winner.`);
						state["user2"][1] === state[0][2][0] && toast.success(`${state["user2"][1]} is winner.`);
						state["winnerDeclared"] = true;
					}
					break;
				case "21":
					if ((state[0][2][0] === state[0][2][1] && state[0][2][1] === state[0][2][2]) || (state[0][2][1] === state[0][1][1] && state[0][1][1] === state[0][0][1])) {
						state["user1"][1] === state[0][2][1] && toast.success(`${state["user1"][1]} is winner.`);
						state["user2"][1] === state[0][2][1] && toast.success(`${state["user2"][1]} is winner.`);
						state["winnerDeclared"] = true;
					}
					break;
				case "22":
					if (
						(state[0][0][0] === state[0][1][1] && state[0][1][1] === state[0][2][2]) ||
						(state[0][2][0] === state[0][2][1] && state[0][2][1] === state[0][2][2]) ||
						(state[0][2][2] === state[0][1][2] && state[0][1][2] === state[0][0][2])
					) {
						state["user1"][1] === state[0][2][2] && toast.success(`${state["user1"][1]} is winner.`);
						state["user2"][1] === state[0][2][2] && toast.success(`${state["user2"][1]} is winner.`);
						state["winnerDeclared"] = true;
					}
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
			state["moves"] = 0;
			state["winnerDeclared"] = false;
			state["lastFilled"] = "";
		},
	},
});

export const { registerChance, setUser, computerChance, winningLogic, resetGame } = dataSlice.actions;

export default dataSlice.reducer;
