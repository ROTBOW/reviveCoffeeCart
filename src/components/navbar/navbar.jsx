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
        <div className="navbar">
            <button onClick={sendTo('')}>Home</button>
            <button onClick={sendTo('/about')}>About</button>
        </div>
    )
};


export default Navbar;