import express , {Express } from 'express';
import config from 'config';
import { log } from "./logger/logger";
import { routes } from './route';

const port = 1337;

const host = "localhost";

const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/', routes);

app.listen(port, host, () => {
    console.log(`Server listening at http://${host}:${port}`);

})


export default app;

