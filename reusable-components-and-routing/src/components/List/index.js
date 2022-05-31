const List = ({ items }) => {
	return (
		<ul>
			{items.map(({ field, value }) => (
				<li key={field} className="flex justify-center gap-2">
					<span className="font-bold">{field}:</span>
					{(value && value) || "None"}
				</li>
			))}
		</ul>
	);
};

export default List;
