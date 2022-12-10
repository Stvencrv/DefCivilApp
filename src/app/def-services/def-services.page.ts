import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-def-services',
  templateUrl: './def-services.page.html',
  styleUrls: ['./def-services.page.scss'],
})
export class DefServicesPage implements OnInit {

  services: any; 
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.get();
  }

  async get(){
   (await this.apiService.getServices()).subscribe((res: any)=>{
    this.services = res.datos
   });
  }
}
