import React, {useState} from 'react';
import Movie from './Movie';


const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: 'Harry Potter',
      price: '$10',
      id: 2314
    },
    {
      name: 'Hot Tub Machine',
      price: '$8',
      id: 9876
    },
    {
      name: 'Lord of Rings',
      price: '$11',
      id: 4537
    }
  ]);
  return(
    <div>
      {movies.map(movie => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </div>
  );

}

export default MovieList;
