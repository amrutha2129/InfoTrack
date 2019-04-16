import { FETCH_SCRAPE_RESULTS } from './Types';

export function fetchScrapeResults(searchWord, searchUrl) {
    return async dispatch => {
      
        try {
            
            const url = `api/TitleSearch/fetchTitleSearchResults?searchWord=${searchWord}&searchUrl=${searchUrl}`;
            const response = await fetch(url);    
            const result = await response.json();
            
            dispatch({
                type: FETCH_SCRAPE_RESULTS,
                payload: result
            });
        }
        catch (error) {
            console.log(error);
        }
    };
}





