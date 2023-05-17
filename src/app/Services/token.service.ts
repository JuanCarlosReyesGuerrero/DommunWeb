import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseApi } from '../Interfaces/response-api';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  public token;
  invalidToken: boolean;
  public requestOptions

  private urlApi: string = environment.endpoint

  constructor(private http: HttpClient) { }

  getToken() {

    const credentials = {
      'key': environment.credentialsKey,
      'apiKey': environment.credentialsApiKey
    }

    this.http.post<ResponseApi>(`${this.urlApi}AuthToken`, credentials)
      .subscribe(response => {
        this.token = (<any>response).token;
        localStorage.setItem("jwt", this.token);
        this.invalidToken = false;
      }, err => {
        this.invalidToken = true;
      });

    /*
        let auth_token = localStorage.getItem("jwt");
    
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.token
        });
    
        const requestOptions = { headers: headers };    
    
        return requestOptions;
    */



  }
}
