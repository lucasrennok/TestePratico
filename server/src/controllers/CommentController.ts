import {Request, Response} from 'express';
import db from "../database/connections";
import axios from 'axios'

export default class CommentController{

    async getAllComments(request: Request, response: Response){
        const {} = request.query;

        const selectedCategories = await db("comentario").select('texto').orderBy('created_at', 'desc');

        return response.status(200).json({"comentarios": selectedCategories});
    }

    async createComment(request: Request, response: Response){
        const {
            comment
        } = request.body;

        if(comment===undefined){
            return response.status(416).send();
        }
        
        let trx = await db.transaction();
        
        try{
            await trx('comentario').insert({
                texto: comment
            });

            await trx.commit();

            return response.status(201).send();
        }catch(err){
            await trx.rollback();
    
            return response.status(400).send()
        }
    }

    async getAudioComment(request: Request, response: Response){
        const {
            texto
        } = request.body;


        const baseURL = process.env.REACT_APP_API_BASE_URL
        const apiKey = process.env.REACT_APP_API_KEY

        let audioData;
        await axios.get(baseURL+'/v1/synthesize?accept=audio%2Fogg&text='+encodeURIComponent(texto)+'&voice=pt-BR_IsabelaVoice', {
            auth: {
                username: 'apikey',
                password: apiKey || ''
            }
        }).then((response) => {
            audioData = response.data;
        })
        
        return response.status(200).json(audioData)
    }
}