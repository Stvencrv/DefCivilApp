import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ModalController } from '@ionic/angular';
import { MeasuresModalPage } from '../measures-modal/measures-modal.page';

@Component({
  selector: 'app-measures',
  templateUrl: './measures.page.html',
  styleUrls: ['./measures.page.scss'],
})
export class MeasuresPage implements OnInit {

  measures: any;
  constructor(private apiService: ApiService, private modalController: ModalController) { }

  ngOnInit() {
    this.get();
  }
  async get(){
    (await this.apiService.getMeasures()).subscribe((res: any)=>{
     this.measures = res.datos     
    });
   }
  async modal(obj: any){
    const modal = await this.modalController.create({
      component: MeasuresModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        measure: obj,
      }
    });
    return await modal.present();
  }

}
