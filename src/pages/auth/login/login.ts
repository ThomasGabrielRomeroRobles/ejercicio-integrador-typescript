import type { IUser } from '../../../types/IUser.js';

const formLogin = document.querySelector<HTMLFormElement>('#form-login');

formLogin?.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    if (!(e.target instanceof HTMLFormElement)) return;

    const formData = new FormData(e.target);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const usersStorage = localStorage.getItem('users');
    const users: IUser[] = usersStorage ? JSON.parse(usersStorage) : [];

    const userFound = users.find(u => u.email === email && u.password === password);

    if (userFound) {
        localStorage.setItem('userData', JSON.stringify(userFound));

        alert(`¡Bienvenido! Rol: ${userFound.rol}`);

        if (userFound.rol === 'admin') {
            window.location.href = '/src/pages/admin/index.html';
        } else {
            window.location.href = '/src/pages/client/index.html';
        }
    } else {
        alert("Credenciales incorrectas. Verifica tu email y contraseña.");
    }
});