function Character(character) {
	return (
		<div
			className="w-full m-auto border-4 my-4 
            rounded-md border-blue-500 shadow-md shadow-blue-700 
            flex flex-col items-center bg-indigo-200 gap-2 
            hover:cursor-pointer"
		>
			<div className="overflow-hidden h-64 w-full">
				<img
					className="duration-150 transition object-cover h-64 w-full hover:scale-110"
					src={character.image}
					alt={character.name}
					width="300"
				/>
			</div>
			<h3 className="text-2xl text-indigo-700 font-bold">
				{character.name}
			</h3>

			<p className="text-lg text-indigo-500 font-bold">{`Origin: ${
				character.origin && character.origin.name
			}`}</p>
		</div>
	);
}
export default Character;
