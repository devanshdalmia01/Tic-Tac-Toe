import Base from "../Base";
import { useDispatch, useSelector } from "react-redux";
import { setUser, resetGame } from "../redux/storingData";
import Container from "../Components/Container";

export default function OnePlayer() {
	const user1 = useSelector((state) => state["user1"]);
	const user2 = useSelector((state) => state["user2"]);
	const dispatch = useDispatch();
	return (
		<Base>
			<main className="mainData">
				{user1[1] && user2[1] ? (
					<>
						<Container />
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
