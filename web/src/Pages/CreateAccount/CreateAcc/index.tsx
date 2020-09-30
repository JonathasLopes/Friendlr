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
                            <input type="text" id="name" autoComplete="off" placeholder=" " className="input" onChange={(e) => { setName(e.target.value) }} />
                            <label htmlFor="name" className="label">Nome</label>
                        </div>
                        <div className="input-block">
                            <input type="text" id="email" autoComplete="off" placeholder=" " className="input" onChange={(e) => { setEmail(e.target.value) }} />
                            <label htmlFor="email" className="label">Email</label>
                        </div>
                        <div className="input-block">
                            <input type={passwordShow ? "text" : "password"} autoComplete="off" id="password" className="input" placeholder=" " onChange={(e) => { setPassword(e.target.value) }} />
                            <label htmlFor="password" className="label">Senha</label>
                            <i onClick={togglePasswordVisiblity}>
                                {passwordShow ? <MdVisibility size={24} style={{ color: "white" }} /> : <MdVisibilityOff size={24} style={{ color: "white" }} />}
                            </i>
                        </div>
                        <div className="input-block">
                            <input type={"password"} autoComplete="off" id="confPassword" className="input" placeholder=" " onChange={(e) => { setConfPassword(e.target.value) }} />
                            <label htmlFor="confPassword" className="label">Confirmar Senha</label>
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