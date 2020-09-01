import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../../Assets/img/logo.svg';
import './styles.css';
import { Link } from 'react-router-dom';
import api from '../../../services/api';

function FirstStep() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [confEmail, setConfEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfpassword] = useState('');

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('classes', {
            email,
            confEmail,
            password,
            confPassword
        }).then(() => {
            alert('Cadastro realizado com sucesso!');
            history.push('/');
        }).catch(() => {
            alert('Erro no cadastro!');
        });
    }

    return (
        <div id="page-content-account" className="container">
            <div id="logo-content">
                <img src={Logo} alt="Logo Friendlr" />
            </div>
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>

                        <div className="input-block">
                            <label htmlFor="email">Email:</label>
                            <input type="text" id="email" placeholder="exemple@exemple.com" onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="input-block">
                            <label htmlFor="Confemail">Confirmar Email:</label>
                            <input type="text" id="Confemail" placeholder="exemple@exemple.com" onChange={(e) => { setConfEmail(e.target.value) }} />
                        </div>
                        <div className="input-block">
                            <label htmlFor="Password">Senha:</label>
                            <input type="password" id="Password" onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        <div className="input-block">
                            <label htmlFor="ConfPassword">Confirmar Senha:</label>
                            <input type="password" id="ConfPassword" onChange={(e) => { setConfpassword(e.target.value) }} />
                        </div>

                    </fieldset>

                    <footer>
                        <Link to="/" className="Cancel"> Cancelar </Link>
                        <button type="submit"> Próximo </button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default FirstStep;