import "./App.css";

import { NavBar } from "./assets/components/layout/NavBar";

import { Home } from "./assets/components/pages/Home";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Home />
		</div>
	);
}

export default App;
