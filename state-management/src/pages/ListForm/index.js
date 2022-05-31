import { useNavigate, useParams } from "react-router-dom";
import { useState, useContext } from "react";
import Button from "../../components/Button";
import FormItem from "../../components/FormItem";
import NavBar from "../../components/NavBar";
import ItemsContext from "../../context/ItemsContext";

const ListForm = () => {
	const navigate = useNavigate();
	const { listId } = useParams();
	const { addItem } = useContext(ItemsContext);
	const [title, setTitle] = useState("");
	const [quantity, setQuantity] = useState(0);
	const [price, setPrice] = useState("");
	const onSubmitHandler = (e) => {
		e.preventDefault();
		if (title && quantity && price) {
			addItem({ listId, title, quantity, price });
			navigate(`/list/${listId}`);
		}
	};
	return (
		<>
			{navigate && (
				<NavBar goBack={() => navigate(-1)} title={`Add Item`} />
			)}
			<div className="max-w-2xl m-auto border-[2px] border-slate-200 p-4 mt-12 rounded-md bg-indigo-400 shadow-md shadow-indigo-500">
				<form onSubmit={onSubmitHandler}>
					<FormItem
						id="title"
						label="Title"
						placeholder="Insert title"
						value={title}
						handleOnChange={(e) => setTitle(e.target.value)}
					/>
					<FormItem
						id="quantity"
						label="Quantity"
						type="number"
						placeholder="0"
						value={quantity}
						handleOnChange={(e) => setQuantity(e.target.value)}
					/>
					<FormItem
						id="price"
						label="Price"
						type="number"
						placeholder="0.00"
						value={price}
						handleOnChange={(e) => setPrice(e.target.value)}
					/>
					<Button className="bg-purple-600 hover:bg-purple-700">
						Add Item
					</Button>
				</form>
			</div>
		</>
	);
};
export default ListForm;
