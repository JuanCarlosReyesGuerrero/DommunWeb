import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { AppService } from 'src/app/app.service';
import { TokenService } from 'src/app/Services/token.service';
import { AgenteService } from 'src/app/Services/agente.service';

@Component({
  selector: 'app-our-agents',
  templateUrl: './our-agents.component.html',
  styleUrls: ['./our-agents.component.scss']
})
export class OurAgentsComponent implements OnInit {
  public agents;
  public config: SwiperConfigInterface = { };
  constructor(public appService:AppService,
    private tokenService: TokenService, 
    private agenteService: AgenteService) { }

  ngOnInit() {   

    this.tokenService.getToken();

    this.agenteService.getAgents().subscribe((objRespuesta) => {
      this.agents = objRespuesta.data;
    });
  }

  ngAfterViewInit(){
    this.config = {
      observer: true,
      slidesPerView: 4,
      spaceBetween: 16,       
      keyboard: true,
      navigation: true,
      pagination: false,
      grabCursor: true,        
      loop: false,
      preloadImages: false,
      lazy: true,  
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        600: {
          slidesPerView: 2
        },
        960: {
          slidesPerView: 3
        },
        1280: {
          slidesPerView: 4
        }
      }
    }
  }

}
