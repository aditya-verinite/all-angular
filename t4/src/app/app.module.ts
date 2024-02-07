import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AbcComponent } from './abc/abc.component';
import { SwipeComponent } from './swipe/swipe.component';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavComponent,
    
    

  ],
  imports: [
    BrowserModule,AbcComponent,SwipeComponent,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
