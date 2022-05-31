const { default: useSWR } = require("swr");

const useFetchData = ({ url, requestObject }) => {
	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const { data, error } = useSWR([url, requestObject], fetcher);
	const loading = !data && !error;

	return {
		data,
		error,
		loading,
	};
};

export default useFetchData;
