import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class UyeService {

    public url = 'http://localhost:8080/list';
    public saveUrl = 'http://localhost:8080/kayit';

    constructor(public http: HttpClient) {
    }

    getAllUye() {
        return this.http.get(this.url);
    }

    postPerson(uye) {
        return this.http.post(this.saveUrl, uye);
    }

}
