import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

export const AppRouter = () => {

  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged( (user) => {
      if( user?.uid ) {
        dispatch(login(user.uid, user.displayName))
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking]);

  if( checking ) {
    return (
      <div className="center-complete-box">
        <div className="utils__spinner"></div>
      </div>
    )
  }
  
  return (
    <Router>
      <Switch>
        <Route path="/auth" component={ AuthRouter } />
        <Route exact path="/" component={ JournalScreen } />
      </Switch>
    </Router>
  )
}
