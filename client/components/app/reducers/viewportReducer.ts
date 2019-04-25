import {
    SET_WIDTH, SET_TILT
} from '../actions/viewportAction';


export function WidthReducer(state = <any>{}, action: any): any {
    switch (action.type) {
        case SET_WIDTH:
            return action.data;
    }
    return state;
}

export function TiltReducer(state = <any>{}, action: any): any {
    switch (action.type) {
        case SET_TILT:
            return action.data;
    }
    return state;
}