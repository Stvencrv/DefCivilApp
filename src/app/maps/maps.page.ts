import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
declare let google: { maps: { Map: new (arg0: HTMLElement, arg1: { center: { lat: number; lng: number; }; zoom: number; }) => null; event: { addListenerOnce: (arg0: null, arg1: string, arg2: () => void) => void; }; Marker: new (arg0: { position: { lat: number; lng: number; }; map: null; }) => any; }; };
interface Marker {
  position: {
    lat: number;
    lng: number;
  };
}

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  map = null;
  marker!: Marker;
  hostels: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.get()
    this.loadMap();
  }

  async get(){
    (await this.apiService.getHostels()).subscribe((res: any)=>{
     this.hostels = res.datos
    });
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const myMap = document.getElementById('map');
    const mapEle: HTMLElement  = myMap!;
    // create LatLng object
    const myLatLng = {lat: 18.735693, lng: -70.162651};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 10
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      const myMarker = {
        position:{
          lat: parseFloat('-69.89178'),
          lng: parseFloat('18.47893')
        }
      };
      this.addMarker(myMarker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
    });
  }

  

}
