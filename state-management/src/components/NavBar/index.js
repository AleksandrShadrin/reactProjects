import Button from "../Button";

const NavBar = ({ goBack, title, openForm = false }) => {
	return (
		<nav className="flex justify-between items-center bg-purple-800 py-[4px] min-w-[24rem]">
			{goBack && (
				<Button
					className="ml-8 bg-indigo-500 hover:bg-indigo-600"
					onClick={goBack}
				>
					{"< Go Back"}
				</Button>
			)}
			<h2 className="text-center text-2xl font-bold text-white basis-7/12 first:ml-[20%] last:mr-[20%]">
				{title}
			</h2>
			{openForm && (
				<Button
					className="bg-emerald-500 hover:bg-emerald-600 mr-8"
					onClick={openForm}
				>
					{"+ Add Item"}
				</Button>
			)}
		</nav>
	);
};

export default NavBar;
