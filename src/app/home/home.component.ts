import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: 'Splashscreen',
    moduleId: module.id,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public currentActivity: string;
  private storageEventListener: any;

  constructor(
    private _page: Page,
    private _router: RouterExtensions
  ) {
    this._page.actionBarHidden = true;
  }

  ngOnDestroy(): void {
    this.storageEventListener && this.storageEventListener.unsubscribe();
  }

  ngOnInit(): void {
    console.log('[Home] >> No session exists, redirect to splashscreen');
    this._router.navigate(['/create'], { clearHistory: true });
  }
}

