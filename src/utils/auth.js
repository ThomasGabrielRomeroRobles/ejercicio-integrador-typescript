import { navigateTo } from './navigate.js';
// Retorna el usuario logueado o null si no hay sesión
export function getLoggedUser() {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
}
// Cierra la sesión activa y redirige al login
export function logout() {
    localStorage.removeItem('userData');
    navigateTo('/src/pages/auth/login/index.html');
}
// Verifica que exista sesión activa y opcionalmente valida el rol requerido
export function checkAuth(requiredRole) {
    const user = getLoggedUser();
    if (!user) {
        alert("Debes iniciar sesión para acceder a esta sección.");
        navigateTo('/src/pages/auth/login/index.html');
        return;
    }
    if (requiredRole && user.rol !== requiredRole) {
        alert("No tienes permisos para acceder a esta vista.");
        // Si no es admin, lo mandamos a su panel correspondiente
        if (user.rol === 'client') {
            navigateTo('/src/pages/client/index.html');
        }
        else {
            navigateTo('/src/pages/admin/index.html');
        }
    }
}
//# sourceMappingURL=auth.js.map