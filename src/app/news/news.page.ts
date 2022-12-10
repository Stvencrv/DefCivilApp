import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  news: any; 
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.get();
  }
  async get(){
    (await this.apiService.getNews()).subscribe((res: any)=>{
     this.news = res.datos
    });
   }
}
