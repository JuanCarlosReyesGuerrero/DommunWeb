import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/Services/token.service';
import { AgenteService } from 'src/app/Services/agente.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})

export class AgentsComponent implements OnInit {
  public agents;
  invalidToken: boolean;

  constructor(private tokenService: TokenService, private agenteService: AgenteService) { }

  ngOnInit() {

    this.tokenService.getToken();

    this.agenteService.getAgents().subscribe((objRespuesta) => {
      this.agents = objRespuesta.data;
    });
  }
}



//https://www.youtube.com/watch?v=1BYDxq0S-WQ&t=1209s
//https://www.youtube.com/watch?v=NSQHiIAP7Z8&t=348s


//https://javadesde0.com/consumiendo-una-api-desde-un-servicio-en-angular/
//https://codingpotions.com/angular-servicios-llamadas-http