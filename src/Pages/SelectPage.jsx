import Base from "../Base";
import { Link } from "react-router-dom";

export default function SelectPage() {
	return (
		<Base>
			<div className="selectPage">
				<Link className="selectOption" to="/oneplayer">
					One Player With Computer
				</Link>
				<Link className="selectOption" style={{ marginLeft: "50px" }} to="/twoplayer">
					Two Player
				</Link>
			</div>
		</Base>
	);
}
