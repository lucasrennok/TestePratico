import {Request, Response} from 'express';
import db from "../database/connections";

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
}