import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { PhotoDetailComponent } from './photo-detail.component';
import { LightboxComponent } from './lightbox.component';
import {CarouselComponent} from './carousel.component'

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, PhotoDetailComponent, LightboxComponent,CarouselComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }