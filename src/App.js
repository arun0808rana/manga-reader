import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './features/home/Home';
import MangaViewer from './features/mangaViewer/MangaViewer';
import CategoryPills from './reusablesComponents/category/CategoryPills';
import Footer from './reusablesComponents/footer/Footer';
import Navbar from './reusablesComponents/navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <CategoryPills />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="manga-view" element={<MangaViewer />} />
        {/* <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
