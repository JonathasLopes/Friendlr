import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../../Assets/img/logo.svg';
import './styles.css';
import { Link } from 'react-router-dom';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

function FirstStep() {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [passwordShow, setPasswordShow] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShow(passwordShow ? false : true);
    };

    function next() {

        const account = {
            Name: name,
            Email: email,
            Password: password,
            confPassword: confPassword,
        };

        history.push('/Confirm');
    }

    return (
        <div id="page-content-account" className="container">
            <div id="logo-content">
                <img src={Logo} alt="Logo Friendlr" />
            </div>
            <main>
                <form onSubmit={next}>
                    <fieldset>
                        <div className="input-block">
                            <input type="text" id="name" placeholder=" " onChange={(e) => { setName(e.target.value) }} />
                            <label htmlFor="name">Nome</label>
                        </div>
                        <div className="input-block">
                            <input type="text" id="email" placeholder=" " onChange={(e) => { setEmail(e.target.value) }} />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-block">
                            <input type={passwordShow ? "text" : "password"} id="password" placeholder=" " onChange={(e) => { setPassword(e.target.value) }} />
                            <label htmlFor="password">Senha</label>
                            <i onClick={togglePasswordVisiblity}>
                                {passwordShow ? <MdVisibility size={24} style={{ color: "white" }} /> : <MdVisibilityOff size={24} style={{ color: "white" }} />}
                            </i>
                        </div>
                        <div className="input-block">
                            <input type={"password"} id="confPassword" placeholder=" " onChange={(e) => { setConfPassword(e.target.value) }} />
                            <label htmlFor="confPassword">Confirmar Senha</label>
                        </div>

                    </fieldset>

                    <footer>
                        <Link to="/" className="Cancel"> Cancelar </Link>
                        <button type="submit"> Cadastrar </button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default FirstStep;