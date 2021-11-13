import React,{ createContext, useState } from "react";


export const Store = createContext();

const StoreProvider = ({children}) => {

  const [movieCategories, setMovieCategories] = useState(["פעולה", "מדע בדיוני"]);

  const values = [
    movieCategories
  ];

  const actions = [
    setMovieCategories
  ];


  return (
    <Store.Provider value={{...values, ...actions}}>
      {children}
    </Store.Provider>
  );
}

export default StoreProvider;
