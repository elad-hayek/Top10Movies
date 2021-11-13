import React,{ createContext, useState } from "react";


export const Store = createContext();

const StoreProvider = ({children}) => {

  const [movieCategories, setMovieCategories] = useState([{Id: 0, Name: "מדע בדיוני"}, {Id: 1, Name: "פעולה"}]);
  const [detailsPopupState, setDetailsPopupState] = useState([false,""])
  const [selectedMovie, setSelectedMovie] = useState({
    "Id": "",
    "Name": "",
    "MovieCategoryId": 0,
    "Rank": 0,
    "ImagePath": ""
  })

  const values = {
    detailsPopupState,
    selectedMovie,
    movieCategories,
  };
  
  const actions = {
    setDetailsPopupState,
    setSelectedMovie,
    setMovieCategories
  };


  return (
    <Store.Provider value={{...values, ...actions}}>
      {children}
    </Store.Provider>
  );
}

export default StoreProvider;
