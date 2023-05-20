import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseApi } from '../Interfaces/response-api';
import { Token } from '../Interfaces/token';
//import { Agente } from '../Interfaces/agente';

@Injectable({
  providedIn: 'root'
})
export class AgenteService {

  private urlApi: string = environment.endpoint

  constructor(private http: HttpClient) { }

  generaToken(request: Token): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(`${this.urlApi}AuthToken`, request)
  }

  getAgents(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(`${this.urlApi}Agente/GetAllAgentes`)
  }

  getAgent(Id: number): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(`${this.urlApi}Agente/GetAgente?Id=${Id}`)
  }

}
