import DataController from './controllers/data.controller';
import App from './app';
import IndexController from "./controllers/index.controller";
import UserController from './controllers/user.controller';
import TokenService from './modules/services/token.service';

const app: App = new App([
    new UserController(),
    new DataController(),
    // new IndexController()
]);

const tokenService = new TokenService();

setInterval(() => {
    tokenService.removeExpiredTokens();
}, 60 * 60 * 1000); // co 1 godzine

app.listen();