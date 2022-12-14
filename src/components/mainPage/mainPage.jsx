import React, { useState, useEffect } from "react";
import logo from '../../assets/images/rccLogo.png';
import "./mainPage.scss";

import {ReactComponent as Phone} from '../../assets/images/phone.svg';
import {ReactComponent as Email} from '../../assets/images/email.svg';
import {ReactComponent as Insta} from '../../assets/images/instagram.svg';
import {ReactComponent as Copy} from '../../assets/images/copy.svg';

const PhoneButton = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [showPhone, setShowPhone] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleClick = e => {
        e.stopPropagation();
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1500);
        navigator.clipboard.writeText('951-776-7850');
    }

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])

    const isMobile = width <= 700;

    if (!isMobile) {
        return (
            <li>
                <Phone onClick={()=>{setShowPhone(val => !val)}}/>
                <div id="phone" className={showPhone ? '' : 'hide'}>
                    <a href="tel: 951-776-7850">(951) 776-7850</a> <Copy onClick={handleClick}/>
                    { copied ? <spam>Copied!</spam> : ''}
                </div>
            </li>
        )
    } else {
        return (
            <li>
                <a href="tel: 951-776-7850"><Phone/></a>
            </li>
        )
    }
};

const Navbar = () => {

    return (
        <div className="mainPage">
            <div>
                <img src={logo} alt="Revive Coffee Logo"/>
            </div>
            <div className="slidein-text">
                <h2>Jayda Luce</h2>
                <h3>Riverside Coffee Cart Catering</h3>
                <h4>Events & Meetings</h4>
                <div style={{"position": "relative"}}>
                    <ul>
                        <PhoneButton/>
                        <li><a href="mailto: revivecoffeecart@gmail.com"><Email/></a></li>
                        <li><a href="https://www.instagram.com/revivecoffeecart/" target="_blank" rel="noreferrer"><Insta/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Navbar;