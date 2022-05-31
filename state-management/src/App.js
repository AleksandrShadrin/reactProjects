import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AppContext from "./context/AppContext";
import { Suspense, lazy } from "react";

const Lists = lazy(() =>
	import(/* webpackChunkName: "Lists" */ "./pages/Lists")
);
const ListDetail = lazy(() =>
	import(/* webpackChunkName: "ListDetail" */ "./pages/ListDetail")
);
const ListForm = lazy(() =>
	import(/* webpackChunkName: "ListForm" */ "./pages/ListForm")
);

function App() {
	return (
		<div className="App">
			<Header />
			<Suspense>
				<AppContext fallback={<div>Loading...</div>}>
					<Routes>
						<Route path="/" element={<Lists />} />
						<Route path="/list/:listId" element={<ListDetail />} />
						<Route
							path="/list/:listId/new"
							element={<ListForm />}
						/>
					</Routes>
				</AppContext>
			</Suspense>
		</div>
	);
}

export default App;
