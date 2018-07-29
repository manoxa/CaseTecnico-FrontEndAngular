import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { RepositoryService } from './services/repository.service';
import { DetailService } from './services/detail.service';
import { DetailComponent } from './components/detail/detail.component';
import MyErrorHandler from './handler/error.handler';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    DetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    DataTablesModule,
    routes
  ],
  providers: [
    UserService,
    RepositoryService,
    DetailService,
    {provide: ErrorHandler, useClass: MyErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
