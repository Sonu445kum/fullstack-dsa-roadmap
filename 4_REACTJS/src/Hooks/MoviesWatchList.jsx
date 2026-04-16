// Movie Watchlist
// Add movie
// Mark watched/unwatched
// Edit name

import { useState } from "react";

// Delete
const MoviesWatchList = ()=>{
    const [movieData ,setMovieData] = useState({
        movieTitle:"",
        movieDescription:""
    });
    const [movieList ,setMovieList] = useState([]);
    const [editId , setEditId] = useState(null);

    // handleOnChange
    const handleMovieOnChange = (e)=>{
        const {name , value} = e.target;
        setMovieData((prev)=>({
            ...prev,
            [name] :value
        }))
    };

    // MovieAddUpdate
    const movieAddUpdated = (e)=>{
        e.preventDefault();
        // check the input filed is empty
        if(!movieData.movieTitle.trim() || !movieData.movieDescription.trim()) return;
        // check editId is not equal null
        if(editId !== null){
            setMovieList((prev)=> prev.map((el)=>el.id === editId ? {...el , ...movieData} : el));
            setEditId(null);
            setMovieData({
                movieTitle:"",
                movieDescription:""
            })
        }else{
            // if the movie id is null
            const newMovie = {
                id:Date.now(),
                isCompleted : false,
                ...movieData,
            }
            setMovieList((prev)=>[...prev ,newMovie]);
            setMovieData({
                movieTitle:"",
                movieDescription:""
            })
        }
    };

    // DeleteMovie
    const deleteMovie = (id)=>{
        setMovieList((prev)=>prev.filter((el)=> el.id !== id));
    }

    // editMovie
    const editMovie = (id)=>{
        const selectedMovie = movieList.find((el)=>el.id === id);
        setMovieData({
            movieTitle:selectedMovie.movieTitle,
            movieDescription:selectedMovie.movieDescription,
        });
        setEditId(id);
    }

    // toggleMovies
    const toggleMovieCompleted = (id)=>{
        setMovieList((prev)=> prev.map((el)=>el.id === id ? {...el , isCompleted:!el.isCompleted} : el));
    }
    return (
        <div style={{margin:"30px"}}>
            <form onSubmit={movieAddUpdated}>
                <div>
                    <label>MoviesTitle:</label>
                    <input type="text"  name="movieTitle" value={movieData.movieTitle} onChange={handleMovieOnChange} placeholder="Enter Movies Name" />
                </div>
                <div>
                    <label>MoviesDescription:</label>
                    <input type="text" name="movieDescription" value={movieData.movieDescription} onChange={handleMovieOnChange} placeholder="Enter Movies Name" />
                </div>
                <button type="submit">{editId !== null ? "UpdatedMovie" : "AddMovie"}</button>
            </form>

            {/* display Movie Details */}
            <ul>
                {
                    movieList.map((el)=>(
                        <li key={el.id}>
                            <span style={{textDecorationLine : el.isCompleted ? "line-through" : "none", margin:"2px"}}>{el.movieTitle}</span>
                            <p>MovieTitle: {el.movieTitle}</p>
                            <p>MovieDescritption: {el.movieDescription}</p>
                            <button onClick={()=>toggleMovieCompleted(el.id)}>{el.isCompleted ? "Watched" :"Not Watched"}</button>
                            <button onClick={()=>editMovie(el.id)}>Edit</button>
                            <button onClick={()=>deleteMovie(el.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default MoviesWatchList;