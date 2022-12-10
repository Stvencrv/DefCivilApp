import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

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
