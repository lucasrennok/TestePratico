import React, { useState } from 'react';
import api from '../../services/api';
import './styles.css';

interface CommentProps{
    texto: string,
    id: string
}

const Comment: React.FC<CommentProps> = (props) => {
    const [audio, setAudio] = useState(<div></div>);

    // IBM Watson Text to Speech
    function ouvirComentario(){

        // Cria a tag de audio com o source da API
        if(audio.type==='div'){
            api('/get/comment/audio', {
                method: 'POST',
                responseType: 'blob',
                data: {
                    "texto": props.texto
                },
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((response) => {
                const srcToSetAudio = URL.createObjectURL(response.data)
                console.log()
                setAudio(
                    <audio controls autoPlay hidden id={props.id}>
                        <source src={srcToSetAudio} type="audio/ogg"></source>
                    </audio>
                )
            });
        }else{
            //Caso já exista o source do áudio, o áudio é tocado
            let e = document.getElementById(props.id);
            //@ts-ignore
            e.play()
        }
    }

    return (
        <div className="comentarios">
            <h3>{props.texto}</h3>
            <button onClick={()=>ouvirComentario()}>Ouvir</button>
            {audio}
        </div>
    )
}

export default Comment;