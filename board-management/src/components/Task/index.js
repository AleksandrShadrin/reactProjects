const Task = ({ id, title, body, onDragStart, onDrop }) => {
	return (
		<div
			className="bg-gray-400 m-4 rounded-md p-2"
			draggable
			onDragStart={(e) => onDragStart(e, id)}
		>
			<h3 className="text-lg font-bold my-2">{title}</h3>
			<p className="text-lg">{body}</p>
		</div>
	);
};
export default Task;
