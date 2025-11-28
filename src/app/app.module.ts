import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './shared/component/test/test.component';
import { AuthComponent } from './shared/component/auth/auth.component';
import {HttpClientModule} from "@angular/common/http"
// import { HttpClientModule } from '@angular/common/http';
// import { PostCardComponent } from './shared/component/post-card/post-card.component';

// import {HttpClientModule} from '@angular/common/http';
import { PostCardComponent } from './shared/component/post-card/post-card.component'
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AuthComponent,
    PostCardComponent,
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
