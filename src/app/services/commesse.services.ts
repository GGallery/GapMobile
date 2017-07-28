

import { Commessa } from "../models/commessa";
import { Injectable } from "@angular/core";
import { Headers, Http, Response } from '@angular/http';
import { Observable } from "rxjs/Rx";
// import 'rxjs/Rx';
// import { Observable } from 'rxjs/Observable';


@Injectable()
export class CommesseServices {

    commesse: Commessa[] = [];
    url: string = 'http://localhost/database.php';

    constructor(private http: Http) {
        this.commesse = [
            { id: 1, protocollo: this.generateProtocollo(), oggetto: 'test1' },
            { id: 2, protocollo: this.generateProtocollo(), oggetto: 'test2' },
            { id: 3, protocollo: this.generateProtocollo(), oggetto: 'test3' }
        ]
    }


    generateProtocollo(): string {

        let valore = "G" + Math.random() * 100;
        return valore;
    }

    getItems() {
        // return this.commesse;
        const header = new Headers({'Content-type': 'application/json'});
        return this.http.get(this.url + "?method=get")
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



