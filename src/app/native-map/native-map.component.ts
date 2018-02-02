import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  //CameraPosition,
  //MarkerOptions,
  //Marker
} from '@ionic-native/google-maps';
import { Component, OnInit } from '@angular/core';
import * as MAP_STYLES from '../../map/maps.json';


@Component({
  selector: 'native-map',
  templateUrl: './native-map.component.html'
})
export class NativeMapComponent implements OnInit {
  id: string = 'map_' +
    (new Date()).getTime().toString() +
    '_' +
    Math.floor(Math.random() * 100000).toString();

  map: GoogleMap;

  mapOptions: GoogleMapOptions = {
    controls: {
      compass: true
    },
    camera: {
      target: {
        lat: 41.4992096,
        lng: -81.6862375
      },
      zoom: 18
    },
    styles: <any>MAP_STYLES,
    preferences: {
      building: false
    }
  };

  constructor() { }

  ngOnInit() {
    console.log(`NativeMap: did load ${this.id}`);
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create(this.id, this.mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Native map is ready!');

        // Now you can use all methods safely.
        //this.map.addMarker({
        //  title: 'Ionic',
        //  //icon: 'red',
        //  //animation: 'DROP',
        //  snippet: "This plugin is awesome!",
        //  position: {
        //    lat: 41.4992096,
        //    lng: -81.6862375
        //  }
        //})
        //  .then(marker => {
        //    marker.on(GoogleMapsEvent.MARKER_CLICK)
        //      .subscribe(() => {
        //        alert('clicked');
        //      });
        //  });
      });
  }
}
