
import { Request, Response } from 'express';



export default class PostController {
    static getall = async (req: Request, res: Response) => {
        console.log('My official post route');
        return res.send({
            "data": "This is all posts"
        })
    }
    static getallContacts = async (req: Request, res: Response) => {
        console.log('My contacts from all post');
        return res.send({
            "data": "This is all the contacts from my posts"
        })
    }
}