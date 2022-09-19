import { useState } from "react";
import { toast } from "react-toastify";
import Base from "../Base";
import { useDispatch, useSelector } from "react-redux";
import { changeUserChance } from "../redux/storingData";
import Container from "../Components/Container";

export default function OnePlayer() {
	const isUserChance = useSelector((state) => state["isUserChance"]);
	const dispatch = useDispatch();
	const [userIs, setUserIs] = useState();
	return (
		<Base>
			<main className="mainData">
				{userIs ? (
					<>
						<Container />
						<h1>{isUserChance ? "Chance - User" : "Chance - Computer"}</h1>
					</>
				) : (
					<>
						What do you want to choose? X or O?
						<div
							onClick={() => {
								setUserIs("X");
								dispatch(changeUserChance(true));
							}}
						>
							X
						</div>
						<div
							onClick={() => {
								setUserIs("O");
								dispatch(changeUserChance(false));
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
