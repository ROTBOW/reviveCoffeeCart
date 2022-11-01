import {ReactComponent as Arrow} from '../../assets/images/caret.svg';
import React, { useState } from "react";
import './dropdown.scss';

const Dropdown = props => {
    const [drop, setDrop] = useState(false);

    return (

        <div className="dropdown-container">
            <div className="dropdown-button" onClick={() => setDrop(val => !val)}>
                <Arrow className={drop ? 'active' : ''}/>
                <div className={`side-line ${drop ? 'active': ''}`}>-</div>
                {props.text}
                <div className={`side-line ${drop ? 'active': ''}`}>-</div>
            </div>
            <ul className={drop ? '' : 'hide'}>
                {
                    props.list.split(',').map((item, idx) => (<li key={idx}>{item}</li>))
                }
            </ul>
        </div>
    )
}

export default Dropdown;