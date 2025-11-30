import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './shared/component/test/test.component';
import { AuthComponent } from './shared/component/auth/auth.component';
import {HttpClientModule} from "@angular/common/http"
// import { HttpClientModule } from '@angular/common/http';
// import { PostCardComponent } from './shared/component/post-card/post-card.component';

// import {HttpClientModule} from '@angular/common/http';
import { PostCardComponent } from './shared/component/post-card/post-card.component';
import { PhotosComponent } from './shared/component/photos/photos.component';
import { Test1Component } from './shared/component/test1/test1.component';
import { Auth1Component } from './shared/component/auth1/auth1.component';
import { GetConfirmComponent } from './shared/component/get-confirm/get-confirm.component'
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AuthComponent,
    PostCardComponent,
    PhotosComponent,
    Test1Component,
    Auth1Component,
    GetConfirmComponent,
    // PostCardComponent,
    // PostCardComponent
  ],
  imports: [BrowserModule, 
    HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule {
  
}
