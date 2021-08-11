import "./result.css";

export default function Result({title, year, poster, imdbID}) {
	return (
		<article className="result">
			<img className="result__poster" src={poster} alt={`Poster for the movie ${title}`} />
			<div>
				<h1 className="result__heading">{title}</h1>
				<p className="result__year">{year}</p>
			</div>
		</article>
	);
}
