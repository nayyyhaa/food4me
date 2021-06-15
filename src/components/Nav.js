import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

const Nav = () => {
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    };
    return (
    <div class="navDiv">
        <nav>
            <h1>Food4me</h1>
            <ul>
                <Link style={navStyle} to="/searchRecipes">
                    <li>Search Recipes</li>
                </Link>
                <Link style={navStyle} to ="/about">
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    </div>
    )
}

export default Nav;