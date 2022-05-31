import Card from "../../components/Card";
import useFetchData from "../../hooks/useFetch";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Pagination from "../../components/Pagination";
const Questions = () => {
	const router = useRouter();
	const { page } = router.query;
	const url = `https://api.stackexchange.com/2.2/questions?${
		page ? `page=${page}&` : ""
	}order=desc&sort=hot&tagged=reactjs&site=stackoverflow`;
	const { data, error, loading } = useFetchData({ url });
	const questions = data?.items;
	const hasMore = data?.has_more;

	return (
		<div className="flex flex-col justify-between">
			<h2 className="text-2xl font-bold text-cyan-700 text-center my-4">
				Questions
			</h2>
			{loading ? (
				<span className="text-xl font-bold">Loading...</span>
			) : (
				<>
					<div className="flex flex-col gap-4">
						{questions?.map((question) => (
							<Link
								key={question.question_id}
								href={`/questions/${question.question_id}`}
								passHref
							>
								<a>
									<Card
										title={question.title}
										views={question.view_count}
										answers={question.answer_count}
									/>
								</a>
							</Link>
						))}
					</div>
					<Pagination
						currentPage={parseInt(page) || 1}
						hasMore={hasMore}
					/>
				</>
			)}
		</div>
	);
};

export default Questions;
