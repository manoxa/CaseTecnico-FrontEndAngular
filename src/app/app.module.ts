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
import { HttpClientModule } from '@angular/common/http';
import { RepositoryComponent } from './components/repository/repository.component';
import { RepositoryService } from './services/repository.service';
import { DetailService } from './services/detail.service';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    UserComponent,
    RepositoryComponent,
    DetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    routes
  ],
  providers: [
    UserService,
    RepositoryService,
    DetailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
