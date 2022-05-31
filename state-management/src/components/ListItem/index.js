const ListItem = ({ data: { title, quantity, price } }) => {
	return (
		<div className="flex items-center p-4 border-2 border-gray-300 mb-4 min-w-[24rem] rounded-md bg-indigo-400 text-white  shadow-md shadow-indigo-500">
			<h3 className="text-lg font-bold basis-2/3">{title}</h3>
			<span className="text-md font-bold text-right basis-1/6">{`Quantity: ${quantity}`}</span>
			<span className="text-md font-bold text-right basis-1/6">{`$ ${price}`}</span>
		</div>
	);
};

export default ListItem;
