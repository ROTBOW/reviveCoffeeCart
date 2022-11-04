import {ReactComponent as Arrow} from '../../assets/images/caret.svg';
import {ReactComponent as Phone} from '../../assets/images/phone.svg';
import {ReactComponent as Email} from '../../assets/images/email.svg';
import {ReactComponent as Insta} from '../../assets/images/instagram.svg';
import React, { useState } from "react";
import './dropdown.scss';

const Dropdown = props => {
    const [drop, setDrop] = useState(true);

    const typeCheck = (context) => {
        if (context[0] === '(') {
            return <><Phone/>{context}</>
        } else if (context.endsWith('@gmail.com')) {
            return <a href={`mailto: ${context}`}><Email/></a>
        } else if (context.startsWith('@')) {
            return <a href="https://www.instagram.com/revivecoffeecart/"><Insta/></a>
        } else {
            return context
        }
    };

    return (

        <div className="dropdown-container">
            <div className="dropdown-button" onClick={() => setDrop(val => !val)}>
                <Arrow className={drop ? 'active' : ''}/>
                <div className={`side-line ${drop ? 'active': ''}`}>-</div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    {props.text}
                    <div className="dropdown-subtext">{props.subtext}</div>
                </div>
                <div className={`side-line ${drop ? 'active': ''}`}>-</div>
            </div>
            <ul className={drop ? '' : 'hide'}>
                {
                    props.list.split(',').map((item, idx) => (<li key={idx}>{typeCheck(item)}</li>))
                }
            </ul>
        </div>
    )
}

export default Dropdown;