const Card = ({ children }) => {
	return (
		<div className="min-w-fit max-w-xl m-auto mt-3 text-lg p-4 border-2 bg-slate-200 border-gray-200 rounded-md shadow-lg shadow-gray-300">
			{children}
		</div>
	);
};
export default Card;
