import { useState, useEffect } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import List from "../components/List";

const Projects = ({ userName }) => {
	const [loading, setLoading] = useState(true);
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		(async () => {
			const data = await fetch(
				`https://api.github.com/users/${userName}/repos`
			);
			const result = await data.json();
			if (result) {
				setProjects(result);
				setLoading(false);
			}
		})();
	}, [userName]);
	return (
		<Card>
			<h2 className="text-2xl text-center font-bold py-4">Projects</h2>
			{loading ? (
				<p className="text-2xl font-bold">Loading ...</p>
			) : (
				<List
					items={projects.map((project) => ({
						field: project.name,
						value: (
							<Link
								className="text-indigo-500"
								to={`${project.html_url.split("/").at(-1)}`}
							>
								{project.html_url.split("/").at(-1)}
							</Link>
						),
					}))}
				/>
			)}
		</Card>
	);
};

export default Projects;
