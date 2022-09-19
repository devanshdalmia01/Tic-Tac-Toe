import { useSelector } from "react-redux";
import Row from "./Row";

export default function Container() {
	const gridData = useSelector((state) => state);
	console.log(gridData);
	return (
		<div className="container">
			{gridData[0].map((row, index) => {
				let arr = ["0", "1", "2"];
				return <Row key={index} place={arr[index]} row={row} />;
			})}
		</div>
	);
}
