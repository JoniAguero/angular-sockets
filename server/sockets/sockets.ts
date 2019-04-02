import { Socket } from 'socket.io';
import socketIO from 'socket.io';

export const disconnect = (client: Socket) => {
    client.on('disconnect', () => {
        console.log(`Client disconnected: ${client}`);  
    })
}
export const userConfig = (client: Socket) => {
    client.on('user-config', (payload: any, callback: Function) => {
        console.log(`Client: ${payload.nombre}`);  
        callback({
            ok:true,
            mensaje: `Usuario ${payload.nombre} configurado`
        });
    })
}
export const message = (client: Socket, io: socketIO.Server) => {
    client.on('message', (payload: any) => {
        console.log(`Client message: ${payload.body}`);
        io.emit('new-message', payload); 
    })
}