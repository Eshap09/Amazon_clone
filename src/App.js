import React, { useEffect } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";

const App = ()=> {

    const[{user}, dispatch]=useStateValue();
    
    // piece of code which runs based on a given condition
 
    useEffect(() => {
      const unsubscribe= auth.onAuthStateChanged((authUser)=> {
           if(authUser)
           {
            //  user is logged in...
              dispatch({
                  type: "SET_USER",
                  user: authUser
              })
           }
           else
           {
            //  the user is logged out...
            dispatch({
                type: "SET_USER",
                user: null
            })

           }
       })

       return () => {
        //  Any cleanup operations go in here....
        unsubscribe();
       }

    }, [])

    // if u use a return in your useEffect then the  result of that will run 
    // when the component is unmounted

    console.log("USER is >>>>", user )
    
return (
    <Router>
    <div className="app">
       <Switch>
           <Route path="/checkout">
                <Header/>
                <Checkout/>
            </Route>
           <Route path="/login"><Login/></Route>
           <Route path="/">
               <Header/>
               <Home/>
            </Route>
       </Switch>
    </div>
    </Router>
)
};
export default App;