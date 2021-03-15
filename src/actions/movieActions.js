import {FETCH_POPULAR,FETCH_SEARCH} from './types'
import $ from 'jquery';


const api = 'https://api.themoviedb.org/3'
const apiKey = 'a9632aa4c0a084cd40a2f5f911739ec0'


export const mostPopular = () => dispatch => {
  $('.list .card').addClass('active');
    const url = `${api}/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    fetch(url)
    .then(response => response.json())
    .then(movies => dispatch({
        type:FETCH_POPULAR,
        payload: movies.results
    }))
}



export const searchMovies = (query) => dispatch => {
const url = `${api}/search/movie?api_key=${apiKey}&query=${query}`

if(query === ''){
    dispatch(mostPopular())
  }else{
    $('.list .active').removeClass('active');

fetch(url)
.then(response => response.json())
.then((movies) => {
  //remove error on empty string, and set movies to default popular
if(movies.results.error){
    dispatch(mostPopular())
}else{
dispatch({
    type:FETCH_SEARCH,
    payload: movies.results
})
}
}).catch(error => console.log('Cant fetch any data', error))
  }
}


