import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { LoginScreen } from '../components/login/LoginScreen';
import { PublicRoute } from './PublicRoute';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ 
          <PublicRoute>
            <LoginScreen />
          </PublicRoute>
          } 
        />
        <Route path="/*" element={ 
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />
        {/* <Route path="/*" element={ <DashboardRoutes /> }/> */}
      </Routes>
    </BrowserRouter>
  );
}
