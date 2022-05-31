import { Routes, Route } from "react-router-dom";
import Backlog from "./pages/Backlog";
import Board from "./pages/Board";
function App() {
	return (
		<Routes>
			<Route path="/" element={<Board />} />
			<Route path="/backlog" element={<Backlog />} />
		</Routes>
	);
}

export default App;
