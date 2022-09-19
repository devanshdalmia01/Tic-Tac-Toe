import Base from "../Base";
import { useDispatch, useSelector } from "react-redux";
import { setUser, resetGame, computerChance } from "../redux/storingData";
import Container from "../Components/Container";
import { useState } from "react";

export default function OnePlayer() {
	const [onePlayer] = useState(true);
	const user1 = useSelector((state) => state["user1"]);
	const user2 = useSelector((state) => state["user2"]);
	const dispatch = useDispatch();
	return (
		<Base>
			<main className="mainData">
				{user1[1] && user2[1] ? (
					<>
						<Container onePlayer={onePlayer} />
						<h1>{user1[0] ? "Chance - User" : "Chance - Computer"}</h1>
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
						What do you want to choose? X or O?
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
								setTimeout(() => {
									dispatch(computerChance());
								}, 2000);
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
