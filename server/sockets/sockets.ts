import { Socket } from 'socket.io';

export const disconnect = (client: Socket) => {
    client.on('disconnect', () => {
        console.log(`Client disconnected: ${client}`);  
    })
}
export const message = (client: Socket) => {
    client.on('message', (payload: any) => {
        console.log(`Client message: ${payload.body}`);  
    })
}