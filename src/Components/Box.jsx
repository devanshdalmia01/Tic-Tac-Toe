import { useDispatch, useSelector } from "react-redux";

export default function Box({ box }) {
	const isUserChance = useSelector((state) => state["isUserChance"]);
	const dispatch = useDispatch();
	const boxClick = () => {
		if (isUserChance) {
			
		} else {
		}
	};
	return (
		<div className="box" onClick={boxClick}>
			{box === 0 ? "" : ""}
		</div>
	);
}
