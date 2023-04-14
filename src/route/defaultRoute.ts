import { Router, Request, Response } from 'express';

export default class Routes {
    public static routes(): Router {
  
      const router = Router();

      router.get('/', async(req: Request, res: Response) => {
        console.log('heloo guy');
    
        res.send({
          message: "GET request successfulll!!!!"
        });
      });
  
      router
        .route("/contact")
        .get((req: Request, res: Response) => {
          res.status(200).send({
            message: "All my contacts"
          });
        })
        .post((req: Request, res: Response) => {
          res.status(200).send({
            message: "POST request successfulll!!!!"
          });
        });
  
      return router;
  
    }
  }