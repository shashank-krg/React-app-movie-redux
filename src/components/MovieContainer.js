import React from 'react';
import Movie from './Movie'


const MovieContainer = props => {

        return(
            <div>
            <div className="movie-container">
                <div className="wrap">
                    {props.movies.map((movie) => (
                    <Movie
                        getInfo={props.getInfo}
                        key={movie.id}
                        movie={movie}
                        setPage={props.setPage}
                    />
                    ))}
                    </div>
                </div>
            </div>
        )
}

export default MovieContainer;