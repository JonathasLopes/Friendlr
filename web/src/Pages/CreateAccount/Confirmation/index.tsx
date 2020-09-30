import React from 'react';
import Logo from '../../../Assets/img/logo.svg';
import { MdRefresh } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './styles.css';

const confEmail = () => {
    return (
        <div id="page-content-account" className="container">
            <div id="logo-content">
                <img src={Logo} alt="Logo Friendlr" />
            </div>
            <main>
                <p className="textConfirmation">Um email foi enviado para “Contato@contato.com” para confirmação, olhe também em sua caixa de span ou na lixeira, caso não tenha recebido clique em “enviar novamente”!</p>
                <button className="resend">
                    <MdRefresh size={24} style={{color: "white"}} />
                    Enviar Novamente
                </button>
                <Link to="/" className="Goback">
                    Voltar
                </Link>
            </main>
        </div>
    );
}

export default confEmail;