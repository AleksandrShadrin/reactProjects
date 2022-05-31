import Task from "../Task";

const Lane = ({
	laneId,
	title,
	loading,
	error,
	tasks,
	onDragStart,
	onDragOver,
	onDrop,
}) => {
	return (
		<div
			className="border-[1] border-gray-400 bg-gray-300 h-screen w-full rounded-md min-w-fit"
			onDragOver={onDragOver}
			onDrop={(e) => onDrop(e, laneId)}
		>
			<h2 className="text-2xl text-center my-2 font-bold after:w-full after:bg-gray-400 after:h-1 after:content-[''] after:block after:translate-y-2 relative">
				{title}
			</h2>
			{error || loading ? (
				<span>{error || "Loading..."}</span>
			) : (
				tasks.map((entity) => (
					<Task
						key={entity.id}
						id={entity.id}
						title={entity.title}
						body={entity.body}
						onDragStart={onDragStart}
					/>
				))
			)}
		</div>
	);
};

export default Lane;
