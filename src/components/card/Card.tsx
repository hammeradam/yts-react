import { useEffect, useState } from 'react';
import {
    ActionDivider,
    CardActionsWrapper,
    CardDetails,
    CardLink,
    CardLinkWrapper,
    CardTitle,
    CardWrapper,
    ImageWrapper,
    LinkWrapperClose
} from './Styled';
import { Movie, Torrent } from '../../providers/movie/types';
import { useDetailModal } from '../../providers/detail-modal';
import { useDB } from '../../providers/db';

interface CardProps {
    movie: Movie;
}

export const Card = ({ movie }: CardProps) => {
    const [isDownloadOpen, setIsDownloadOpen] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const { openDetailModal } = useDetailModal();
    const { addToBookmarks, removeFromBookmarks, checkIsBookmarked } = useDB();

    useEffect(() => {
        checkIsBookmarked?.(movie).then((found: boolean) => setIsBookmarked(found));
    }, [movie, checkIsBookmarked])

    return (
        <CardWrapper>
            <ImageWrapper>
                <img src={movie.medium_cover_image} alt="" />
            </ImageWrapper>
            <CardDetails>
                <CardTitle>{movie.title}</CardTitle>
                <CardActionsWrapper>
                    <i className="gg-info" onClick={() => {
                        openDetailModal?.(movie);
                    }}></i>
                    <ActionDivider />
                    <i
                        className="gg-software-download"
                        onClick={() => setIsDownloadOpen(true)}></i>
                    <ActionDivider />
                    <i
                        className={`gg-bookmark${
                            isBookmarked ? ' active' : ''
                        }`}
                        onClick={async () => {
                            if (isBookmarked) {
                                await removeFromBookmarks?.(movie);
                            } else {
                                await addToBookmarks?.(movie)
                            }

                            setIsBookmarked((prev) => !prev);
                        }}></i>
                </CardActionsWrapper>
            </CardDetails>
            <CardLinkWrapper isOpen={isDownloadOpen}>
                <LinkWrapperClose>
                    <i
                        className="gg-close-r"
                        onClick={() => setIsDownloadOpen(false)}></i>
                </LinkWrapperClose>
                {movie.torrents.map((torrent: Torrent, index: number) => (
                    <CardLink key={`${movie.id}_torrent_${index}`}>
                        <i className="gg-software-download"></i>
                        <a href={torrent.url}>
                            {`${torrent.type} ${torrent.quality}`}
                        </a>
                    </CardLink>
                ))}
            </CardLinkWrapper>
        </CardWrapper>
    );
};
