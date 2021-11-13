import React,{ createContext, useState } from "react";


export const Store = createContext();

const StoreProvider = ({children}) => {

  const [movieCategories, setMovieCategories] = useState([{id: 1, name: ""}]);
  const [detailsPopupState, setDetailsPopupState] = useState([false,""])
  const [formPopupState, setFormPopupState] = useState([false,""])
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("")
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
    formPopupState,
    errorMessage
  };
  
  const actions = {
    setDetailsPopupState,
    setSelectedMovie,
    setMovieCategories,
    setMovies,
    setFormPopupState,
    setErrorMessage
  };

  return (
    <Store.Provider value={{...values, ...actions}}>
      {children}
    </Store.Provider>
  );
}

export default StoreProvider;
