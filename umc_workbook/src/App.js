import Movie from "./Components/Movie";
import { movies } from "./movieDummny";

function App() {
  return (
    <div>
      <div className="app-container">
        {movies.results.map((item) => {
          return (
            <div>
              <Movie
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
                detail={item.overview}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
