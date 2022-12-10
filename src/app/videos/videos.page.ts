import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  videos: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.get();
  }

  async get(){
    (await this.apiService.getVideos()).subscribe((res: any)=>{
     this.videos = res.datos
    });
   }

}
