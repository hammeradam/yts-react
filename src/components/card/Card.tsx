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

const trackers: string[] = [
    'udp://open.demonii.com:1337/announce',
    'udp://tracker.openbittorrent.com:80',
    'udp://tracker.coppersurfer.tk:6969',
    'udp://glotorrents.pw:6969/announce',
    'udp://tracker.opentrackr.org:1337/announce',
    'udp://torrent.gresille.org:80/announce',
    'udp://p4p.arenabg.com:1337',
    'udp://tracker.leechers-paradise.org:6969'
];

const getMagnetLink = (movie: Movie, torrent: Torrent) => {
    return `magnet:?xt=urn:btih:${torrent.hash}&dn=${encodeURIComponent(
        movie.title
    )}&tr=${trackers.join('&')}`;
};

export const Card = ({ movie }: CardProps) => {
    const [isDownloadOpen, setIsDownloadOpen] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const { openDetailModal } = useDetailModal();
    const { addToBookmarks, removeFromBookmarks, checkIsBookmarked } = useDB();

    useEffect(() => {
        checkIsBookmarked?.(movie).then((found: boolean) =>
            setIsBookmarked(found)
        );
    }, [movie, checkIsBookmarked]);

    return (
        <CardWrapper>
            <ImageWrapper>
                <img src={movie.medium_cover_image} alt="" />
            </ImageWrapper>
            <CardDetails>
                <CardTitle>{movie.title}</CardTitle>
                <CardActionsWrapper>
                    <i
                        className="gg-info"
                        onClick={() => {
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
                                await addToBookmarks?.(movie);
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
                        <a href={torrent.url}>
                            {`${torrent.type} ${torrent.quality}`}
                            <i className="gg-software-download"></i>
                        </a>
                        <a href={getMagnetLink(movie, torrent)}>
                            <i className="gg-magnet"></i>
                        </a>
                    </CardLink>
                ))}
            </CardLinkWrapper>
        </CardWrapper>
    );
};
