import React, { useEffect } from 'react';
import styled from 'styled-components'
import { Movie } from '../../providers/movie/types';

interface ModalProps {
    isOpen: boolean;
    close: () => void;
    movie: Movie | null;
}

export const Modal = styled.section<{ isOpen: boolean }>`
    display: block;
    position: fixed;
    top: 50%;
    left: 15vw;
    padding: 30px;
    transform: ${({ isOpen }) => isOpen ? 'translateY(-50%)' : 'translateY(200%)'};
    width: 70vw;
    border-radius: 10px;
    background-color: var(--secondary-bg-color);
    overflow: hidden;
    background-position: center;
    background-size: cover;
    transition: background-image .3s ease;
    z-index: 4;
    transition: .3s transform ease;
    min-height: 50%;

    @media (max-width: 991px) {
        padding: 20px;
        top: 80px;
        left: 20px;
        width: calc(100vw - 80px);
        height: calc(100vh - 130px);
        transform: ${({ isOpen }) => isOpen ? 'none' : 'translateY(200%)'};
    }
`;

export const ModalBody = styled.div`
    position: relative;
    max-height: 100%;
    overflow: scroll;
`

export const BackgroundGradient = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(0deg, black 25%, transparent 100%);
`
export const ModalClose = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    z-index: 10;

    i {
        transition: 0.2s ease;
    }

    &:hover {
        i {
            color: ${({ theme }) => theme.primary};
        }
    }
`

export const TopRow = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 20px;

    @media (max-width: 991px) {
        flex-direction: column;
    }
`

export const InfoWrapper = styled.div`

`;

export const ImageWrapper = styled.div`
    text-align: center;
`;

export const BadgeWrapper = styled.div`
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    margin-bottom: 10px;

    span {
        padding: 5px;
        background-color: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.textColor};
        border-radius: 5px;
        white-space: nowrap;
    }
`;

const DownloadLinkWrapper = styled.div`
    display: flex;
    gap: 5px;
    margin-top: 10px;
    flex-wrap: wrap;
`

const DownloadLink = styled.div`
    display: inline-flex;
    gap: 5px;
    align-items: center;
    padding: 5px;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textColor};
    border-radius: 5px;
    white-space: nowrap;
    transition: .3s ease;

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.textColor};
    }

    &:hover {
        background-color: ${({ theme }) => theme.textColor};

        a,
        i {
            color: ${({ theme }) => theme.primary};
        }
    }
`

export const RatingWrapper = styled.div`
    display: flex;
    margin: 10px 0;
    gap: 10px;
    align-items: center;
    padding-left: 5px;
`

export const Backdrop = styled.div<{ open: boolean }>`
    cursor: pointer;
    position: fixed;
    inset: 0;
    background: black;
    z-index: 2;
    transition:  ease .5s opacity;
    opacity: ${({ open }) => open ? 0.7 : 0};
    pointer-events: ${({ open }) => open ? 'all' : 'none'};
`

export const DetailModal = ({ isOpen, movie, close }: ModalProps) => {
    useEffect(() => {
        const onKeyDown = ({ key }: { key: string }) => {
            if (key === 'Escape') {
                close();
            }
        };

        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [close]);

    return (
        <Modal isOpen={isOpen} style={{
            backgroundImage: `url(${movie?.background_image.replace('yts', 'img.yts')})`
        }}>
            <BackgroundGradient />
            <ModalClose>
                <i className="gg-close-r" onClick={close}></i>
            </ModalClose>
            <ModalBody>
                    <TopRow>
                        <ImageWrapper>
                            <img src={movie?.medium_cover_image.replace('yts', 'img.yts')}  alt="cover"/>
                        </ImageWrapper>
                        <InfoWrapper>
                            <h3>{movie?.title}</h3> 
                            <h5>{movie?.year}</h5>
                            <RatingWrapper>
                                <i className="gg-heart" onClick={close}></i>
                                <p>{movie?.rating}/10</p>
                            </RatingWrapper>
                            <BadgeWrapper>
                                {movie?.genres.map((genre, index) => <span key={`${movie.id}_genre_${index}`}>{genre}</span>)}
                            </BadgeWrapper>
                            <h3>Download:</h3>
                            <DownloadLinkWrapper>
                                {movie?.torrents.map((torrent, index) => (
                                    <DownloadLink key={`${movie.id}_torrent_${index}_detail`}>
                                        <i className="gg-software-download"></i>
                                        <a href={torrent.url}>
                                            {`${torrent.type} ${torrent.quality}`}
                                        </a>
                                    </DownloadLink>
                                ))}
                                
                            </DownloadLinkWrapper>
                            {/* <h5>Cast:</h5>
                            <div class="detail_modal__cast-wrapper"></div> */}
                        </InfoWrapper>
                    </TopRow>
                    <p>{movie?.summary}</p>
            </ModalBody>
        </Modal>
    );
};
