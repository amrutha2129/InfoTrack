import { FETCH_SCRAPE_RESULTS } from '../actions/Types';

const initialState = {

    scrapeResults: []

};

export default function(state = initialState, action){
    switch (action.type) {

        case FETCH_SCRAPE_RESULTS:
            
            return {
                ...state,
                scrapeResults: action.payload.rankList

            }

        default:
            return state;
    }
}
