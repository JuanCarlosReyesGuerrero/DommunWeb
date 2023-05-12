import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { AppToken } from 'src/app/app.token';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})

export class AgentsComponent implements OnInit {
  public agents;  
  invalidToken: boolean;

  constructor(public appService: AppService, public appToken: AppToken) { }  

  ngOnInit() {
    this.appToken.getToken();

    this.appService.getAgents().subscribe((objRespuesta) => {
      this.agents = objRespuesta.data;
      //console.log(this.agents);
    });
  }
}



//https://www.youtube.com/watch?v=1BYDxq0S-WQ&t=1209s
//https://www.youtube.com/watch?v=NSQHiIAP7Z8&t=348s


//https://javadesde0.com/consumiendo-una-api-desde-un-servicio-en-angular/
//https://codingpotions.com/angular-servicios-llamadas-http