import Head from "next/head";

const Header = () => {
	return (
		<header className="h-full bg-teal-600 flex flex-col items-center justify-center">
			<Head>
				<title>Community Feed</title>
				<meta
					name="description"
					content="This is a Community Feed project build with React"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1 className="text-[calc(14px+2vmin)] text-cyan-100 h-16 font-bold">
				Community Feed
			</h1>
		</header>
	);
};

export default Header;
