import React, { useEffect, useState } from 'react';
import { TextareaAutosize } from '@material-ui/core'
import Comment from '../../components/Comment/Comment'

import './styles.css';
import api from '../../services/api';

// Home dos comentários
function HomePage(){
    const [textoDoComentario, setTextoDoComentario] = useState('');
    const [comentariosExistentes, setComentariosExistentes] = useState([]);

    function cadastrarComentario(){
        // Realizar cadastro
        if(textoDoComentario!==''){
            api.post('/create/comment',{
                comment: textoDoComentario
            }).then((response)=>{
                // Se o cadastro for um sucesso: recarrega a página
                if(response.status===201){
                    window.location.reload();
                }
            })
        }
    }

    useEffect(() => {
        // Puxa dados dos comentários ao carregar a página
        api.get('/get/allcomments')
            .then((response) => {
                const comentariosData = response.data
                if(comentariosData!==undefined && comentariosData.comentarios.length>0){
                    const novosComentariosExistentes: any = []

                    comentariosData.comentarios.forEach((comentario: any) => {
                        const texto = comentario.texto
                        novosComentariosExistentes.push(<Comment texto={texto} key={novosComentariosExistentes.length}></Comment>)
                    });

                    setComentariosExistentes(novosComentariosExistentes);
                }
            })
    },[])

    return (
        <div id="home-page">
            <div className="container-areatext">
                <h1>Comentário</h1>
                <TextareaAutosize id="comentario" rowsMin={15} placeholder="Digite seu comentário aqui" onChange={(e: any)=>setTextoDoComentario(e.target.value)} />
                <button onClick={()=>cadastrarComentario()}>Cadastrar</button>
            </div>

            <div className="container-comentarios">
                <h1>Comentários</h1>
                {comentariosExistentes}
            </div>
        </div>
    )
}

export default HomePage;