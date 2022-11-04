import React from 'react';
import './App.scss';
import Dropdown from './components/dropdown/dropdown';
import cart from './assets/images/cart.jpg';

import Navbar from './components/navbar/navbar';

const App = () => {


  return (
    <div className="App">
      <Navbar/>
      <div className="content-container">
        <Dropdown text="Coffee List" list="Latte,Cappucino,Americano,Espresso,Coldbrew,Expresso + Tonic"/>
        <Dropdown text="Les Saveurs" subtext="(Flavors)" list="Vanilla,Lavender,Mocha,Honey,Sugar Free Vanilla"/>
        {/* <img src={cart}/> */}
      </div>
    </div>
  );
}

export default App;
