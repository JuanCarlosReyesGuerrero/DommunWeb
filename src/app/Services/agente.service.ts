import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseApi } from '../Interfaces/response-api';
import { Token } from '../Interfaces/token';
import { Agente } from '../Interfaces/agente';

@Injectable({
  providedIn: 'root'
})
export class AgenteService {

  //private urlApi: string = environment.endpoint + "/api/Agente/GetAllAgentes"
  private urlApi: string = environment.endpoint

  constructor(private http: HttpClient) { }

  generaToken(request: Token): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(`${this.urlApi}AuthToken`, request)
  }

  getAgents(): Observable<ResponseApi> {

    let auth_token = localStorage.getItem("jwt");

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    });

    const requestOptions = { headers: headers };

    return this.http.get<ResponseApi>(`${this.urlApi}Agente/GetAllAgentes`, requestOptions)
  }

  getAgent(Id: number): Observable<ResponseApi> {

    let auth_token = localStorage.getItem("jwt");

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    });

    const requestOptions = { headers: headers };

    return this.http.get<ResponseApi>(`${this.urlApi}Agente/GetAgente?Id=${Id}`, requestOptions)
  }

}
