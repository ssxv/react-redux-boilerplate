'use strict';
declare var require: any;

import { createStore, combineReducers, Store, applyMiddleware, Middleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import api from '../middlewares/api';
const batch = require('redux-batched-actions');

import { LoaderReducer } from '../components/app/reducers/loaderReducer';
import { WidthReducer, TiltReducer } from '../components/app/reducers/viewportReducer';
import { ReactRestReducer } from './reactRestReducer';
import { EntitySaveServiceReducer } from './entitySaveServiceReducer';
import { EntitySaveService } from '../common/entity-save-service';
import { ReactRest } from '../common/react-rest';


interface loaderInterface {
    loading: boolean,
    message: string
};

export interface stateInterface {
    loader: loaderInterface,
    width: number,
    tilt: boolean,
    ReactRest: ReactRest,
    EntitySaveService: EntitySaveService
};

const reduxRouterMiddleware: Middleware = routerMiddleware(browserHistory);

const appReducer = combineReducers<stateInterface>({
    loader: LoaderReducer,
    width: WidthReducer,
    tilt: TiltReducer,
    ReactRest: ReactRestReducer,
    EntitySaveService: EntitySaveServiceReducer
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};


const initialState = <stateInterface>{
    loader: {
        loading: false,
        message: null
    },
    width: 0,
    tilt: null,
    ReactRest: new ReactRest(),
    EntitySaveService: new EntitySaveService()
};


const store: Store<any> = applyMiddleware(reduxRouterMiddleware, thunk, api)(createStore)(batch.enableBatching(rootReducer), initialState);
export default store;
