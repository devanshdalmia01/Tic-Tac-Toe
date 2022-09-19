import Box from "./Box";

export default function Row({ row }) {
	return (
		<div className="row">
			{row.map((box, index) => {
				return <Box key={index} box={box} />;
			})}
		</div>
	);
}
