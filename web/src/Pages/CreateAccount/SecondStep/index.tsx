import React, { useState } from 'react';
import Logo from '../../../Assets/img/logo.svg';
import './styles.css';
import { useHistory } from 'react-router-dom';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function SecondStep() {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [born, setBorn] = useState('');
    const [cell, setCell] = useState('');
    const [country, setCountry] = useState('');
    const [st, setSt] = useState('');
    const [city, setCity] = useState('');
    const infoStorage = JSON.parse(sessionStorage.getItem('SStep') || '{}');
    const {getCode} = require('country-list')
    const code = (String) (getCode(country));
    
    function next() {

        const infoTwo = {
            User: username,
            Born: born,
            Cell: cell,
            Country: country,
            St: st,
            City: city
        }

        sessionStorage.removeItem('SStep');
        sessionStorage.setItem('SStep', JSON.stringify(infoTwo));

        history.push('/ThirdStep');
    }

    function back() {
        history.push('/FirstStep');
    }

    return (
        <div id="page-content-account" className="container">
            <div id="logo-second-step">
                <img src={Logo} alt="Logo Friendlr" />
            </div>
            <main>
                <form onSubmit={next}>
                    <fieldset>

                        <div className="input-block">
                            <label htmlFor="usename">Username</label>
                            <input type="text" id="username" defaultValue={infoStorage.User} placeholder="Your Username" onChange={(e) => { setUsername(e.target.value) }} />
                        </div>
                        <div className="input-block">
                            <label htmlFor="date">Data de Nascimento</label>
                            <input type="date" id="date" defaultValue={infoStorage.Born} onChange={(e) => { setBorn(e.target.value) }} />
                        </div>
                        <div className="input-block">
                            <label htmlFor="country">País</label>
                            <CountryDropdown
                                value={country}
                                onChange={(val) => setCountry(val)}
                                defaultOptionLabel={infoStorage.Country}
                            />
                        </div>
                        <div className="input-block">
                            <label htmlFor="st">Estado</label>
                            <RegionDropdown
                                country={country ? country : infoStorage.Country}
                                value={st}
                                onChange={(val) => setSt(val)}
                                defaultOptionLabel={infoStorage.St}
                            />
                        </div>
                        <div className="input-block">
                            <label htmlFor="city">Cidade</label>
                            <input type="text" id="city" defaultValue={infoStorage.City} onChange={(e) => { setCity(e.target.value) }} />
                        </div>
                        <div className="input-block" id="cell">
                            <label htmlFor="cell">Celular (DDD)</label>
                            <PhoneInput
                                disableDropdown={true}
                                containerStyle={{marginTop: '0.8rem'}}
                                inputStyle={{color: 'black', width: '100%'}}
                                country={ country ? code.toLowerCase(): 'br'}
                                value={cell}
                                onChange={(phone) => { setCell(phone) }}
                            />
                        </div>

                    </fieldset>

                    <footer>
                        <button onClick={back}> Voltar </button>
                        <button type="submit"> Próximo </button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default SecondStep;