import React, { Component } from 'react';
import Dropzone, { } from 'react-dropzone';
import { DropContainer, UploadMessage } from './styles';
import { RiImageAddFill } from 'react-icons/ri';
import CircularProgressbar from 'react-circular-progressbar';

export default class Upload extends Component {

    constructor(props: any) {
        super(props)
        this.state = {
            imageFiles: []
        }
    }

    renderDragMessage = (isDragActive: any, isDragReject: any) => {
        if (!isDragActive) {
            return <UploadMessage> <RiImageAddFill size={35} className="icon" /> <span>Adicione uma imagem!</span> </UploadMessage>
        }
        if (isDragReject) {
            return <UploadMessage type="error">Arquivo não suportado!</UploadMessage>
        }

        return <UploadMessage type="success">Solte sua foto aqui!</UploadMessage>
    }

    onDrop(imageFiles: any) {
        this.setState({
            imageFiles: imageFiles
        })
        console.log(imageFiles);
    }

    render() {
        return (
            <Dropzone multiple={false} onDrop={this.onDrop.bind(this)} accept="image/png, image/jpeg, image/gif, image/jpg" onDropAccepted={() => { }}>
                {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                    <DropContainer
                        {...getRootProps()}
                        isDragActive={isDragActive}
                        isDragReject={isDragReject}
                    >
                        <input {...getInputProps()} />

                        {this.renderDragMessage(isDragActive, isDragReject)}
                    </DropContainer>
                )}
            </Dropzone>
        );
    }
}