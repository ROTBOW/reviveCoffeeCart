import { Route, Routes, Redirect, Navigate, HashRouter } from 'react-router-dom';
import React from 'react';
import './styles/App.scss';

import MainPage from './components/mainPage/mainPage';
import Navbar from './components/navbar/navbar';

const App = () => {


  return (
    <HashRouter>
      <div className="App">
        <Navbar/>

        <Routes>
          <Route path='/' element={<MainPage/>}/>

          <Route path="*" element={ <Navigate to='/' replace/> }/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
