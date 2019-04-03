import { Router, Request, Response } from 'express';
import Server from '../classes/server';

const router = Router();

router.get('/mensajes', (req:Request, res: Response) => {
    res.json({ok: true, mensaje: 'tutu bem GET!'})
})
router.post('/mensajes', (req:Request, res: Response) => {

    const {cuerpo, de} = req.body;

    res.json({ok: true, mensaje: 'tutu bem POST!', cuerpo, de})
})
router.post('/mensajes/:id', (req:Request, res: Response) => {

    const {cuerpo, de} = req.body;
    const id = req.params.id;

    const payload = {
        cuerpo,
        de
    } 

    const server = Server.instance;
    server.io.in(id).emit('message-private', payload)

    res.json({ok: true, mensaje: 'tutu bem POST!', cuerpo, de, id})
})

export default router;