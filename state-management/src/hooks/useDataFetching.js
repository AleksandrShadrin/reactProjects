import useSWR from "swr";

const useDataFetching = ({ url, requestObject }) => {
	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const { error, data } = useSWR([url, requestObject], fetcher);
	const loading = !error && !data;
	return {
		error,
		data,
		loading,
	};
};

export default useDataFetching;
