import ReactDOM from "react-dom/client";
import List from "./components/List";
function App() {
	return (
		<div className="w-full h-full bg-slate-400">
			<h1 className="p-4 text-2xl text-left font-bold text-slate-400 bg-indigo-600">
				Rick and Morty
			</h1>
			<List />
		</div>
	);
}
const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App />);
