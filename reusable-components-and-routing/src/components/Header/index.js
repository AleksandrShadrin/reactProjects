import Link from "../Link";
import { Link as RouterLink } from "react-router-dom";
const Header = ({ logo }) => {
	return (
		<header className="min-h-full flex flex-col font-bold items-center justify-between bg-slate-800 text-indigo-400">
			<img
				src={logo}
				className="animate-[spin_8s_linear_infinite] h-16  pointer-events-none"
				alt="logo"
			/>
			<h1 className="text-[2rem] pt-4 pb-4">My Portfolio</h1>
			<nav className="mb-4 flex gap-4 justify-around text-indigo-500 underline-offset-2 underline text-2xl ">
				<RouterLink to="/" className="textl-lg hover:text-indigo-600">
					About me
				</RouterLink>
				<RouterLink
					to="/projects"
					className="textl-lg hover:text-indigo-600"
				>
					Projects
				</RouterLink>
			</nav>
		</header>
	);
};
export default Header;
