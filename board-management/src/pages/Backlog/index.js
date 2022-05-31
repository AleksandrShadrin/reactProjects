import Task from "../../components/Task";
import useDataFetching from "../../hooks/useDataFetching";

const Backlog = () => {
	const {
		loading,
		error,
		data: tasks,
	} = useDataFetching(
		"https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks"
	);

	return (
		<div className="flex flex-col justify-center max-w-2xl m-auto mt-12 items-center rounded-md bg-gray-300">
			<h2 className="text-2xl font-bold text-center mt-4">Backlog</h2>
			<div>
				{loading || error ? (
					<span>{error || loading}</span>
				) : (
					tasks.map((task) => (
						<Task
							key={task.id}
							title={task.title}
							body={task.body}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default Backlog;
