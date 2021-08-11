import Searchbar from "../components/searchbar";
import searchContext from "../store/searchContext";
import { useContext } from "react";
import Result from "../components/result";

export default function Index() {
	var [results] = useContext(searchContext);

	return (
		<>
			<Searchbar />
			{results.map(result => <Result key={result.imdbID} imdbID={result.imdbID} title={result.Title} year={result.Year} poster={result.Poster} />)}
		</>
	)
}
