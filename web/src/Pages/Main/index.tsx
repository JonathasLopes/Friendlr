import React from 'react';
import './styles.css';
import LogoText from '../../Assets/img/logo.svg';
import LogoImg from '../../Assets/img/amigos.svg';
import { Link } from 'react-router-dom';


function landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={LogoText} alt="FriendlrText" />
                </div>

                <div className="logoImg-container">
                    <img src={LogoImg} alt="FriendlrImg" className="friend-image" />
                </div>

                <div className="buttons-container">
                    <Link to="" className="Login">
                        Login
                    </Link>

                    <Link to="/NewAccount" className="NewAccount">
                        Nova Conta
                    </Link >
                </div>
                <footer>
                    Copyright © Jonathas Lopes
                </footer>
            </div>
        </div>
    );
}

export default landing;