import Box from "./Box";

export default function Row({ place, row, onePlayer }) {
	return (
		<div className="row">
			{row.map((box, index) => {
				let arr = [`${place}0`, `${place}1`, `${place}2`];
				return <Box key={index} place={arr[index]} box={box} onePlayer={onePlayer} />;
			})}
		</div>
	);
}
