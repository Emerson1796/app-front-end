import { Stove } from './models/Stove.js';
import { UserService } from './services/UserService.js';
import { UserView } from './views/UserView.js';

document.addEventListener('DOMContentLoaded', () => {
    const userService = new UserService();
    const userView = new UserView(userService);
    userView.render();

    new Stove("Silver", "60x60x85cm", "BrandName", "app");
});
