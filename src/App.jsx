import { Route, Routes, Navigate, HashRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './styles/App.scss';

import Navbar from './components/navbar/navbar';
import MainPage from './components/mainPage/mainPage';
import AboutPage from './components/aboutPage/aboutPage';
import PricePage from './components/pricePage/pricePage';

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  const handleWindowResize = () => {
    setIsMobile(window.innerWidth <= 700)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return (
    <HashRouter>
      <div className="App">
        <Navbar/>

        <Routes>
          <Route path='about' element={<AboutPage/>}/>
          <Route path='prices' element={<PricePage/>}/>
          <Route path='' element={<MainPage isMobile={isMobile}/>}/>

          <Route path="*" element={ <Navigate to='' replace/> }/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
