import React, { useEffect, useState } from 'react';
import { TextareaAutosize } from '@material-ui/core'
import Comment from '../../components/Comment/Comment'

import './styles.css';

// Home dos comentários
function HomePage(){
    const [textoDoComentario, setTextoDoComentario] = useState('');
    
    function cadastrarComentario(){
        // Realizar cadastro
        console.log(textoDoComentario)
    }

    return (
        <div id="home-page">
            <div className="container-areatext">
                <h1>Comentário</h1>
                <TextareaAutosize id="comentario" rowsMin={8} placeholder="Digite seu comentário aqui" onChange={(e: any)=>setTextoDoComentario(e.target.value)} />
                <button onClick={()=>cadastrarComentario()}>Cadastrar</button>
            </div>

            <div className="container-comentarios">
                <h1>Comentários</h1>
                <Comment texto="teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste teste"></Comment>
                <Comment texto="Texto para ler"></Comment>
                <Comment texto="Ouvir texto"></Comment>
                <Comment texto="Texto para ler. Teste 1,2,3"></Comment>
            </div>
        </div>
    )
}

export default HomePage;