import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Rx";
// import 'rxjs/Rx';
// import { Observable } from 'rxjs/Observable';


@Injectable()
export class ServerServices {

    url: string = 'http://office.ggallery.it/';

    constructor(private http: Http) {

    }

    getAssenti() {

        let method = "assenti"
        return this.http.get(this.url + method)
            .map(
            (response: Response) => {
                const data = response.json();
                return data;
            },

        ).catch(
            (error: Response) => {
                return Observable.throw('Errore in lettura assenti');
            }
            )
    }


    getItems(method) {
        return this.http.get(this.url + method)
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


    storeData(f: any): any {
        const method = "store";
        // const headers = new Headers({ 'ContentType': 'Json' });
        // this.http.put(this.url , f)

        return true;


    }

}



