import React from 'react';
import './App.scss';
import Dropdown from './components/dropdown/dropdown';

import Navbar from './components/navbar/navbar';

const App = () => {


  return (
    <div className="App">
      <Navbar/>
      <div className="content-container">
        <Dropdown text="Coffee List" list="Latte,Cappucino,Americano,Espresso,Coldbrew,Expresso + Tonic"/>
        <Dropdown text="Les Saveurs" subtext="(Flavors)" list="Vanilla,Lavender,Mocha,Honey,Sugar Free Vanilla"/>
      </div>
    </div>
  );
}

export default App;
