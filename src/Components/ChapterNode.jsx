import UpIcon from "../Assets/Icons/UpIcon";
import DownIcon from "../Assets/Icons/DownIcon";
import OutdentIcon from "../Assets/Icons/OutdentIcon";
import IndentIcon from "../Assets/Icons/IndentIcon";
import DeleteIcon from "../Assets/Icons/DeleteIcon";
import HeadingNode from "./HeadingNode";
import { useDispatch } from "react-redux";
import { updateStandard, deleteStandard, indentStandard, moveUpStandard, moveDownStandard } from "../redux/storingData";
import { toast } from "react-toastify";

export default function ChapterNode({ subjectId, chapterData, pressEnter, setPressEnter }) {
	const dispatch = useDispatch();
	const handleUpdate = (e, chapterId) => {
		e.preventDefault();
		dispatch(updateStandard([e.target.value, subjectId, chapterId]));
	};
	const handleDelete = (e, chapterId) => {
		e.preventDefault();
		dispatch(deleteStandard([subjectId, chapterId]));
	};
	const handleIndent = (e, chapterId) => {
		e.preventDefault();
		dispatch(indentStandard([subjectId, chapterId]));
	};
	const handleOutdent = (e) => {
		e.preventDefault();
		return toast.error("You cannot outdent a chapter!");
	};
	const handleMoveUp = (e, chapterId) => {
		e.preventDefault();
		dispatch(moveUpStandard([subjectId, chapterId]));
	};
	const handleMoveDown = (e, chapterId) => {
		e.preventDefault();
		dispatch(moveDownStandard([subjectId, chapterId]));
	};
	const handlePressEnter = (e) => {
		if (e.keyCode === 13) {
			setPressEnter(!pressEnter);
		}
	};
	return chapterData.map((data) => {
		return (
			<div key={data.id}>
				<div className="chapter">
					<div className="iconsDiv">
						<button data-tip="Move Up" onClick={(e) => handleMoveUp(e, data.id)}>
							<UpIcon />
						</button>
						<button data-tip="Move Down" onClick={(e) => handleMoveDown(e, data.id)}>
							<DownIcon />
						</button>
						<button data-tip="Outdent" onClick={handleOutdent}>
							<OutdentIcon />
						</button>
						<button data-tip="Indent" onClick={(e) => handleIndent(e, data.id)}>
							<IndentIcon />
						</button>
						<button data-tip="Delete" onClick={(e) => handleDelete(e, data.id)}>
							<DeleteIcon />
						</button>
					</div>
					<div className="highlighterDiv">&nbsp;</div>
					<label htmlFor={data.id}></label>
					<input
						onKeyDown={handlePressEnter}
						placeholder="Enter chapter name"
						className="inputField"
						type="text"
						id={data.id}
						value={data.text}
						onChange={(e) => handleUpdate(e, data.id)}
						autoFocus={true}
					/>
				</div>
				<hr className="line" />
				<HeadingNode headingData={data.children} subjectId={subjectId} chapterId={data.id} pressEnter={pressEnter} setPressEnter={setPressEnter} />
			</div>
		);
	});
}
