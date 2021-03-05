import { useEffect, useState } from 'react';
import { Movie } from '../../providers/movie/types';
import { Card } from '../card/Card';
import { openDB } from 'idb';
import { CardsWrapper } from '../card-list/Styled';

const getFavorites = async () => {
    const db = await openDB('movies', 1, {
        upgrade(db) {
            const store = db.createObjectStore('movies', {
              keyPath: 'id',
            });

            store.createIndex('title', 'title');
          },
    });

    const favorites = await db.getAll('movies');

    return favorites;
}

export const Favorites = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        getFavorites().then((movies) => setMovies(movies));
    }, []);

    return (
        <CardsWrapper>
            {movies.map((movie) => (
                <Card
                    key={movie.id}
                    movie={movie}
                />
            ))}
        </CardsWrapper>
    );
};
