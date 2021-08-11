import searchContext from "../store/searchContext";
import { useContext } from "react";
import axios from "axios";

export default function Searchbar() {
	var setResults = useContext(searchContext)[1];

	function handleSubmit(e) {
		e.preventDefault();
		axios.get(`https://movie-database-imdb-alternative.p.rapidapi.com`, {
			params: {
				s: e.target.search.value,
				page: 1,
				r: "json"
			},
			headers: {
					"x-rapidapi-key": "cbf0eada93mshda4348a7166d51bp13e11bjsna5929dc3ff1a",
					"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
				}
			})
				.then(response => setResults(response.data.Search));
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="search" name="search" />
			<button type="submit">Search</button>
		</form>
	)
}
