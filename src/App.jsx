import React from 'react';
import './App.scss';
// import {ReactComponent as Arrow} from './assets/images/caret.svg';

import Navbar from './components/navbar/navbar';
// import Footer from './components/footer/foot';

const App = () => {


  return (
    <div className="App">
      <Navbar/>
      <div className="content-container">
        {/* <p><Arrow/> The Options</p> */}
      </div>
    </div>
  );
}

export default App;
