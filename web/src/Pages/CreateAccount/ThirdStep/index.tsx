import React from 'react';
import Upload from '../../../Components/Upload/index';
import './styles.css';

function ThirdStep() {
    return (
        <div id="page-content-account" className="container">
            <div id="title">
                <h1>Criando seu Perfil</h1>
            </div>
            <main>
               <form action="" className="perfil">
                    <Upload />
                
                </form>
            </main>
        </div>
    );
}

export default ThirdStep;