const Card = ({ title, views, answers }) => {
	return (
		<div className="rounded-md border-2  max-w-2xl m-auto border-cyan-700 bg-cyan-600 text-cyan-100 py-2 shadow-md shadow-slate-700">
			<h2 className="text-2xl font-bold border-b-2 border-cyan-700 px-2">
				{title}
			</h2>
			<span className="text-xl px-2">{`Views: ${views} | Answers: ${answers}`}</span>
		</div>
	);
};

export default Card;
