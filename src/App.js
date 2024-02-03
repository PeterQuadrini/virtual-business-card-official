import './App.css';
import { Route, Routes } from 'react-router-dom';
import BusinessCardPage from './pages/businessCardPage/BusinessCardPage.js'
import ContactNotFound from './pages/contactNotFound/contactNotFound.js'
import HomePage from './pages/homePage/HomePage.js'
import ErrorPage from './pages/errorPage/ErrorPage.js'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/contacts/:id' element={<BusinessCardPage />} />
      <Route path='/contacts/contactNotFound' element={<ContactNotFound />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
