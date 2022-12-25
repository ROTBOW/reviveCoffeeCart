import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.scss';



const Navbar = () => {
    const navi = useNavigate();

    const sendTo = (loca) => {
        return e => {
            navi(loca)
        }
    }

    return (
        <>
            <div className="navbar">
                    <button onClick={sendTo('')}>Home</button>
                    <button onClick={sendTo('/about')}>About Me</button>
                    <button onClick={sendTo('/prices')}>Prices</button>
            </div>
            <div className="navbar-spacer"/>
        </>
    )
};


export default Navbar;