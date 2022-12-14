import React from 'react';
import './App.scss';
import Dropdown from './components/dropdown/dropdown';

import MainPage from './components/mainPage/mainPage';

const App = () => {


  return (
    <div className="App">
      <MainPage/>
      <div className="content-container">
        <Dropdown text="Coffee List" list="Latte,Cappucino,Americano,Espresso,Coldbrew,Expresso + Tonic"/>
        <div id="spacer"></div>
        <Dropdown text="Les Saveurs" subtext="(Flavors)" list="Vanilla,Lavender,Mocha,Honey,Sugar Free Vanilla"/>
      </div>
    </div>
  );
}

export default App;
