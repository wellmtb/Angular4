import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {appRoutes} from './rotas/app.routes' // Deve vir primeiro
import { AppComponent }  from './app.component';
import {MenuComponent} from './menu/menu.component';
import { VerificaCh} from './filters/verificach.filter';
import { SubLista} from './filters/sublista.filter';

//Usando as rotas
import {LogoComponent} from './logo/logo.component';
import {CadastroComponent} from './cadastro/cadastro.component';
import {ListaComponent} from './lista/lista.component';
import {NotFoundComponent} from './erro/notFound.component';
import {MasterDetailComponent} from './masterdetail/masterdetail.component';

//Services
import {CursosService} from './services/cursos.service';


@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes),FormsModule ],//modulos usados na aplicação

  declarations: [ AppComponent,
                  MenuComponent,
                  LogoComponent,
                  CadastroComponent,
                  ListaComponent,
                  NotFoundComponent ,
                  MasterDetailComponent,
                  VerificaCh,
                  SubLista], //componentes usados na aplicação

  providers: [ CursosService],

  bootstrap:    [ AppComponent ] // indica qual o componente inicial da aplicação
})
export class AppModule { }
