import { Socket } from 'socket.io';
import socketIO from 'socket.io';

export const disconnect = (client: Socket) => {
    client.on('disconnect', () => {
        console.log(`Client disconnected: ${client}`);  
    })
}
export const message = (client: Socket, io: socketIO.Server) => {
    client.on('message', (payload: any) => {
        console.log(`Client message: ${payload.body}`);
        io.emit('new-message', payload); 
    })
}