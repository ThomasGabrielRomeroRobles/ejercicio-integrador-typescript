import type { IUser } from '../types/IUser.js';
import type { Rol } from '../types/Rol.js';
export declare function getLoggedUser(): IUser | null;
export declare function logout(): void;
export declare function checkAuth(requiredRole?: Rol): void;
//# sourceMappingURL=auth.d.ts.map