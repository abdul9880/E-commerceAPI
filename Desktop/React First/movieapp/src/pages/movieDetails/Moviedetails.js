import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Moviedetails.css'


const Moviedetails = () => {
const [CurrentMovieDetail, setCurrentMovieDetails]= useState()
const {id} = useParams()

useEffect(()=>{
    getData()
    window.scrollTo(0,0)
},[])

const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
    .then(res => res.json())
    .then(data => setCurrentMovieDetails(data.results))
}

  return (
    <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${CurrentMovieDetail ? CurrentMovieDetail.backdrop_path : ""}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${CurrentMovieDetail ? CurrentMovieDetail.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{CurrentMovieDetail ? CurrentMovieDetail.original_title : ""}</div>
                        <div className="movie__tagline">{CurrentMovieDetail ? CurrentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating">
                            {CurrentMovieDetail ? CurrentMovieDetail.vote_average: ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{CurrentMovieDetail ? "(" + CurrentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{CurrentMovieDetail ? CurrentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{CurrentMovieDetail ? "Release date: " + CurrentMovieDetail.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                CurrentMovieDetail && CurrentMovieDetail.genres
                                ? 
                                CurrentMovieDetail.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{CurrentMovieDetail ? CurrentMovieDetail.overview : ""}</div>
                    </div>

                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {
                    CurrentMovieDetail && CurrentMovieDetail.homepage && <a href={CurrentMovieDetail.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    CurrentMovieDetail && CurrentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + CurrentMovieDetail.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
            <div className="movie__heading">Production companies</div>
            <div className="movie__production">
                {
                    CurrentMovieDetail && CurrentMovieDetail.production_companies && CurrentMovieDetail.production_companies.map(company => (
                        <>
                            {
                                company.logo_path 
                                && 
                                <span className="productionCompanyImage">
                                    <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div>
        </div>
  )
}

export default Moviedetails
