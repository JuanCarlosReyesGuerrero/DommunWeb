import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { response, Router } from 'express';
import { truncate } from 'fs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit {
  public agents;
  public token;
  objAgentes: any;

  invalidToken: boolean;

  /*
  constructor(public appService:AppService) { }

  ngOnInit() {
    this.agents = this.appService.getAgents();
    console.log(this.agents);
  }
*/




  constructor(private http: HttpClient) { }

  ngOnInit() {

    let httpHeaders: HttpHeaders = new HttpHeaders();

    const credentials = {
      'key': 'Yh2k7QSu4l8CZg5p6X3Pna9L0Miy4D3Bvt0JVr87UcOj69Kqw5R2Nmf4FWs03Hdx',
      'apiKey': 'Yb45&AcJAj4D5n@zE3KF0N%CJF5Owjk0s1*uL%gX!3L2qCT2xw'
    }

    this.http.post("https://localhost:7207/api/AuthToken", credentials)
      .subscribe(response => {
        this.token = (<any>response).token;
        localStorage.setItem("jwt", this.token);

        console.log(this.token);

        this.invalidToken = false;
      }, err => {
        this.invalidToken = true;
      })

      httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + this.token);

    this.http.get("https://localhost:7207/api/Agente/GetAllAgentes")
      .subscribe(response => {
        this.objAgentes = response;
        this.agents = this.objAgentes.data;
        console.log(this.agents);

      }, err => {
        console.log(err);
      })
  }

}



//https://www.youtube.com/watch?v=1BYDxq0S-WQ&t=1209s
//https://www.youtube.com/watch?v=NSQHiIAP7Z8&t=348s