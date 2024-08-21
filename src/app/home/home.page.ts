import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private C: ToastController) {}

  async presentToast(position: 'bottom') {
    const toast = await this.C.create({
      message: 'สวัดดีครับ',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

}
