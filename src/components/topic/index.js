import React from 'react';
import logo from '../logo.png';
import './style.css';
import Bottomnav from '../bottomnav';
import Hamburgernav from '../hamburgernav';
import { NavLink } from 'react-router-dom';
function Topic() {
    return (
        <div className="topic container-md">
            <div className="row">
                <div className="topic-left col-xl-4">
                    <img src={logo} className="logo mb-5 col-4" alt="logo" />
                    <h1 className="mt-5">LOREM IPSUM <br /> DOLOR SIT</h1>
                    <NavLink className="begin" to="/react-website/topic1">BEGIN</NavLink>
                </div>
                <Hamburgernav />
            </div>
            <Bottomnav />
        </div>
    );
}
export default Topic;
