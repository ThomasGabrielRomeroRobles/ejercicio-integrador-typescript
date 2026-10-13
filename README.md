# Trabajo Integrador TypeScript - Food Store 🍔

Este es el proyecto integrador para la materia Desarrollo de Software (UTN FRM). La idea del trabajo fue tomar la base de la app "Food Store" y sumarle un sistema de autenticación, control de roles (admin y client) y manejo de sesiones usando localStorage.

---

## 📌 ¿Qué hace la app?

- Registro de usuarios: Podés crear una cuenta nueva (por defecto entra como cliente). Si intentás registrar un correo que ya existe, te avisa.
- Login: Valida tus credenciales contra los usuarios guardados en localStorage.
- Rutas protegidas: Si intentás entrar a la pantalla de admin siendo cliente (o sin haber iniciado sesión), te rebota y te manda al login o a tu panel correspondiente.
- Tipado estricto con TypeScript: Todo armado con interfaces (IUser) y tipos (Rol) bien definidos para evitar errores en tiempo de desarrollo.

---

## 🛠️ Tecnologías que usé

- TypeScript
- Vite (para el servidor local)
- HTML5
- LocalStorage API (simulando la base de datos)

---

## 🚀 Cómo correr el proyecto en tu compu

1. Cloná el repositorio:
   ```bash
   git clone <LINK_DE_TU_REPO_DE_GITHUB>
   cd "Ejercicio integrador typescript"

2. Instala las dependencias
    npm install

3. Levanta el servidor local 
    npm run dev
    Abrí el enlace que te da en la terminal (ej: http://localhost:5173) y listo.

4. Para probar si todo compila bien sin errores de tipos:
    npm run build

Probar el rol de Administrador
Como los registros desde el formulario entran como cliente por defecto, para entrar como admin podés crear uno directamente desde la consola del navegador (F12 -> Console):

    let users = JSON.parse(localStorage.getItem('users') || '[]');
users.push({ email: 'admin@foodstore.com', password: '123', rol: 'admin' });
localStorage.setItem('users', JSON.stringify(users));

Después iniciás sesión con:

Email: admin@foodstore.com

Contraseña: 123