import { Commessa } from "../models/commessa";
import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Rx";
// import 'rxjs/Rx';
// import { Observable } from 'rxjs/Observable';


@Injectable()
export class CommesseServices {

    commesse: Commessa[] = [];
    url: string = 'http://www.tvsalute.net/database.php';

    constructor(private http: Http) {

    }
 
    generateProtocollo(): string {
        let valore = "G" + Math.random() * 100;
        return valore;
    }

    getItems(method) {

        return this.http.get(this.url + "?method="+method)
            .map(
            (response: Response) => {
                const data = response.json();
                console.log(data);
                return data;
            },

        ).catch(
            (error: Response) => {
                return Observable.throw('Errore in lettura');
            }
            )
    }






}



