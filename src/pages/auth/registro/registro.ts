import type { IUser } from '../../../types/IUser.js';

const formRegistro = document.querySelector<HTMLFormElement>('#form-registro');

formRegistro?.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    if (!(e.target instanceof HTMLFormElement)) {
        return;
    }

    const formData = new FormData(e.target);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const usersStorage = localStorage.getItem('users');
    const users: IUser[] = usersStorage ? JSON.parse(usersStorage) : [];

    const userExists = users.find(u => u.email === email);
    if (userExists) {
        alert("El correo ya está registrado. Intenta con otro o inicia sesión.");
        return;
    }

    const newUser: IUser = {
        email: email,
        password: password,
        rol: 'client'
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert("Registro exitoso. Redirigiendo al Login...");
    window.location.href = '../login/index.html';
});