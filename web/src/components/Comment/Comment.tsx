import axios from 'axios';
import React, { useState } from 'react';
import './styles.css';

interface CommentProps{
    texto: string,
    id: string
}

const Comment: React.FC<CommentProps> = (props) => {
    const [audio, setAudio] = useState(<div></div>);

    // IBM Watson Text to Speech
    function ouvirComentario(){
        const baseURL = process.env.REACT_APP_API_BASE_URL
        const apiKey = process.env.REACT_APP_API_KEY

        // Cria a tag de audio com o source da API
        if(audio.type==='div'){
            axios.get(baseURL+'/v1/synthesize?accept=audio%2Fogg&text='+encodeURIComponent(props.texto)+'&voice=pt-BR_IsabelaVoice', {
                auth: {
                    username: 'apikey',
                    password: apiKey || ''
                }
            }).then(() => {
                    setAudio(
                        <audio controls autoPlay hidden id={props.id}>
                            <source src={baseURL+'/v1/synthesize?accept=audio%2Fogg&text='+encodeURIComponent(props.texto)+'&voice=pt-BR_IsabelaVoice'} type="audio/ogg"></source>
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