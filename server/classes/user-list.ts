import { User } from "./user";

export class userList {
    private list: User[] = [];

    constructor() {}

    public addUser(user: User) {
        this.list.push(user);
        return user;
    }

    public updateName(id: string, nombre: string) {
        for (let user of this.list) {
            if(user.id === id) {
                user.nombre = nombre;
                break;
            }
        }
    }

    public getListUsers() {
        return this.list.filter( user => user.nombre !== 'sin-nombre');
    }

    public getUser(id: string) {
        return this.list.find(user => user.id === id);
    }

    public getUsersBySala(sala: string) {
        return this.list.filter(user => user.sala === sala);
    }

    public deleteUser(id: string) {
        const tempUser = this.getUser(id);
        this.list = this.list.filter( user => user.id !== id);
        return tempUser;
    }
} 