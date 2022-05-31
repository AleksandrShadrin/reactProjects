import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { useContext, useEffect } from "react";
import { ListsContext } from "../../context/ListsContext";

const Lists = () => {
	const navigate = useNavigate();
	const { loading, error, lists, fetchLists } = useContext(ListsContext);
	useEffect(() => {
		!lists.length && fetchLists();
	}, [fetchLists]);

	return (
		<>
			{navigate && <NavBar title="Your Lists" />}
			<div className="text-xl font-bold flex flex-col max-w-2xl m-auto border-2 border-slate-200 p-4 mt-12 bg-indigo-400 text-white rounded-md shadow-md shadow-indigo-500">
				{loading || error ? (
					<span className="">{error || "Loading..."}</span>
				) : (
					lists?.map((list) => (
						<Link
							className="underline"
							key={list.id}
							to={`list/${list.id}`}
						>
							<h3>{list.title}</h3>
						</Link>
					))
				)}
			</div>
		</>
	);
};

export default Lists;
