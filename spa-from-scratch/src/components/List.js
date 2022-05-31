import Character from "./Character";
import { useState, useEffect } from "react";

const List = () => {
	const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch("https://rickandmortyapi.com/api/character")
			.then((response) => response.json())
			.then(({ results }) => {
				setCharacters(results);
			})
			.catch((err) => {
				console.log(err.message);
				setLoading(false);
			});
		setLoading(false);
	}, [characters.length]);
	return (
		<div className="">
			<h2 className="px-4 text-left text-xl font-bold text-slate-600">
				Characters
			</h2>
			<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4">
				{characters &&
					characters.map((character) => (
						<Character key={character.id} {...character} />
					))}
				{loading && <p>loading...</p>}
			</div>
		</div>
	);
};
export default List;
