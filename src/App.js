import './App.css';
import { Route, Routes } from 'react-router-dom';
import BusinessCardPage from './pages/businessCardPage/BusinessCardPage.js'
import ContactNotFound from './pages/contactNotFound/contactNotFound.js'

function App() {
  return (
    <Routes>
      <Route path='/contacts/:id' element={<BusinessCardPage />} />
      <Route path='/contacts/contactNotFound' element={<ContactNotFound />} />
    </Routes>
  );
}

export default App;
