import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from './store/actions';
import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';

function App() {
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies("man"));
    }, []);

    return (
        <>
            <Header />
            <div className="container">
                <h4 className="my-4 pt-3">Show your favorite movies</h4>

                <div className="row">
                    {movies && movies.map((movie, index) => (
                      <Movie key={index} title={movie.Title} image={movie.Poster} />
                    ))}
                    {!movies && <p>No movies found</p>}
                </div>
            </div>
        </>
    )
}

export default App;
