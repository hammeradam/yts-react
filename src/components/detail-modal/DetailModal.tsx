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
    z-index: 1;
    transition: .3s transform ease;
    min-height: 50%;

    @media (max-width: 991px) {
        padding: 10px;
        top: 20px;
        left: 20px;
        width: calc(100vw - 40px);
        height: calc(100vh - 40px);
        transform: none;
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
`

export const InfoWrapper = styled.div`

`;

export const ImageWrapper = styled.div`

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

export const DetailModal = ({ isOpen, movie, close }: ModalProps) => {
    return (

        <Modal isOpen={isOpen} style={{
            backgroundImage: `url(${movie?.background_image})`
        }}>
            <BackgroundGradient />
            <ModalClose>
                <i className="gg-close-r" onClick={close}></i>
            </ModalClose>
            <ModalBody>
                    <TopRow>
                        <ImageWrapper>
                            <img src={movie?.medium_cover_image}  alt="cover"/>
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
