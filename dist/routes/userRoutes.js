"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controller/userController"));
class UserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => {
            res.send('Main!!!');
            // res.render("partials/principal");
        });
        // this.router.get('/signin',(req:Request,res:Response)=> {
        // 	res.send('Sign In!!!');
        // 	//res.render("partials/principal");
        // });    
        // Login
        this.router.get('/signin', userController_1.default.signin);
        this.router.post('/signin', userController_1.default.login);
        //registro
        this.router.get('/signup', userController_1.default.signup); // mostramos el formulario
        this.router.post('/signup', userController_1.default.addUser); // recibimos los datos
        //Home del usuario
        // this.router.get('/home',(req:Request,res:Response)=> {
        // res.send('Bienvenido!!!')});
        this.router.get('/home', userController_1.default.home);
        this.router.post('/home', userController_1.default.process);
        //CRUD
        this.router.get('/list', userController_1.default.list);
        this.router.get('/find/:id', userController_1.default.find);
        this.router.post('/add', userController_1.default.addUser);
        this.router.put('/update/:id', userController_1.default.update);
        this.router.delete('/delete/:id', userController_1.default.delete);
        // 
        this.router.get('/control', userController_1.default.control);
        this.router.get('/delete/:id', userController_1.default.controlDelete);
    }
}
//Exportamos el enrutador con 
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
//# sourceMappingURL=userRoutes.js.map