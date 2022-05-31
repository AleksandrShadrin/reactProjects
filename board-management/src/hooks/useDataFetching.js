import { useEffect, useState } from "react";

const useDataFetching = (url) => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);
	const [error, setError] = useState("");
	useEffect(() => {
		setLoading(true);
		(async () => {
			try {
				const tasks = await fetch(url);
				const result = await tasks.json();
				if (result) {
					setData(result);
					setLoading(false);
				}
			} catch (err) {
				setLoading(false);
				setError(err.message);
			}
		})();
	}, [url]);
	return {
		error,
		loading,
		data,
	};
};

export default useDataFetching;
