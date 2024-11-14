import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../store/actions';

function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };    

    const fetchMoviesHandler = (e) => {
        e.preventDefault();
        dispatch(fetchMovies(searchTerm));
    }

    return (
        <form className="d-flex" role="search">
            <input className="form-control me-1" type="search" onChange={handleSearchChange} value={searchTerm} placeholder="Search" aria-label="Search"/>
            <button className="btn btn-dark" onClick={fetchMoviesHandler}>Search</button>
        </form>
    )
}

export default Search;
