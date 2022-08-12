import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PropertycardComponent } from './propertycard/propertycard.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { NavagationBarComponent } from './navagation-bar/navagation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertycardComponent,
    PropertyListComponent,
    NavagationBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
