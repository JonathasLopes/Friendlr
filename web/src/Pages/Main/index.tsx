import React from 'react';
import './styles.css';
import LogoText from '../../Assets/img/logo.svg';
import LogoImg from '../../Assets/img/amigos.svg';
import { Link } from 'react-router-dom';


function landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container-page">
                    <div className="logo-container">
                        <img src={LogoText} alt="FriendlrText" />
                    </div>

                    <div className="logoImg-container">
                        <img src={LogoImg} alt="FriendlrImg" className="friend-image" />
                    </div>
                </div>

                <div className="buttons-container">
                    <Link to="/Login" className="Login">
                        Login
                    </Link>

                    <Link to="/FirstStep" className="NewAccount">
                        Nova Conta
                    </Link >
                </div>
            </div>
            <footer id="foot">
                    Copyright © Jonathas Lopes
                </footer>
        </div>
    );
}

export default landing;