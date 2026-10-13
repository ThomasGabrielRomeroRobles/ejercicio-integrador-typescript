// 1. Seleccionamos el formulario aplicando tipos genéricos
const formRegistro = document.querySelector('#form-registro');
// 2. Escuchamos el evento de submit
formRegistro?.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que la página recargue
    // 3. Type Guard: Aseguramos que el evento provenga de un formulario
    if (!(e.target instanceof HTMLFormElement)) {
        return;
    }
    // 4. Capturamos los datos usando FormData
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    // 5. Verificamos usuarios previos en localStorage
    const usersStorage = localStorage.getItem('users');
    const users = usersStorage ? JSON.parse(usersStorage) : [];
    // 6. Validamos que el usuario no exista
    const userExists = users.find(u => u.email === email);
    if (userExists) {
        alert("El correo ya está registrado. Intenta con otro o inicia sesión.");
        return;
    }
    // 7. Creamos el nuevo usuario. El rol por defecto será 'client'
    const newUser = {
        email: email,
        password: password,
        rol: 'client'
    };
    // 8. Guardamos en memoria
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert("Registro exitoso. Redirigiendo al Login...");
    // 9. Redirigimos al Login
    window.location.href = '../login/index.html';
});
export {};
//# sourceMappingURL=registro.js.map