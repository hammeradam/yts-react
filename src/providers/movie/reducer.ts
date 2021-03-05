// import { Reducer } from 'react';
// import { LogListActionTypes, LogListState } from './types';

// export const PENDING = 'PENDING';
// export const REJECTED = 'REJECTED';
// export const FULFILLED_GET_MOVIES = 'FULFILLED_GET_LOGS';


// export const initialState: LogListState = {
//     loading: false,
//     error: null,
//     movies: null,
//     uploadValidation: null,
//     logsCount: -1,
//     isDeleting: false
// };

// const reducer: Reducer<LogListState, LogListActionTypes> = (
//     state: LogListState = initialState,
//     action: LogListActionTypes
// ): LogListState => {
//     switch (action.type) {
//         case PENDING:
//             return { ...state, loading: true };

//         case REJECTED:
//             return { ...state, loading: false, error: action.error };

//         case FULFILLED_GET_LOGS:
//             return {
//                 ...state,
//                 loading: false,
//                 error: null,
//                 logs: action.payload.logs as Log[],
//                 logsCount: action.payload.count
//             };

//         default:
//             throw new Error('Unsupported action type');
//     }
// };

// export default reducer;

export {};
