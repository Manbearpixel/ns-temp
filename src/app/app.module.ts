import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SnackBar } from 'nativescript-snackbar';
import { RouteReuseStrategy } from '@angular/router';
import { CustomRouteReuse } from './custom-route-reuse';

@NgModule({
  // Bootstrap – Creates components in declarations and inserts into DOM
  bootstrap: [
    AppComponent
  ],
  // Providers – Services this module needs to function properly, available globally if defined here
  providers: [
    SnackBar,
    { provide: RouteReuseStrategy, useClass: CustomRouteReuse }
  ],
  // Imports – Other modules that this module needs to function properly
  imports: [
    AppRoutingModule,
    NativeScriptModule,
    NativeScriptUISideDrawerModule,
    NativeScriptUIListViewModule
  ],
  // Declarations – What components belong to this module
  declarations: [
    AppComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
