import Base from "../Base";
import { useDispatch, useSelector } from "react-redux";
import { setUser, resetGame, computerChance } from "../redux/storingData";
import Container from "../Components/Container";
import { useEffect, useState } from "react";

export default function TwoPlayer() {
	const [onePlayer] = useState(false);
	const user1 = useSelector((state) => state["user1"]);
	const user2 = useSelector((state) => state["user2"]);
	const moves = useSelector((state) => state["moves"]);
	const winnerDeclared = useSelector((state) => state["winnerDeclared"]);
	const dispatch = useDispatch();
	useEffect(() => {
		if (winnerDeclared) {
			setTimeout(() => {
				dispatch(resetGame());
			}, 2000);
		}
	}, [winnerDeclared]);
	return (
		<Base>
			<main className="mainData">
				{moves === 9 && !winnerDeclared ? (
					<>
						<h1 className="whosChance">Unfortunately no one won!</h1>
					</>
				) : user1[1] && user2[1] ? (
					<>
						<Container onePlayer={onePlayer} />
						<h1 className="whosChance">{user1[0] ? "Chance - User 1" : "Chance - User 2"}</h1>
						<div
							className="resetButton"
							onClick={() => {
								dispatch(resetGame());
							}}
						>
							Reset Game
						</div>
					</>
				) : (
					<>
						<h1>What does User 1 want to choose? X or O?</h1>
						<div className="buttonContainer">
							<div
								className="selectXorO"
								onClick={() => {
									dispatch(setUser(["user1", [true, "X"]]));
									dispatch(setUser(["user2", [false, "O"]]));
								}}
							>
								X
							</div>
							<div
								className="selectXorO"
								onClick={() => {
									dispatch(setUser(["user1", [false, "O"]]));
									dispatch(setUser(["user2", [true, "X"]]));
								}}
							>
								O
							</div>
						</div>
					</>
				)}
			</main>
		</Base>
	);
}
