import { useEffect, useRef, useState } from 'react';
import { Movie } from '../../providers/movie/types';
import { Card } from '../card/Card';
import { CardsWrapper } from './Styled';

async function getMovieData(
    searchTerm = '',
    limit = 8,
    page = 1,
    order = 'download_count'
) {
    const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?limit=${limit}&page=${page}&query_term=${encodeURI(
            searchTerm
        )}&sort_by=${order}`
    );
    return await response.json();
}

export const CardList = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState(2);
    const loader = useRef<HTMLDivElement>(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        getMovieData('', 16, 1).then((movies) => setMovies(movies.data.movies));
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            root: null,
            rootMargin: '100px',
            threshold: 1.0
        });

        if (loader.current) {
            observer.observe(loader.current);
        }
    }, []);

    useEffect(() => {
        // if (searchTerm) {
            getMovieData(searchTerm, 16, 1).then((movies) => {
                if (movies.data.movies) {
                    setMovies(movies.data.movies)
                    setPage(2);
                }
            });
        // } else
    }, [searchTerm]);

    useEffect(() => {
        if (page !== 2) {
            getMovieData(searchTerm, 8, page).then((movies) =>
                setMovies((prevstate) => [...prevstate, ...movies.data.movies])
            );
        }
    }, [page, searchTerm]);

    const handleObserver = ([target]: IntersectionObserverEntry[]) => {
        if (target.isIntersecting) setPage((page) => page + 1);
    };
    return (
        <>
            <input
                type="text"
                value={searchTerm}
                onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                    event.persist();
                    setSearchTerm(event.target.value);
                }}
            />
            <CardsWrapper>
                {movies.map((movie) => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </CardsWrapper>
            <div ref={loader}></div>
        </>
    );
};
