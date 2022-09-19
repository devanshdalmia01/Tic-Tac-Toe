import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { registerChance, computerChance } from "../redux/storingData";

export default function Box({ place, box, onePlayer }) {
	const user1 = useSelector((state) => state["user1"]);
	const user2 = useSelector((state) => state["user2"]);
	const dispatch = useDispatch();
	const boxClick = (e) => {
		e.preventDefault();
		if (onePlayer) {
			if (user1[0]) {
				dispatch(registerChance(["user1", e.target.id]));
				setTimeout(() => {
					dispatch(computerChance());
				}, 2000);
			}
		} else {
			if (user1[0]) {
				dispatch(registerChance(["user1", e.target.id]));
			} else if (user2[0]) {
				dispatch(registerChance(["user2", e.target.id]));
			}
		}
	};
	return (
		<div
			className="box"
			id={place}
			onClick={(e) => {
				if (box === 0) {
					boxClick(e);
				} else {
					toast.error("Already Filled!");
				}
			}}
		>
			{box === 0 ? "" : box === "X" ? "X" : "O"}
		</div>
	);
}
