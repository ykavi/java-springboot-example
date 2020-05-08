import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MyHeaderComponent} from './my-header/my-header.component';
import {MyFooterComponent} from './my-footer/my-footer.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MyCenterComponent} from './my-center/my-center.component';
import {MyHomePageComponent} from './my-home-page/my-home-page.component';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {TokenInterceptorService} from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    MyFooterComponent,
    MyCenterComponent,
    MyHomePageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
   {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  private static ErrorHandlerService: any;
}
