import React from 'react';
import logo from '../logo.png';
import './style.css';
import Bottomnav from '../bottomnav';
import Hamburgernav from '../hamburgernav';
function Home() {
    return (
        <div className="home container-md">
            <div className="row">
                <div className="home-left col-xl-4">
                    <img src={logo} className="logo mb-5 col-12" alt="logo" />
                    <div>
                        <h1 className="mb-2 mt-5">LOREM IPSUM</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae nisl elit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu leo elit. Donec condimentum odio ut ante bibendum, quis egestas quam semper.</p>
                        <p>Donec tempus cursus magna a feugiat. Morbi scelerisque euismod aliquet. Integer ut euismod risus. Aenean a diam vel nisl accumsan cursus.</p>
                        <p>Quisque ac dapibus nisl. Etiam rhoncus aliquet ligula ac convallis. Ut eleifend sit amet justo eu laoreet.</p>
                    </div>
                </div>
                <Hamburgernav />
            </div>
            <Bottomnav />
        </div>
    );
}
export default Home;
