import React, { createContext, useContext, useState } from 'react';
import { Backdrop, DetailModal } from '../../components/detail-modal/DetailModal';
import { Movie } from '../movie/types';

type StateContext = {
    openDetailModal?: (movie: Movie) => void;
    closeDetailModal?: () => void;
};

export const DetailModalContext = createContext<StateContext>({});

export const DetailModalProvider = ({
    children
}: React.PropsWithChildren<{}>) => {
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [movie, setMovie] = useState<Movie | null>(null);

    const openDetailModal = (movie: Movie) => {
        document.title = `YTS React - ${movie.title}`;
        setMovie(movie);
        setIsDetailModalOpen(true);
    };

    const closeDetailModal = () => {
        document.title = 'YTS React';
        setMovie(null);
        setIsDetailModalOpen(false);
    };

    return (
        <DetailModalContext.Provider
            value={{ openDetailModal, closeDetailModal }}>
            <Backdrop onClick={closeDetailModal} open={isDetailModalOpen} />
            <DetailModal
                isOpen={isDetailModalOpen}
                close={closeDetailModal}
                movie={movie}
            />
            {children}
        </DetailModalContext.Provider>
    );
};

export const useDetailModal = () => useContext(DetailModalContext);
