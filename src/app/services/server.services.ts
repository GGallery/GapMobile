import { Injectable } from "@angular/core";
import { Http, Response, Headers } from '@angular/http';
import { Observable } from "rxjs/Rx";
import { Storage } from '@ionic/storage';
import { ToastController } from "ionic-angular";


// import 'rxjs/Rx';
// import { Observable } from 'rxjs/Observable';


@Injectable()
export class ServerServices {

    url: string = 'http://office.ggallery.dev/api/';
    public api_token: string;
    public isAuth = false;
    public User: any;



    constructor(
        private http: Http,
        private storage: Storage,
        public toastCtrl: ToastController, ) {

    }

    getAssenti() {

        let method = "assenti"
        let token = "?token=" + this.api_token
        return this.http.get(this.url + method + token)
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


    get_all_commesse() {

        let method = "commesse_all"
        let token = "?token=" + this.api_token

        return this.http.get(this.url + method + token)
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

    get_mie_commesse() {

        let method = "commesse_mie"
        let token = "?token=" + this.api_token

        return this.http.get(this.url + method + token)
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

    get_calendario(data: string) {
        let method = "get_calendario"
        let token = "?token=" + this.api_token
        let querydata = "&giorno="+data;

        return this.http.get(this.url + method + token+ querydata)
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

    commessa_store(f: any) {

        console.log(f);

        const method = 'commessa_store';
        const params = new URLSearchParams();
        params.set('token', this.api_token);
        params.set('commessa_id', f.value.id_commessa);
        params.set('giorno', f.value.giorno);
        params.set('n_ore', f.value.n_ore);
        params.set('type', f.value.tipologia);
        params.set('dalle_ore', '00');



        const headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });


        return this.http.post(this.url + method, params.toString(), { headers: headers })
            .map(
            (response: Response) => {
                const data = response.json();
                return data;
            },

        ).catch(
            (error: Response) => {
                return Observable.throw('Errore in lettura');
            }
            )


    }

    userAuth(email: string, password: string) {
        // set a key/value
        var urlParam = 'login?email=' + email + '&password=' + password;


        // const method = 'login?email=antonio@ggallery.it&password=GGallery00';

        return this.http.get(this.url + urlParam)
            .map(
            (response: Response) => {
                const data = response.json();
                if (data.valid == 'true') {
                    this.storage.set('api_token', data.result);
                    this.api_token = data.result;
                    this.isAuth = true;
                    this.userInfo().subscribe();
                    let account = { 'email': email, 'password': password }
                    this.storage.set('account', account);
                    return data;
                } else
                    return Observable.throw('Errore accesso');
            },

        ).catch(
            (error: Response) => {
                return Observable.throw('Errore in lettura');
            }
            )

    }


    userInfo() {
        // set a key/value
        var urlParam = 'get_user_details';

        urlParam += '?token=' + this.api_token;

        // const method = 'login?email=antonio@ggallery.it&password=GGallery00';

        return this.http.get(this.url + urlParam)
            .map(
            (response: Response) => {
                const data = response.json();
                this.storage.set('User', data.result);
                console.log('Bentornato ' + data.result.nome);

            },

        ).catch(
            (error: Response) => {
                return Observable.throw('Errore in lettura utente');
            }
            )

    }




}



