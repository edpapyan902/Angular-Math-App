import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    ThirdComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'second',
        component: SecondComponent
      },
      {
        path: 'third',
        component: ThirdComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
