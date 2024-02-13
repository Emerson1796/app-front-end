// src/views/UserView.js
export class UserView {
    constructor(userService) {
        this.userService = userService;
    }

    async render() {
        const infos = await this.userService.fetchUser();
        let userInfoHtml = `
            <h2>User Information</h2>
            <p>Name: ${infos.user.nome}</p>
            <p>Email: ${infos.user.email}</p>
            <h2>Addresses</h2>
        `;
    
        infos.addresses.forEach(address => {
            userInfoHtml += `<p>Address: ${address}</p>`;
        });
    
        document.getElementById('user-info').innerHTML = userInfoHtml;
    }
}
