import { Router } from 'express';

import PostController from '../controller/post.controller'

export default class PostRoutes {

    public static routes(): Router {
        const router = Router();

        router.get('/post', PostController.getall);
        router.get("/post/contact", PostController.getallContacts)

        return router;

    }
}