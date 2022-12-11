import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-hostel-modal',
  templateUrl: './hostel-modal.page.html',
  styleUrls: ['./hostel-modal.page.scss'],
})
export class HostelModalPage implements OnInit {
  @Input() hostel: any;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss();
  }

}
