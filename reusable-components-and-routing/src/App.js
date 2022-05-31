import Header from "./components/Header";
import logo from "./logo.svg";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header logo={logo} />
				<Routes>
					<Route path="/" element={<Profile userName="SuS-web" />} />
					<Route
						path="/projects"
						element={<Projects userName="SuS-web" />}
					/>
					<Route
						path="/projects/:name"
						element={<ProjectDetail userName="SuS-web" />}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
