const searchWord = 'SEARCH_WORD';
const ScrapeResults = 'SCRAPE_RESULTS';

const initialState = {
    selectWord: '';

};

export const actionCreators = {
    fetchScrapeResults: () => ({ type: fetchScrapeResultsType }),
    
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === fetchScrapeResultsType) {
        return {};
    }

    

    return state;
};
