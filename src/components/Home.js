import React from 'react';
import '../App.css';
import bg from '../assets/bg.jpg';
const Home = () => {
    const styleDiv = {
        background: `linear-gradient(rgba(0,0,0,0.7),transparent),url(${bg})`,
        minHeight : `90vh`,
        objectFit: `cover`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: "center",
        justifyContent: "center",
        backgroundSize: "cover",
        color: "white"
    }
    return (
    <div style = {styleDiv} className="homeDiv">
        <h1> Welcome to Food4me! </h1>
        <p>This is a Recipe generator website made with ReactJS.</p>
    </div>
)};

export default Home;