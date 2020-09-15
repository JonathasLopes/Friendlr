import React, { useState } from 'react';
import Dropzone, { } from 'react-dropzone';
import { DropContainer, UploadMessage } from './styles';
import { RiImageAddFill } from 'react-icons/ri';

function Upload() {
    const [img, setImage] = useState('');

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
        setImage(acceptFile.map((file: any) => URL.createObjectURL(file)))
    }

    return (
        <div>
            <Dropzone multiple={false} onDrop={onDrop} accept="image/png, image/jpeg, image/gif, image/jpg" onDropAccepted={() => { }}>
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
            <div>
                <img src={img} alt="" style={{ width: "100%" }} />
            </div>
        </div>
    );

}

export default Upload;