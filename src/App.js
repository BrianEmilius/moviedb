import Index from "./views/index";
import SearchContext from "./store/searchContext";
import { useState } from "react";
import "./App.css"

function App() {
	var searchState = useState([]);

	return (
		<SearchContext.Provider value={searchState}>
			<div className="App">
				<h1>The MovieDB</h1>
				<Index />
			</div>
		</SearchContext.Provider>
	);
}
export default App;
