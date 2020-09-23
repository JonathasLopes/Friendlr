import React, { useState } from 'react';
import Logo from '../../../Assets/img/logo.svg';
import './styles.css';
import { useHistory } from 'react-router-dom';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Upload from '../../../Components/Upload/index';

function CreatePerfil() {

    const history = useHistory();

    const [born, setBorn] = useState('');
    const [cell, setCell] = useState('');
    const [country, setCountry] = useState('');
    const [st, setSt] = useState('');
    const [city, setCity] = useState('');
    const [username, setUsername] = useState('');

    const { getCode } = require('country-list');
    const code = (String)(getCode(country));

    function next() {

        const perfil = {
            Username: username,
            Born: born,
            Cell: cell,
            Country: country,
            St: st,
            City: city
        }

        history.push('/');
    }

    return (
        <div id="page-content-account" className="container">
            <div id="logo-second-step">
                <img src={Logo} alt="Logo Friendlr" />
            </div>
            <main>
                <form onSubmit={next}>
                    <fieldset>
                        <div className="input-block" id="user">
                            <Upload />
                            <div className="user">
                                <input type="text" id="username" defaultValue="" placeholder="Your Username" onChange={(e) => { setUsername(e.target.value) }} />
                            </div>
                        </div>
                        <div className="input-block">
                            <label htmlFor="Bio">Bio</label>
                            <textarea name="Bio" id="bio"></textarea>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div className="input-block">
                            <label htmlFor="date">Data de Nascimento</label>
                            <input type="date" id="date" onChange={(e) => { setBorn(e.target.value) }} />
                        </div>
                        <div className="input-block">
                            <label htmlFor="country">País</label>
                            <CountryDropdown
                                value={country}
                                onChange={(val) => setCountry(val)}
                            />
                        </div>
                        <div className="input-block">
                            <label htmlFor="st">Estado</label>
                            <RegionDropdown
                                country={country}
                                value={st}
                                onChange={(val) => setSt(val)}
                            />
                        </div>
                        <div className="input-block">
                            <label htmlFor="city">Cidade</label>
                            <input type="text" id="city" onChange={(e) => { setCity(e.target.value) }} />
                        </div>
                        <div className="input-block" id="cell">
                            <label htmlFor="cell">Celular (DDD)</label>
                            <PhoneInput
                                disableDropdown={true}
                                containerStyle={{ marginTop: '0.8rem' }}
                                inputStyle={{ color: 'black', width: '100%' }}
                                country={country ? code.toLowerCase() : 'br'}
                                value={cell}
                                onChange={(phone) => { setCell(phone) }}
                            />
                        </div>
                    </fieldset>

                    <footer>
                        <button type="submit"> Finalizar </button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default CreatePerfil;