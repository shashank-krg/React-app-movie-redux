import {FETCH_POPULAR, FETCH_SEARCH} from '../actions/types'

const initialState = {
    searchedMovies:[],
}

export default function(state=initialState, action){
    switch(action.type){
        case FETCH_POPULAR:
        return{
            ...state,
            searchedMovies:action.payload
        };
      
        case FETCH_SEARCH:
        return{
            ...state,
            searchedMovies:action.payload,
          
        };
      
        default:
        return state;
    }
}