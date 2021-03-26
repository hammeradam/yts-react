// import {
//     FULFILLED_GET_MOVIES,
//     PENDING,
//     REJECTED,

// } from './reducer';
// import { Log, LogCoreData } from '../log/types';
// import { TUploadEventListAddToUploadWatchListAction } from '../upload-event-list';

// export interface LogListActionCreators {
//     getAllLogs(): void;
//     deleteSelectedLogs(
//         logs: Log[],
//         onDeleteFinished: (logs: Log[]) => void
//     ): void;
//     removeValidation(): void;
//     validateUpload(logIds: string[]): void;
//     uploadLogs(
//         uploadLogsData: UploadLogsData,
//         addToUploadWatchList: TUploadEventListAddToUploadWatchListAction
//     ): void;
//     clearLogs(): void;
// }

// export enum ValidationResult {
//     OK = 'UploadOk',
//     PARTIAL = 'PartialUploadOnly',
//     FAIL = 'ValidationFailed'
// }

// export enum ErrorDetails {
//     EVENT_NUMBER = 'UniqueEventNumberExceeded',
//     EVENT_NAME_LENGTH = 'EventNameLengthExceeded',
//     SCREENSHOT_SIZE = 'ScreenshotSizeExceeded',
//     NO_LOGS = 'NoLogsFound'
// }

// export interface ValidationResponse {
//     validationResult: ValidationResult;
//     errorDetails: ErrorDetails;
// }

// export interface LogListState {
//     loading: boolean;
//     error: AxiosError;
//     logs: Log[];
//     uploadValidation: ValidationResponse;
//     logsCount: number;
//     isDeleting: boolean;
// }

// export interface LogListFilteredState {
//     items: LogCoreData[];
//     countTotal: number;
//     countFiltered: number;
// }x

// export type LogListActionTypes =
//     | { type: typeof PENDING }
//     | { type: typeof REJECTED; error: AxiosError }
//     | {
//           type: typeof FULFILLED_GET_LOGS;
//           payload: { logs: LogCoreData[]; count: number };
//       }
//     | { type: typeof FULFILLED_UPLOAD_LOGS }
//     | { type: typeof REMOVE_UPLOAD_VALIDATION }
//     | {
//           type: typeof FULFILLED_UPLOAD_VALIDATION;
//           payload: { validationResponse: ValidationResponse };
//       }
//     | { type: typeof REMOVE_STARTED }
//     | { type: typeof REMOVE_FINISHED }
//     | { type: typeof CLEAR_LOGS };

// export interface UploadLogsData {
//     logsList: string[];
//     projectName: string;
//     projectId: number;
// }

export interface Torrent {
    quality: string;
    type: string;
    url: string;
    hash: string;
}

export interface Movie {
    id: number;
    medium_cover_image: string;
    background_image: string;
    title: string;
    imdb_code: string;
    year: number;
    rating: string;
    genres: string[];
    summary: string;
    torrents: Torrent[];
}

export {};