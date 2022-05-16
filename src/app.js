import express from 'express';
import router from './routes';
import cors from 'cors';
import fs from 'fs';
import https from 'https';

const app = express();
app.use(express.json());
app.use(router);
app.use(cors());

app.listen(3000, () => console.log("API rodando"));

https.createServer({
    cert: fs.readFileSync('src/SSL/code.crt.txt'),
    key: fs.readFileSync('src/SSL/code.key')
}, app).listen(3001, console.log("Rodando em https"));