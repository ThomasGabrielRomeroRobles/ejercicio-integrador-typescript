import type { Rol } from './Rol.js';

export interface IUser {
    email: string;
    password: string;
    rol: Rol;
}