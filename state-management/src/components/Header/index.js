import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="text-2xl font-bold px-6 py-2 bg-purple-700 text-white flex flex-col items-center min-w-[24rem]">
			<Link to="/">Personal Shopping List</Link>
		</div>
	);
};
export default Header;
