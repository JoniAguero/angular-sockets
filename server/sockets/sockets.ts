import { Socket } from 'socket.io';
import socketIO from 'socket.io';
import { userList } from '../classes/user-list';
import { User } from '../classes/user';

export const usersConnected = new userList();

export const connectClient = (client: Socket, io: socketIO.Server) => {
    const user = new User(client.id);
    console.log('Client conneted:');
    console.log(user);
    usersConnected.addUser(user);
    io.emit('users-connected', usersConnected.getListUsers());
}
export const disconnect = (client: Socket, io: socketIO.Server) => {
    client.on('disconnect', () => {
        console.log(`Client disconnected: ${client.id}`);
        usersConnected.deleteUser(client.id);
        console.log(usersConnected);
        io.emit('users-connected', usersConnected.getListUsers());
    })
}
export const userConfig = (client: Socket, io: socketIO.Server) => {
    client.on('user-config', (payload: any, callback: Function) => {
        usersConnected.updateName(client.id, payload.nombre);
        callback({
            ok:true,
            mensaje: `Usuario ${payload.nombre} configurado`
        });
        console.log(usersConnected);
        io.emit('users-connected', usersConnected.getListUsers());
    })
}
export const message = (client: Socket, io: socketIO.Server) => {
    client.on('message', (payload: any) => {
        console.log(`Client message: ${payload.body}`);
        io.emit('new-message', payload); 
    })
}