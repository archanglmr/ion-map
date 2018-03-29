import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalContentPage } from '../modal-content/modal-content';

/**
 * Generated class for the ModalTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-test',
  templateUrl: 'modal-test.html',
})
export class ModalTestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalTestPage');
  }

  showModal() {
    let modal = this.modalCtrl.create(
      ModalContentPage,
      {str: 'Hello World'},
      {
        cssClass: 'mymodal'
      });
    modal.present();
  }

}
