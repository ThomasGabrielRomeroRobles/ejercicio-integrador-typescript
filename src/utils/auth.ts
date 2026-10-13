import type { IUser } from '../types/IUser.js';
import type { Rol } from '../types/Rol.js';
import { navigateTo } from './navigate.js';

export function getLoggedUser(): IUser | null {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
}

export function logout(): void {
    localStorage.removeItem('userData');
    navigateTo('/src/pages/auth/login/index.html');
}

export function checkAuth(requiredRole?: Rol): void {
    const user = getLoggedUser();

    if (!user) {
        alert("Debes iniciar sesión para acceder a esta sección.");
        navigateTo('/src/pages/auth/login/index.html');
        return;
    }

    if (requiredRole && user.rol !== requiredRole) {
        alert("No tienes permisos para acceder a esta vista.");
        if (user.rol === 'client') {
            navigateTo('/src/pages/client/index.html');
        } else {
            navigateTo('/src/pages/admin/index.html');
        }
    }
}