// src/services/UserService.js
export class UserService {
    async fetchUser() {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/usuarios/1');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Failed to fetch user:", error);
        }
    }
}
