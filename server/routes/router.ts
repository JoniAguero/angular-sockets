import { Router, Request, Response } from 'express';
import Server from '../classes/server';
import { usersConnected } from '../sockets/sockets';

const router = Router();

router.get('/messages', (req:Request, res: Response) => {
    res.json({ok: true, mensaje: 'tutu bem GET!'})
})

router.get('/users', (req:Request, res: Response) => {
    const server = Server.instance;
    server.io.clients((err: any) => {
        if (err) return res.json({ok: false, err});
        res.json({ ok: true, usersConnected})
    })
})

router.post('/messages', (req:Request, res: Response) => {

    const {body, de} = req.body;

    const payload = {
        body,
        de
    }

    const server = Server.instance;
    server.io.emit('new-message', payload)
    res.json({ok: true, body, de})
})

router.post('/messages/:id', (req:Request, res: Response) => {

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