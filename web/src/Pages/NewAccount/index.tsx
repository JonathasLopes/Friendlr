import React from 'react';
import Logo from '../../Assets/img/logo.svg';
import './styles.css';
import { Link } from 'react-router-dom';

function NewAccount() {
    return (
        <div id="page-content-account" className="container">
            <div id="logo-content">
                <img src={Logo} alt="Logo Friendlr" />
            </div>
            <main>
                <form action="">
                    <fieldset>

                        <div className="input-block">
                            <label htmlFor="email">Email:</label>
                            <input type="text" id="email" onChange={(e) => { }} />
                        </div>
                        <div className="input-block">
                            <label htmlFor="Confemail">Confirmar Email:</label>
                            <input type="text" id="Confemail" onChange={(e) => { }} />
                        </div>
                        <div className="input-block">
                            <label htmlFor="Password">Senha:</label>
                            <input type="password" id="Password" onChange={(e) => { }} />
                        </div>
                        <div className="input-block">
                            <label htmlFor="ConfPassword">Confirmar Senha:</label>
                            <input type="password" id="ConfPassword" onChange={(e) => { }} />
                        </div>

                    </fieldset>

                    <footer>
                        <button type="submit"> Próximo </button>
                        <Link to="/" className="Cancel"> Cancelar </Link>
                    </footer>
                </form>
            </main>
        </div>
    );
};

export default NewAccount;