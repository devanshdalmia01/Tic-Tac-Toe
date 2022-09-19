import Base from "../Base";
import { useDispatch, useSelector } from "react-redux";
import { setUser, resetGame } from "../redux/storingData";
import Container from "../Components/Container";
import { useState } from "react";

export default function TwoPlayer() {
	const [onePlayer] = useState(false);
	const user1 = useSelector((state) => state["user1"]);
	const user2 = useSelector((state) => state["user2"]);
	const dispatch = useDispatch();
	return (
		<Base>
			<main className="mainData">
				{user1[1] && user2[1] ? (
					<>
						<Container onePlayer={onePlayer} />
						<h1>{user1[0] ? "Chance - User1" : "Chance - User2"}</h1>
						<div
							onClick={() => {
								dispatch(resetGame());
							}}
						>
							Reset
						</div>
					</>
				) : (
					<>
						What does User 1 want to choose? X or O?
						<div
							onClick={() => {
								dispatch(setUser(["user1", [true, "X"]]));
								dispatch(setUser(["user2", [false, "O"]]));
							}}
						>
							X
						</div>
						<div
							onClick={() => {
								dispatch(setUser(["user1", [false, "O"]]));
								dispatch(setUser(["user2", [true, "X"]]));
							}}
						>
							O
						</div>
					</>
				)}
			</main>
		</Base>
	);
}
