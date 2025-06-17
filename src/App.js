import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cla from './pages/Cla';
import Creatine from './pages/Creatine';
import FatBurners from './pages/FatBurners';
import LCarnitine from './pages/LCarnitine';
import MassGainers from './pages/MassGainers';
import MultiVitamin from './pages/MultiVitamin';
import PreWorkouts from './pages/PreWorkouts';
import WheyProteins from './pages/WheyProteins';
import Shop from './pages/Shop';
import BestSellers from './pages/BestSellers';
import SearchResults from "./SearchResults";


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
      <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<SearchResults />} />
            <Route path="/" element={<Home />} />
            <Route path="/cla" element={<Cla />} />
            <Route path="/creatine" element={<Creatine />} />
            <Route path="/fat-burners" element={<FatBurners />} />
            <Route path="/l-carnitine" element={<LCarnitine />} />
            <Route path="/mass-gainers" element={<MassGainers />} />
            <Route path="/multi-vitamin" element={<MultiVitamin />} />
            <Route path="/pre-workouts" element={<PreWorkouts />} />
            <Route path="/whey-proteins" element={< WheyProteins />} />
            <Route path="/best-sellers" element={< BestSellers/>} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/navbar" element={<Navbar />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
