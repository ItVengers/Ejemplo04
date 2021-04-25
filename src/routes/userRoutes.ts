import { Router, Request, Response } from 'express';
import userController from "../controller/userController";

class UserRoutes{
	public router: Router = Router();
	constructor(){
		this.config();
	}
	config():void{
		this.router.get('/',(req:Request,res:Response)=> {
            res.send('Main!!!');
            // res.render("partials/principal");
        });
		// this.router.get('/signin',(req:Request,res:Response)=> {
		// 	res.send('Sign In!!!');
		// 	//res.render("partials/principal");
		// });    
		// Login
		this.router.get('/signin',userController.signin);
		this.router.post('/signin',userController.login);
		//registro
		this.router.get('/signup',userController.signup); // mostramos el formulario
		this.router.post('/signup',userController.addUser); // recibimos los datos
		
		//Home del usuario
		// this.router.get('/home',(req:Request,res:Response)=> {
        // res.send('Bienvenido!!!')});
		this.router.get('/home',userController.home);
		this.router.post('/home',userController.process);

		//CRUD
		this.router.get('/list',userController.list);
		this.router.get('/find/:id',userController.find);
		this.router.post('/add',userController.addUser);
		this.router.put('/update/:id',userController.update);
		this.router.delete('/delete/:id',userController.delete);
		// 
		
		this.router.get('/control', userController.control);
		this.router.get('/delete/:id', userController.controlDelete);
	}
}

//Exportamos el enrutador con 

const userRoutes = new UserRoutes();
export default userRoutes.router;