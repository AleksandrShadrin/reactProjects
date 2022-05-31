import { createContext, useCallback, useReducer } from "react";

export const ListsContext = createContext();
const initialState = {
	lists: [],
	list: {},
	loading: true,
	error: "",
};
const reducer = (state, action) => {
	switch (action.type) {
		case "GET_LISTS_SUCCESS":
			return {
				...state,
				lists: action.payload,
				loading: false,
			};
		case "GET_LISTS_ERROR":
			return {
				...state,
				lists: [],
				loading: false,
				error: action.payload,
			};
		case "GET_LIST_SUCCESS":
			return {
				...state,
				list: action.payload,
				loading: false,
			};
		case "GET_LIST_ERROR":
			return {
				...state,
				list: {},
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
export const ListsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const fetchLists = useCallback(async () => {
		try {
			const data = await fetch(
				`https://state-management-397c3-default-rtdb.europe-west1.firebasedatabase.app/lists.json`
			);
			let result = await data.json();
			if (result) {
				result = result.filter((item) => !!item);
				dispatch({ type: "GET_LISTS_SUCCESS", payload: result });
			}
		} catch (e) {
			dispatch({ type: "GET_LISTS_ERROR", payload: e.message });
		}
	}, []);
	const fetchList = useCallback(async (listId) => {
		try {
			const data = await fetch(
				`https://state-management-397c3-default-rtdb.europe-west1.firebasedatabase.app/lists/${listId}.json`
			);
			const result = await data.json();
			if (result) {
				dispatch({ type: "GET_LIST_SUCCESS", payload: result });
			}
		} catch (e) {
			dispatch({ type: "GET_LIST_ERROR", payload: e.message });
		}
	}, []);

	return (
		<ListsContext.Provider
			value={{
				list: state.list,
				lists: state.lists,
				loading: state.loading,
				error: state.error,
				fetchLists,
				fetchList,
			}}
		>
			{children}
		</ListsContext.Provider>
	);
};
