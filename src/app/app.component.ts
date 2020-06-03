import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Cardápio',
      url: '/cardapio',
      icon: 'fast-food'
    },
    {
      title: 'Categorias',
      url: '/folder/Inbox',
      icon: 'list-circle'
    },
    {
      title: 'Pedidos',
      url: '/folder/Inbox',
      icon: 'basket'
    },
    {
      title: 'Restaurante',
      url: '/folder/Inbox',
      icon: 'restaurant'
    },
    {
      title: 'Entrega',
      url: '/folder/Inbox',
      icon: 'bicycle'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
