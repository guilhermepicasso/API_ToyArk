import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import figureController from './controller/figureController.js';
import loginController from './controller/loginController.js'


const servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use(figureController);
servidor.use(loginController);

servidor.use('/storage/figure', express.static('storage/figure'));

let port = process.env.PORT;
servidor.listen(port, () => console.log("API START"));