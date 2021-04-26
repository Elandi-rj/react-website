import React from 'react'
import globe from './globe.png';
import logo from '../logo.png';
import './style.css';
import Playbar from '../playbar'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'
function Splashscreen() {
    return (
        <div className="home">
            <header className="home-header">
                <div className="header-text">
                    <p>LOREM IPSUM</p>
                    <img src={logo} className="logo" alt="logo" /> <br></br>
                    <Link to="/react-website/home">
                        <button className="header-button"><FontAwesomeIcon icon={faHandPointRight} /> Click begin to get started</button>
                    </Link>
                </div>
                <img src={globe} className="Globe " alt="Globe" />
            </header>
            <Playbar />
        </div>
    );
}
export default Splashscreen;
