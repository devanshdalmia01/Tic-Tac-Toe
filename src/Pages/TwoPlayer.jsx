import { useState } from "react";
import Base from "../Base";
import ChapterNode from "../Components/ChapterNode";
import TableHeading from "../Components/TableHeading";
import TopBar from "../Components/TopBar";
import AddRowButton from "../Components/AddRowButton";
import AddSubjectButton from "../Components/AddSubjectButton";
import { useSelector } from "react-redux";

export default function TwoPlayer() {
	const [currentSubjectName, setCurrentSubjectName] = useState("");
	const [pressEnter, setPressEnter] = useState(false);
	const jsonData = useSelector((state) => state[0]);
	return (
		<Base>
			<main className="mainData">
				<TopBar setCurrentSubjectName={setCurrentSubjectName} />
				{!(jsonData.length === 0) &&
					jsonData.map((subject, index) => {
						let subjectName = subject.text;
						return <AddSubjectButton key={index} subjectName={subjectName} currentSubjectName={currentSubjectName} setCurrentSubjectName={setCurrentSubjectName} />;
					})}
				{!(jsonData.length === 0) ? (
					jsonData.map(
						(subject, index) =>
							subject.text === currentSubjectName && (
								<div key={index}>
									<TableHeading currentSubjectName={currentSubjectName} />
									<ChapterNode chapterData={subject.children} subjectId={subject.id} pressEnter={pressEnter} setPressEnter={setPressEnter} />
									<AddRowButton subjectId={subject.id} pressEnter={pressEnter} />
								</div>
							)
					)
				) : (
					<h1 style={{ marginTop: "30px", textAlign: "center" }}>First Add A Subject</h1>
				)}
			</main>
		</Base>
	);
}
