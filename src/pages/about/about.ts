import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  //CameraPosition,
  //MarkerOptions,
  //Marker
} from '@ionic-native/google-maps';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as MAP_STYLES from '../../map/maps.json';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  map: GoogleMap;
  caption: String = 'Default caption';

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    let mapOptions: GoogleMapOptions = {
      controls: {
        compass: true
      },
      camera: {
        target: {
          lat: 41.4992096,
          lng: -81.6862375
        },
        zoom: 18,
        //tilt: 30
      },
      styles: <any>MAP_STYLES,
      preferences: {
        building: false
      }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        // Now you can use all methods safely.
        this.map.addMarker({
          title: 'Ionic',
          //icon: 'red',
          //animation: 'DROP',
          snippet: "This plugin is awesome!",
          position: {
            lat: 41.4992096,
            lng: -81.6862375
          }
        })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                this.caption = 'You clicked my pin';
                alert('clicked');
              });
          });
      });
  }
}
