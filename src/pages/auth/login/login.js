const formLogin = document.querySelector('#form-login');
formLogin?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!(e.target instanceof HTMLFormElement))
        return;
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    // Recuperamos la lista de usuarios guardados
    const usersStorage = localStorage.getItem('users');
    const users = usersStorage ? JSON.parse(usersStorage) : [];
    // Buscamos coincidencia de credenciales
    const userFound = users.find(u => u.email === email && u.password === password);
    if (userFound) {
        // Guardamos la sesión activa en userData
        localStorage.setItem('userData', JSON.stringify(userFound));
        alert(`¡Bienvenido! Rol: ${userFound.rol}`);
        // Redirigimos según el rol del usuario
        if (userFound.rol === 'admin') {
            window.location.href = '/src/pages/admin/index.html';
        }
        else {
            window.location.href = '/src/pages/client/index.html';
        }
    }
    else {
        alert("Credenciales incorrectas. Verifica tu email y contraseña.");
    }
});
export {};
//# sourceMappingURL=login.js.map