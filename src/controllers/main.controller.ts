import {Application} from "express"
import {MainService} from "../services/main.service"

//interactua con las rutas que se usaran 
export class Maincontroller{
    private MainServices: MainService;
    constructor(private app:Application){
        this.MainServices = new MainService();
        this.routes();
    }

    public routes(){
        this.app.get("/",this.MainServices.welcome)
    }
}
