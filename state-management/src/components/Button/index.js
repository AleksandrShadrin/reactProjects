const Button = ({ children, className, onClick }) => {
	return (
		<button
			className={`px-4 py-2 text-lg transition-all text-white rounded-full min-w-fit ${
				className || " bg-gray-400 hover:bg-gray-500"
			}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
