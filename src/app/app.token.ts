/*
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root",
})

export class AppToken {

    public token;
    invalidToken: boolean;
    public requestOptions

    constructor(private http: HttpClient) { }

    getToken() {

        const credentials = {
            'key': 'Yh2k7QSu4l8CZg5p6X3Pna9L0Miy4D3Bvt0JVr87UcOj69Kqw5R2Nmf4FWs03Hdx',
            'apiKey': 'Yb45&AcJAj4D5n@zE3KF0N%CJF5Owjk0s1*uL%gX!3L2qCT2xw'
        }

        console.log()

        this.http.post("https://localhost:7207/api/AuthToken", credentials)
            .subscribe(response => {
                this.token = (<any>response).token;

                localStorage.setItem("jwt", this.token);

                this.invalidToken = false;
            }, err => {
                this.invalidToken = true;
            });
    }
}


*/