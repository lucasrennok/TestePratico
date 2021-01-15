import React, { useState } from 'react';
import './styles.css';

interface CommentProps{
    texto: string
}

const Comment: React.FC<CommentProps> = (props) => {

    function ouvirComentario(){
        // watson text to speech
        console.log(props.texto)
    }

    return (
        <div className="comentarios">
            <h3>{props.texto}</h3>
            <button onClick={()=>ouvirComentario()}>Ouvir</button>
        </div>
    )
}

export default Comment;