import React, { useEffect, useState } from 'react';
import Dropzone, { } from 'react-dropzone';
import { DropContainer, UploadMessage } from './styles';
import { RiImageAddFill } from 'react-icons/ri';
import './styles.css';

function Upload() {
    const [img, setImage] = useState('');
    const [preview, setPreview] = useState('');

    useEffect(() => {
        if (img !== "") {
            document.getElementById('drop')?.classList.add('disabled');
            document.getElementById('preview')?.classList.remove('preview');
            document.getElementById('preview')?.classList.add('active');
        }
    });

    function renderDragMessage(isDragActive: any, isDragReject: any) {
        if (!isDragActive) {
            return <UploadMessage> <RiImageAddFill size={35} className="icon" /> <span>Adicione uma imagem!</span> </UploadMessage>
        }
        if (isDragReject) {
            return <UploadMessage type="error">Arquivo não suportado!</UploadMessage>
        }

        return <UploadMessage type="success">Solte sua foto aqui!</UploadMessage>
    }

    const onDrop = (acceptFile: any) => {
        setPreview(acceptFile.map((file: string) => URL.createObjectURL(file)));
        setImage(acceptFile);
    }

    return (
        <>
            <div id="drop">
                <Dropzone multiple={false} accept="image/png, image/jpeg, image/gif, image/jpg" key="dropzone" onDropAccepted={onDrop}>
                    {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                        <DropContainer
                            {...getRootProps()}
                            isDragActive={isDragActive}
                            isDragReject={isDragReject}
                        >
                            <input {...getInputProps()} />

                            {renderDragMessage(isDragActive, isDragReject)}
                        </DropContainer>
                    )}
                </Dropzone>
            </div>
            <div id="preview" className="preview">
                <img src={preview} alt="" />
            </div>
        </>
    );

}

export default Upload;