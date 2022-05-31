const Link = ({ url, title }) => {
	return (
		<a
			href={url}
			target="_blank"
			rel="nooper noreferrer"
			className="text-indigo-500"
		>
			{title}
		</a>
	);
};
export default Link;
