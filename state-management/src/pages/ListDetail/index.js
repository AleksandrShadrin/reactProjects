import { useEffect, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ListItem from "../../components/ListItem";
import NavBar from "../../components/NavBar";
import ItemsContext from "../../context/ItemsContext";
import { ListsContext } from "../../context/ListsContext";

const ListDetail = () => {
	const navigate = useNavigate();
	const { listId } = useParams();
	const { loading, error, items, fetchItems } = useContext(ItemsContext);
	const { list, fetchList } = useContext(ListsContext);
	useEffect(() => {
		listId && fetchItems(listId);
	}, [fetchItems, listId]);

	useEffect(() => {
		listId && fetchList(listId);
	}, [fetchList, listId]);

	return (
		<>
			{navigate && (
				<NavBar
					goBack={() => navigate(-1)}
					openForm={() => navigate(`/list/${listId}/new`)}
					title={list && list.title}
				/>
			)}
			<div className="mt-12 flex justify-between flex-col max-w-2xl m-auto min-w-fit">
				{loading || error ? (
					<span>{error || "Loading..."}</span>
				) : (
					Object.keys(items).map((key) => (
						<ListItem key={key} data={items[key]} />
					))
				)}
			</div>
		</>
	);
};

export default ListDetail;
