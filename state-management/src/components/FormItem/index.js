const FormItem = ({
	id,
	label,
	type = "text",
	placeholder = "",
	value,
	handleOnChange,
}) => {
	return (
		<div className="flex flex-col mb-2 text-white">
			<label className="font-bold text-lg pt-2" htmlFor={id}>
				{label}
			</label>
			<input
				className="rounded-sm border-[1px] border-gray-300 text-lg text-slate-700 px-2"
				type={type}
				name={id}
				id={id}
				placeholder={placeholder}
				value={value}
				onChange={handleOnChange}
			/>
		</div>
	);
};

export default FormItem;
