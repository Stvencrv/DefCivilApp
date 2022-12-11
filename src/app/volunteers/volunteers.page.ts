import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.page.html',
  styleUrls: ['./volunteers.page.scss'],
})
export class VolunteersPage implements OnInit {
  cedula: any;
  nombre: any;
  apellido: any;
  correo: any;
  clave: any;
  telefono: any;
  result: any;
  constructor(private apiService: ApiService, private alertController: AlertController) { }

  ngOnInit() {
  }

  async send(){
    let form = new FormData(); 
    if (this.cedula != null && this.nombre != null && this.apellido != null && this.correo != null && this.clave != null && this.telefono != null) {
      form.append('cedula', this.cedula)
      form.append('nombre', this.nombre)
      form.append('apellido', this.apellido)
      form.append('correo', this.correo)
      form.append('clave', this.clave)
      form.append('telefono', this.telefono)

      this.post(form);

      return; 
    }

    this.presentAlert('Rellene los campos', 'Debe completar todo el formulario')
    
  }

  async post(obj: FormData){
    (await this.apiService.postVolunteer(obj)).subscribe((res: any)=>{
      this.result = res
      if (res.exito == true) {
        this.presentAlert('Formulario Enviado', res.mensaje)
        this.cedula = null;
        this.nombre= null;
        this.apellido= null;
        this.correo= null;
        this.clave = null;
        this.telefono= null;
        return;
      }
      this.presentAlert('Error al enviar', res.mensaje)

     });
  }

  async presentAlert(header: any, msg: any) {
    const alert = await this.alertController.create({
      header: 'Aviso!',
      subHeader: header,
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }

}
