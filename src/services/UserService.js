// src/services/UserService.js
export class UserService {
    async fetchUser() {
        try {
            const response = await fetch('http://localhost:8080/Mentes/api-laravel/public/api/users/1');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Failed to fetch user:", error);
        }
    }
}
