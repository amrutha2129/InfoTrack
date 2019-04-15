import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './data/reducers';
//import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    //composeWithDevTools(
       
    //    applyMiddleware(thunk)
    //)
    compose(
        applyMiddleware(...middleware)
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;


//import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
//import thunk from 'redux-thunk';
//import { routerReducer, routerMiddleware } from 'react-router-redux';
//import * as SearchReducer from './data/reducers/SearchReducer';
////import * as WeatherForecasts from './WeatherForecasts';

//export default function configureStore(history, initialState) {
//    const reducers = {
//        searchReducer: SearchReducer.reducer
//        //counter: Counter.reducer,
//        //weatherForecasts: WeatherForecasts.reducer
//    };

//    const middleware = [
//        thunk,
//        routerMiddleware(history)
//    ];

//    // In development, use the browser's Redux dev tools extension if installed
//    const enhancers = [];
//    const isDevelopment = process.env.NODE_ENV === 'development';
//    if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
//        enhancers.push(window.devToolsExtension());
//    }

//    const rootReducer = combineReducers({
//        ...reducers,
//        routing: routerReducer
//    });

//    return createStore(
//        rootReducer,
//        initialState,
//        compose(applyMiddleware(...middleware), ...enhancers)
//    );
//}

