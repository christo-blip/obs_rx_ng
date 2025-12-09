import { Injectable } from "@angular/core";
@Injectable({
    providedIn:'root'
})

export class LoggingService{

    checkservie(){
        console.log("the service has added properly")
    }
}