import { AcessoLogadoGuard } from './guards/acesso-logado.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProtegidoComponent } from './protegido/protegido.component';
import { Erro404Component } from './erro404/erro404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProtegidoComponent,
    Erro404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
   AcessoLogadoGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
