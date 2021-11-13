import React,{ createContext, useEffect, useState } from "react";
import { getData } from "./apiHandler";
import { MOVIES } from "./Constants";


export const Store = createContext();

const StoreProvider = ({children}) => {

  const [movieCategories, setMovieCategories] = useState([{id: 1, name: "מדע בדיוני"}, {id: 2, name: "פעולה"}]);
  const [detailsPopupState, setDetailsPopupState] = useState([false,""])
  const [formPopupState, setFormPopupState] = useState([false,""])
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({
    "id": "",
    "name": "",
    "movieCategoryId": 1,
    "rank": 0,
    "imagePath": ""
  })

  const values = {
    detailsPopupState,
    selectedMovie,
    movieCategories,
    movies,
    formPopupState
  };
  
  const actions = {
    setDetailsPopupState,
    setSelectedMovie,
    setMovieCategories,
    setMovies,
    setFormPopupState
  };

  useEffect(()=>{
    getData("movies/get_movie_categories", setMovieCategories, ()=>{})
    getData("movies", setMovies, ()=>{})
  },[])


  return (
    <Store.Provider value={{...values, ...actions}}>
      {children}
    </Store.Provider>
  );
}

export default StoreProvider;
