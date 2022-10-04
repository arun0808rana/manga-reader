import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './features/home/Home';
import Navbar from './features/navbar/Navbar';
import MangaViewer from './features/mangaViewer/MangaViewer';
import CategoryPills from './reusablesComponents/category/CategoryPills';

function App() {
  return (
    <>
      <Navbar />
      <CategoryPills/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="manga-view" element={<MangaViewer />} />
        {/* <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
    </>
  );
}

export default App;
