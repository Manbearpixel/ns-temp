import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { DrawerTransitionBase, SlideInOnTopTransition } from 'nativescript-ui-sidedrawer';
import { SnackBar } from "nativescript-snackbar";

require('nativescript-platform-css');

import {
  connectionType,
  getConnectionType,
  startMonitoring,
  stopMonitoring
} from 'tns-core-modules/connectivity';

@Component({
  moduleId: module.id,
  selector: 'ns-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  private _activatedUrl: string;
  private _sideDrawerTransition: DrawerTransitionBase;
  public initAttempts: number;
  private storageEventListener: any;
  private accountEventListener: any;

  public userAccount: any;
  public connected: boolean;
  public isWalletView: boolean;
  public networkState: string;
  public osmServerError: boolean;

  constructor() {
    this.connected    = true;
    this.initAttempts = 0;

    this.setNetworkState = this.setNetworkState.bind(this);

    this.setNetworkState(getConnectionType());
    startMonitoring(this.setNetworkState);
  }

  setNetworkState(connection) {
    switch (connection) {
      case connectionType.none:
        this.networkState = 'none';
        break;
      case connectionType.wifi:
        this.networkState = 'wifi';
        break;
      case connectionType.mobile:
        this.networkState = 'mobile';
        break;
      case connectionType.ethernet:
        this.networkState = 'ethernet';
        break;
      default:
        this.networkState = 'unknown';
        break;
    }

    console.log(`CONNECTION TYPE DETECTED – ${this.networkState}`);
  }

  ngOnDestroy(): void {
    this.storageEventListener && this.storageEventListener.unsubscribe();
    this.accountEventListener && this.accountEventListener.unsubscribe();
    stopMonitoring();
  }

  ngOnInit(): void {
    this._activatedUrl = '/splashscreen';
    this._sideDrawerTransition = new SlideInOnTopTransition();
    this.isWalletView = false;
  }

  ngAfterViewInit(): void {
    console.log('[App] AfterViewInit');
  }

  get sideDrawerTransition(): DrawerTransitionBase {
    return this._sideDrawerTransition;
  }

  isComponentSelected(url: string): boolean {
    return this._activatedUrl.includes(url);
  }

  onNavItemTap(navItemRoute: string): void {
    console.log(`[App] NavigateTo [${navItemRoute}]`);
  }
}
