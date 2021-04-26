import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
function Bottomnav() {
    return (
        <div className="bottom-nav container-fluid">
            <ul className="row">
                <li className="col-2 d-flex justify-content-center mb-4">
                    <NavLink exact activeClassName="active" to="/home"><FontAwesomeIcon icon={faHome} /> Home</NavLink>
                </li>
                <li className="col-2 d-flex justify-content-center mb-4">
                    <NavLink activeClassName="active" to="/topic1">TOPIC 1</NavLink>
                </li>
                <li className="dummylink col-2 d-flex justify-content-center mb-4">TOPIC 2</li>
                <li className="dummylink col-2 d-flex justify-content-center mb-4">TOPIC 3</li>
                <li className="dummylink col-2 d-flex justify-content-center mb-4">TOPIC 4</li>
                <li className="dummylink col-2 d-flex justify-content-center mb-4">TOPIC 5</li>
            </ul>
        </div>
    );
}
export default Bottomnav;