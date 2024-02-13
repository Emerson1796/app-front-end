// src/views/UserView.js
export class UserView {
    constructor(userService) {
        this.userService = userService;
    }

    async render() {
        const user = await this.userService.fetchUser();
        document.getElementById('user-info').innerHTML = `
            <h2>User Information</h2>
            <p>Name: ${user.name}</p>
            <p>Email: ${user.email}</p>
        `;
    }
}
