import styled, { css } from 'styled-components';

const dragActive = css`
    border-color: #78e5b5;
`;

const dragReject = css`
    border-color: #e57878;
`;

export const DropContainer = styled.div.attrs({
    className: "dropzone"
})`
    border: 1px dashed #ddd;
    border-radius: 40rem;
    width: 15rem;
    height: 15rem;
    cursor: pointer;
    background-color: #ffffff;
    display: flex;
    justify-content: center;

    transition: height 0.2s ease;

    ${props => props.isDragActive && dragActive};
    ${props => props.isDragReject && dragReject};
`;

const messageColors = {
    default: '#999',
    error: '#e57878',
    success: '#78e5b5',
};

export const UploadMessage = styled.p`
    display: flex;
    color: ${props => messageColors[props.type || 'default']};
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
`;