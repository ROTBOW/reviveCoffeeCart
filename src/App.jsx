import React from 'react';
import './App.scss';
import Dropdown from './components/dropdown/dropdown';
// import {ReactComponent as Arrow} from './assets/images/caret.svg';

import Navbar from './components/navbar/navbar';
// import Footer from './components/footer/foot';

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
