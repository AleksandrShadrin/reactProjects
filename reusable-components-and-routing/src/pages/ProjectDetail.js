import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import Link from "../components/Link";
import List from "../components/List";

const Project = ({ userName }) => {
	const [loading, setLoading] = useState(false);
	const [project, setProject] = useState([]);
	const { name } = useParams();
	const items = [
		{
			field: "full_name",
			value: project["full_name"],
		},

		{
			field: "html_url",
			value: (
				<Link url={project["html_url"]} title={project["html_url"]} />
			),
		},
		{
			field: "language",
			value: project["language"],
		},
		{
			field: "created_at",
			value: project["created_at"].split("T")[0],
		},
	];
	useEffect(() => {
		setLoading(true);
		if (!userName || !name) {
			setLoading(false);
			return;
		}
		(async () => {
			const data = await fetch(
				`https://api.github.com/repos/${userName}/${name}`
			);
			const result = await data.json();
			if (result) {
				setProject(result);
			}
			setLoading(false);
		})();
	}, [userName, name]);

	return (
		<Card>
			<h2 className="text-2xl font-bold text-center pb-4">
				Project: {project.name}
			</h2>
			{loading ? (
				<p className="text-2xl font-bold">Loading ...</p>
			) : (
				<div>
					<List items={items} />
				</div>
			)}
		</Card>
	);
};
export default Project;
