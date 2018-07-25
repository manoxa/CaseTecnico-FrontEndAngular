import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserService } from './services/user.service';
import { UserComponent } from './components/user/user.component';
import { routes } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    UserComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    routes
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
