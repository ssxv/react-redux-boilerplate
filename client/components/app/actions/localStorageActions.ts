export const LOAD_USER_FROM_STORAGE = 'LOAD_USER_FROM_STORAGE';

export interface localStorageActionInterface {
    loadUserFromStorageAction?: Function;
}

function loadUserFromStorage(params) {
    return {
        type: LOAD_USER_FROM_STORAGE,
        data: params
    }
}

export function loadUserFromStorageAction(params): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(loadUserFromStorage(params));
    }
}
