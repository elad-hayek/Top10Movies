import React,{ createContext, useState } from "react";


export const Store = createContext();

const StoreProvider = ({children}) => {

  const [movieCategories, setMovieCategories] = useState(["פעולה", "מדע בדיוני"]);
  const [detailsPopupState, setDetailsPopupState] = useState([false,""])
  const [selectedMovie, setSelectedMovie] = useState({})

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
