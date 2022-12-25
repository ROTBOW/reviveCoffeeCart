import React from "react";
import './dropdown.scss';

const Dropdown = props => {
    return (
        <div className="dropdown-container">
            <div className="dropdown-button">
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    -{props.text}-
                    <div className="dropdown-subtext">{props.subtext}</div>
                </div>
            </div>
            <ul>
                {
                    props.list.split(',').map((item, idx) => (<li key={idx}>{item}</li>))
                }
            </ul>
        </div>
    )
}

export default Dropdown;