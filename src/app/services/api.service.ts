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
}

