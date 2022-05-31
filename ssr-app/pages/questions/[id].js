import Card from "../../components/Card";
import { useRouter } from "next/router";
export const getServerSideProps = async ({ query }) => {
	const { id } = query;
	const url = `https://api.stackexchange.com/2.2/questions/${id}?site=stackoverflow`;
	let error = "";
	let data = null;
	try {
		const response = await fetch(url);
		if (response.status === 200) {
			data = await response.json();
		} else {
			throw new Error("Question wasn't found");
		}
	} catch (err) {
		error = err.message;
	}

	if (!error && data) {
		return {
			props: {
				question: data.items[0],
			},
		};
	}
	return {
		props: {
			error: "Question wasn't found",
		},
	};
};

const QuestionDetail = ({ question, error }) => {
	const router = useRouter();

	return (
		<div className="max-w-2xl m-auto">
			{!error ? (
				<>
					<h2 className="text-2xl font-bold text-cyan-700 text-center my-4">
						Question: {question.question_id}
					</h2>
					<Card
						title={question.title}
						views={question.view_count}
						answers={question.answer_count}
					/>{" "}
				</>
			) : (
				error
			)}
			<div className="text-center my-4">
				<a
					className="text-lg px-4 bg-cyan-400 
                    hover:bg-cyan-500 text-cyan-100 rounded-full
                     border-2 border-cyan-300 transition-all 
                     duration-200 cursor-pointer"
					onClick={(e) => {
						e.preventDefault();
						router.back();
					}}
				>
					Back
				</a>
			</div>
		</div>
	);
};

export default QuestionDetail;
