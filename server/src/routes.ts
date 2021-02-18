import express from 'express';
import CommentController from './controllers/CommentController';

const routes = express.Router();
const commentController = new CommentController();

// Criação das rotas
routes.post('/create/comment', commentController.createComment);
routes.get('/get/allcomments', commentController.getAllComments);
routes.post('/get/comment/audio', commentController.getAudioComment);

export default routes;
