import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  videos: any;
  urls: any[] = [];
  sanitizerUrl: any;
  constructor(private apiService: ApiService, private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.get();
  }

  async get(){
    (await this.apiService.getVideos()).subscribe((res: any)=>{
     this.videos = res.datos
     this.videos.forEach((i: any) => {
      this.sanitizerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${i.link}`);
      this.urls.push(this.sanitizerUrl.changingThisBreaksApplicationSecurity)
     });
    });
   }

}
