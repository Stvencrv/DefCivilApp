import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-measures-modal',
  templateUrl: './measures-modal.page.html',
  styleUrls: ['./measures-modal.page.scss'],
})
export class MeasuresModalPage implements OnInit {
  @Input() measure: any;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}
