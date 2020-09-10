import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../../Assets/img/logo.svg';
import './styles.css';
import { Link } from 'react-router-dom';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

function FirstStep() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [surname, setSurname] = useState('');
    const [passwordShow, setPasswordShow] = useState(false);
    const infoStorage = JSON.parse(sessionStorage.getItem('fStep') || '{}');

    const togglePasswordVisiblity = () => {
        setPasswordShow(passwordShow ? false : true);
    };

    function next() {

        const infoOne = {
            Name: name,
            Surname: surname,
            Email: email,
            Password: password
        };

        if (name === "") {
            infoOne.Name = infoStorage.Name;
        }
        if (surname === "") {
            infoOne.Surname = infoStorage.Surname;
        }
        if (email === "") {
            infoOne.Email = infoStorage.Email;
        }
        if (password === "") {
            infoOne.Password = infoStorage.Password;
        }

        sessionStorage.removeItem('fStep');
        sessionStorage.setItem('fStep', JSON.stringify(infoOne));

        history.push('/SecondStep');
    }

    function clear() {
        sessionStorage.clear();
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
                            <label htmlFor="name">Nome:</label>
                            <input type="text" id="name" placeholder="Your Name" defaultValue={infoStorage.Name} onChange={(e) => { setName(e.target.value) }} />
                        </div>
                        <div className="input-block">
                            <label htmlFor="surname">Sobrenome:</label>
                            <input type="text" id="surname" placeholder="Your surname" defaultValue={infoStorage.Surname} onChange={(e) => { setSurname(e.target.value) }} />
                        </div>
                        <div className="input-block">
                            <label htmlFor="email">Email:</label>
                            <input type="text" id="email" placeholder="exemple@exemple.com" defaultValue={infoStorage.Email} onChange={(e) => { setEmail(e.target.value) }} />

                        </div>
                        <div className="input-block">
                            <label htmlFor="password">Senha:</label>
                            <div className="pass">
                                <input type={passwordShow ? "text" : "password"} id="password" defaultValue={infoStorage.Password} onChange={(e) => { setPassword(e.target.value) }} />
                                <i onClick={togglePasswordVisiblity}>
                                    { passwordShow ? <MdVisibility size={24} style={{color: "white"}} /> : <MdVisibilityOff size={24} style={{color: "white"}} /> }
                                </i>
                            </div>
                        </div>

                    </fieldset>

                    <footer>
                        <Link to="/" className="Cancel" onClick={clear}> Cancelar </Link>
                        <button type="submit"> Próximo </button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default FirstStep;