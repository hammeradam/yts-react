import React, { createContext, useContext, useEffect, useState } from 'react';
import { IDBPDatabase, openDB } from 'idb';
import { Movie } from '../movie/types';

type StateContext = {
    addToBookmarks?: (movie: Movie) => Promise<void>;
    removeFromBookmarks?: (movie: Movie) => Promise<void>;
    checkIsBookmarked?: (movie: Movie) => Promise<boolean>;
};

export const DBContext = createContext<StateContext>({});

export const DBProvider = ({ children }: React.PropsWithChildren<{}>) => {
    const [db, setDb] = useState<IDBPDatabase>();

    useEffect(() => {
        openDB('movies', 1, {
            upgrade(db) {
                const store = db.createObjectStore('movies', {
                    keyPath: 'id'
                });

                store.createIndex('title', 'title');
            }
        }).then((newDb) => setDb(newDb));
    }, []);

    const checkIsBookmarked = async (movie: Movie) =>
        !!(await db?.get('movies', movie.id));

    const addToBookmarks = async (movie: Movie) => {
        await db?.add('movies', movie);
    };

    const removeFromBookmarks = async (movie: Movie) => {
        await db?.delete('movies', movie.id);
    };

    return (
        <DBContext.Provider
            value={{ checkIsBookmarked, addToBookmarks, removeFromBookmarks }}>
            {children}
        </DBContext.Provider>
    );
};

export const useDB = () => useContext(DBContext);
