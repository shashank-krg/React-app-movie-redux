import React, { Component } from 'react';
import MovieContainer from './MovieContainer'
import Header from './Header'
import $ from "jquery";
import {connect} from 'react-redux'
import {mostPopular, searchMovies} from '../actions/movieActions'


class Movies extends Component{

    componentDidMount(){
      //setting popular movies as a default
      this.props.mostPopular()
    }

    setFetchMovies(){
      sessionStorage.setItem('Page', 'movie');
      return false;
      }
    
    componentDidUpdate(){
      this.setActive()
    }
    
    setActive = () => {
            $('.list li').click(function () {
              $('.list .active').removeClass('active');
              $(this).addClass('active');
            }) 
      }

    render(){
        return(
            <div>
                <Header 
                searchData={this.props.searchMovies}

                />
                    
                <MovieContainer movies={this.props.movies} setPage={this.setFetchMovies}/>
                
            </div>
        )
    }
}


const mapStateToProps = state => ({
  movies: state.movies.searchedMovies,
  
})

export default connect(mapStateToProps, {mostPopular,searchMovies})(Movies)