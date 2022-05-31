import Link from "next/link";
const Pagination = ({ currentPage, hasMore }) => {
	return (
		<div className="flex justify-center my-4">
			<Link href={`?page=${parseInt(currentPage) - 1}`}>
				<a
					className={`text-lg text-cyan-100 border-2 
                         rounded-full  px-4 duration-200 
                         ${
								parseInt(currentPage) <= 1
									? "bg-gray-300 cursor-not-allowed"
									: "bg-cyan-500 hover:bg-cyan-600 border-cyan-300 transition-all"
							}`}
					onClick={(e) => {
						if (parseInt(currentPage) <= 1) e.preventDefault();
					}}
				>
					Previous
				</a>
			</Link>

			<Link href={`?page=${parseInt(currentPage) + 1}`}>
				<a
					className={`text-lg text-cyan-100 border-2 
                         rounded-full  px-4 duration-200 
                         ${
								!hasMore
									? "bg-gray-300 cursor-not-allowed"
									: "bg-cyan-500 hover:bg-cyan-600 border-cyan-300 transition-all"
							}`}
					onClick={(e) => {
						if (!hasMore) e.preventDefault();
					}}
				>
					Next
				</a>
			</Link>
		</div>
	);
};

export default Pagination;
