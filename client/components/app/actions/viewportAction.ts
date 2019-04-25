export const SET_WIDTH = 'SET_WIDTH';
export const SET_TILT = 'SET_TILT';

export interface viewportActionInterface {
    setWidthAction?: Function;
    setTiltAction?: Function;
}

function setWidth(width) {
    return {
        type: SET_WIDTH,
        data: width
    }
}

function setTilt(tilt) {
    return {
        type: SET_TILT,
        data: tilt
    }
}

export function setWidthAction(width): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(setWidth(width));
    }
}

export function setTiltAction(tilt): Function {
    return function (dispatch: any, getState: Function) {
        return dispatch(setTilt(tilt));
    }
}
