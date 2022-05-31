import { NavLink } from "react-router-dom";

const Header = ({ title }) => {
	return (
		<div className="flex flex-col  bg-blue-600 text-center py-2 mb-4">
			<h1 className="text-[2rem] font-bold text-white">{title}</h1>
			<nav className="flex justify-center gap-4">
				<NavLink
					className={({ isActive }) =>
						`text-xl font-bold text-white hover:text-green-400 transition-all ${
							isActive ? "underline text-green-400" : ""
						}`
					}
					to="/"
				>
					Home Page
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						`text-xl font-bold text-white hover:hover:text-green-400 transition-all ${
							isActive ? "underline text-green-400" : ""
						}`
					}
					to="/backlog"
				>
					Backlog
				</NavLink>
			</nav>
		</div>
	);
};

export default Header;
