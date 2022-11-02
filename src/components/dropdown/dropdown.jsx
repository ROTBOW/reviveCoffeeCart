import {ReactComponent as Arrow} from '../../assets/images/caret.svg';
import React, { useState } from "react";
import './dropdown.scss';

const Dropdown = props => {
    const [drop, setDrop] = useState(false);

    const typeCheck = (context) => {
        if (context.endsWith('@gmail.com')) {
            return <a href={`mailto: ${context}`}>{context}</a>
        } else if (context.startsWith('@')) {
            return <a href="https://www.instagram.com/revivecoffeecart/">{context}</a>
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