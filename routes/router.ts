import { Router, Request, Response } from 'express';

const router = Router();

router.get('/mensajes', (req:Request, res: Response) => {
    res.json({ok: true, mensaje: 'tutu bem GET!'})
})
router.post('/mensajes', (req:Request, res: Response) => {

    const {cuerpo, de} = req.body;

    res.json({ok: true, mensaje: 'tutu bem POST!', cuerpo, de})
})

export default router;