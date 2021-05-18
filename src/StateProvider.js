//React context API
// it's similar to redux i.e say  global state


//setting up data layer
// we need to track the basket

import React, { createContext, useContext,useReducer } from "react";

// this is the data layer
export const StateContext = createContext();

// build a provider so  that we wrap our entire app in this provider and so that we can give access to the data layer

// initialstate-> how data layers look at the beggining
export const StateProvider = ({reducer,initialState,children}) => (
       <StateContext.Provider value={useReducer(reducer,initialState)}>
           {children}
       </StateContext.Provider>
);

// This is how we use it inside of a component
// u don't need to know just copy and paste
export const useStateValue = () => useContext(StateContext);