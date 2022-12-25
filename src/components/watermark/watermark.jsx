import React from 'react';
import logo from '../../assets/images/rccLogo.png';
import './watermark.scss';


const Watermark = () => {
    return <img src={logo} className="watermark" alt="Revive Coffee Logo"/>;
}

export default Watermark;