import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';

export const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        { /* Login y Registro */}
        <Route path='/auth/*' element={ <AuthRoutes />} />

        { /* Journal App */}
        <Route path='/*' element={ <JournalRoutes />} />
      </Routes>
    </BrowserRouter>
  )
}
