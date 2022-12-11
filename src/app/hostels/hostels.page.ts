import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ModalController } from '@ionic/angular';
import { HostelModalPage } from '../hostel-modal/hostel-modal.page';



@Component({
  selector: 'app-hostels',
  templateUrl: './hostels.page.html',
  styleUrls: ['./hostels.page.scss'],
})
export class HostelsPage implements OnInit {

  Filter: any;
  hostels: any = [];
  constructor(private apiService: ApiService, private modalController: ModalController) { }

  ngOnInit() {
    this.get();
  }

  async get(){
    (await this.apiService.getHostels()).subscribe((res: any)=>{
     this.hostels = res.datos
    });
   }

   async modal(obj: any){
    const modal = await this.modalController.create({
      component: HostelModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        hostel: obj,
      }
    });
    return await modal.present();
  }


}
