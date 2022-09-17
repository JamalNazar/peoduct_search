import React from "react";

const MovieCard = ({movie}) =>{
    return(
        <div className="movie">
        <div>
            <p>{movie.productId}</p>
        </div>
        <div>
            <img src={`https://cdn.esyms.com/${movie.img[0].src}`} alt={movie.name.en}/>
        </div>
        <div>
            <span>
                {movie.Type}
            </span>
            <h3>
                {movie.name.en}
            </h3>
        </div>
    </div>
    )
}

export default MovieCard;