import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-content',
  templateUrl: 'modal-content.html',
})
export class ModalContentPage {
  str: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams)
  { }

  ionViewDidLoad() {
    this.str = this.navParams.data.str;
  }
}
