import { Router, Request, Response } from 'express';
import Server from '../classes/server';

const router = Router();

router.get('/mensajes', (req:Request, res: Response) => {
    res.json({ok: true, mensaje: 'tutu bem GET!'})
})

router.post('/mensajes', (req:Request, res: Response) => {

    const {body, de} = req.body;

    const payload = {
        body,
        de
    }

    const server = Server.instance;
    server.io.emit('new-message', payload)
    res.json({ok: true, body, de})
})

router.post('/mensajes/:id', (req:Request, res: Response) => {

    const {body, de} = req.body;
    const id = req.params.id;

    const payload = {
        body,
        de
    } 

    const server = Server.instance;
    server.io.in(id).emit('message-private', payload)

    res.json({ok: true, mensaje: 'tutu bem POST!', body, de, id})
})

export default router;