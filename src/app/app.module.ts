import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { ErrorComponent } from './components/error/error.component';
import { GithubService } from './services/github.service';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';





@NgModule({
      declarations: [
      AppComponent, 
      UserComponent, 
      ErrorComponent,
    ],
      imports: [
      BrowserModule, 
      ReactiveFormsModule, 
      HttpClientModule, 
      NgxSmartModalModule.forRoot(), 
      ModalModule.forRoot(), 
      AccordionModule.forRoot()
    ],
      providers: [
      GithubService
    ],
      bootstrap: [
      AppComponent
    ]
})
export class AppModule {}
