import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  async getServices(){
    return this.http.get('https://adamix.net/defensa_civil/def/servicios.php');
  }
  async getNews(){
    return this.http.get('https://adamix.net/defensa_civil/def/noticias.php');
  }

  async getVideos(){
    return this.http.get('https://adamix.net/defensa_civil/def/videos.php');
  }
  async getHostels(){
    return this.http.get('https://adamix.net/defensa_civil/def/albergues.php');
  }
  async getMeasures(){
    return this.http.get('https://adamix.net/defensa_civil/def/medidas_preventivas.php');
  }
  async getMembers(){
    return this.http.get('https://adamix.net/defensa_civil/def/miembros.php');
  }

 async postVolunteer(volunteer: FormData) {
  return this.http.post('https://adamix.net/defensa_civil/def/registro.php', volunteer);
 }
}

