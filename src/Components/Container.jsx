import { useSelector } from "react-redux";
import Row from "./Row";

export default function Container() {
	const gridData = useSelector((state) => state[0]);
	return (
		<div className="container">
			{gridData.map((row, index) => {
				return <Row key={index} row={row} />;
			})}
		</div>
	);
}
