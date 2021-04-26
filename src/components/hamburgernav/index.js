import React from 'react';
import './style.css';
function Hamburgernav() {
    return (
        <div class="hamburger-menu dropdown">
            <button class="btn btn-dark" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div></div>
                <div></div>
                <div></div>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <p class="dropdown-item" href="#">Action</p>
                <p class="dropdown-item" href="#">Another action</p>
                <p class="dropdown-item" href="#">Something else here</p>
            </div>
        </div>
    );
}
export default Hamburgernav;