import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { CheckingAuth } from '../ui';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth';

export const AppRouter = () => {
  const { status } = useSelector<any, any>(state => state.auth);
  const dispatch = useDispatch<any>();
  useEffect(() => {
    onAuthStateChanged( FirebaseAuth, async (user) => {
      if(!user) return dispatch( logout(null) );
      dispatch( login(user) );
    })
  }, [])
  
  if( status === 'checking' ) {
    return <CheckingAuth />
  }

  return (
    <BrowserRouter>
      <Routes>
        {
          status === 'authenticated'
          ? <Route path='/*' element={ <JournalRoutes />} />            
          : <Route path='/auth/*' element={ <AuthRoutes />} />
        }
        <Route path='/*' element={ <Navigate to='auth/login' />} />  
      </Routes>
    </BrowserRouter>
  )
}
