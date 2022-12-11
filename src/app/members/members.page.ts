import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {

  members: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.get();
  }
  async get(){
    (await this.apiService.getMembers()).subscribe((res: any)=>{
     this.members = res.datos
    });
   }

}
