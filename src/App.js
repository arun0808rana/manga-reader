import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './features/home/Home';
import MangaViewer from './features/mangaViewer/MangaViewer';
import CategoryPills from './reusablesComponents/category/CategoryPills';
import Footer from './reusablesComponents/footer/Footer';
import Navbar from './reusablesComponents/navbar/Navbar';
import MangaDetails from './features/mangaDetails/MangaDetails';

function App() {
  return (
    <>
      <Navbar />
      <CategoryPills />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="manga-view/:id" element={<MangaViewer />} />
        <Route path="manga-details" element={<MangaDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
