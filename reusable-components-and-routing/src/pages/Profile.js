import { useState, useEffect } from "react";
import Link from "../components/Link";
import List from "../components/List";
import Card from "../components/Card";
const Profile = ({ userName }) => {
	const [loading, setLoading] = useState(false);
	const [profile, setProfile] = useState({});
	const items = [
		{
			field: "html_url",
			value: <Link url={profile.html_url} title={profile.html_url} />,
		},
		{
			field: "repos_url",
			value: <Link url={profile.repos_url} title={profile.repos_url} />,
		},
		{ field: "name", value: profile.name },
		{ field: "company", value: profile.company },
		{ field: "location", value: profile.location },
		{ field: "email", value: profile.email },
		{ field: "bio", value: profile.bio },
	];
	useEffect(() => {
		async function fetchData() {
			const response = await fetch(
				`https://api.github.com/users/${userName}`
			);
			const result = await response.json();
			if (response.status === 200) {
				setProfile(result);
			}
			setLoading(false);
		}
		fetchData();
	}, [userName]);
	return (
		<Card>
			<h2 className="text-2xl text-center font-bold py-4">About me</h2>
			{loading ? (
				<span>Loading...</span>
			) : (
				<div className="flex flex-col items-center">
					<img
						className="w-36"
						src={profile.avatar_url}
						alt={profile.name}
					/>
					<List items={items} />
				</div>
			)}
		</Card>
	);
};

export default Profile;
