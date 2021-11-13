import React,{ createContext, useState } from "react";
import { MOVIES } from "./Constants";


export const Store = createContext();

const StoreProvider = ({children}) => {

  const [movieCategories, setMovieCategories] = useState([{id: 1, name: "מדע בדיוני"}, {id: 2, name: "פעולה"}]);
  const [detailsPopupState, setDetailsPopupState] = useState([false,""])
  const [movies, setMovies] = useState(MOVIES);
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
    movies
  };
  
  const actions = {
    setDetailsPopupState,
    setSelectedMovie,
    setMovieCategories,
    setMovies
  };


  return (
    <Store.Provider value={{...values, ...actions}}>
      {children}
    </Store.Provider>
  );
}

export default StoreProvider;
