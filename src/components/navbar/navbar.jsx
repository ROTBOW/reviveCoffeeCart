import React from "react";
import "./navbar.scss";
import logo from '../../assets/images/rccLogo.png';
import Dropdown from "../dropdown/dropdown";


const Navbar = () => {


    return (
        <div className="navbar">
            <div>
                <img src={logo} alt="Revive Coffee Logo"/>
            </div>
            <div className="slidein-text">
                <h2>Jayda Luce</h2>
                <h3>Coffee Catering</h3>
                <h4>Events & Meetings</h4>
                <Dropdown text="Contact Me" list="(951) 776-7850,revivecoffeecart@gmail.com,@revivecoffeecart"/>
            </div>
        </div>
    )
};

export default Navbar;