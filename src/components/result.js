import "./result.css";
import {  Card, CardContent, CardMedia } from "@material-ui/core";
import { navigate } from "@reach/router";

export default function Result({title, year, poster, imdbID}) {
	return (
		<Card className="resultCard" onClick={() => navigate(`/movie/${imdbID}`)}>
			<CardContent>
				<h1 className="result__heading">{title}</h1>
				<p className="result__year">{year}</p>
			</CardContent>
			<CardMedia>
				<img className="result__poster" src={poster} alt={`Poster for the movie ${title}`} />
			</CardMedia>
		</Card>
	);
}
