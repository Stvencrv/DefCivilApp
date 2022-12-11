import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
declare var google: any;
interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
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
  }

  async get(){
    (await this.apiService.getHostels()).subscribe((res: any)=>{
     this.hostels = res.datos
     this.loadMap();
    });
  }

  loadMap() {
    const myMap = document.getElementById('map');
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = myMap!;
    // create LatLng object
    const myLatLng = {lat: 18.483402, lng: -69.929611};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 13
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.renderMarkers();
      mapEle.classList.add('show-map');
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }
  renderMarkers() {
    this.hostels.forEach((marker: any) => {
      const mark = {
        position: {
          lat: parseFloat(marker.lng),
          lng: parseFloat(marker.lat),
        },
        title: 'Hostel'
      }
      this.addMarker(mark);
    });
    // this.markers.forEach(marker => {
    //   this.addMarker(marker);
    // });
  }
  

}
