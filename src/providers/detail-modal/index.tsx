import React, { createContext, useContext, useState } from 'react';
import { DetailModal } from '../../components/detail-modal/DetailModal';
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
        setMovie(movie);
        setIsDetailModalOpen(true);
    };

    const closeDetailModal = () => {
        setMovie(null);
        setIsDetailModalOpen(false);
    };

    return (
        <DetailModalContext.Provider
            value={{ openDetailModal, closeDetailModal }}>
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
