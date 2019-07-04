import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { setOrientation, disableRotation } from 'nativescript-orientation';
import * as utils from 'tns-core-modules/utils/utils';

@Component({
  selector: 'GenerateScreen',
  moduleId: module.id,
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateScreenComponent implements OnInit, OnDestroy {
  @ViewChild('generateLayout') generateLayout: ElementRef;

  public accountGenerated: boolean;
  public entropyCreated: boolean;
  public currentEntropy: number;
  public maxEntropy: number;
  public activeStep: number;

  private layout: any;

  private busyClick: boolean;
  private registering: boolean;

  constructor(
    private _page: Page
  ) {
    this._page.actionBarHidden = true;
    this._page.cssClasses.add('welcome-page-background');
    this._page.backgroundSpanUnderStatusBar = true;
    setOrientation('portrait');
    disableRotation();

    this.entropyCreated   = false;
    this.accountGenerated = false;
    this.busyClick        = false;
    this.registering      = false;
  }

  ngOnInit(): void {
    this.layout         = this.generateLayout.nativeElement;
    this.currentEntropy = 0;
  }

  ngOnDestroy(): void {
  }

  public openTos() {
    utils.openUrl('https://odin.chat/terms-of-use');
  }

  public openPrivacy() {
    utils.openUrl('https://odin.chat/privacy-policy');
  }
}
