import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading: boolean;

  constructor(public loadingController: LoadingController) { }

  async show() {
    this.isLoading = true;
    return await this.loadingController.create({
      duration: 5000,
    }).then(a => {
      a.present().then(() => {
        console.log('loader shown');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('loader abort showing'));
        }
      });
    });
  }

  async hide() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('loader closed'));
  }
}
