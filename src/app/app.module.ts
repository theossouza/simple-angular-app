import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatMenuModule, 
  MatToolbarModule, 
  MatIconModule, 
  MatButtonModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PilotoComponent } from './piloto/piloto.component';
import { DocumentosComponent } from './piloto/documentos/documentos.component';
import { AnaliticoComponent } from './piloto/documentos/analitico/analitico.component';
import { SinteticoComponent } from './piloto/documentos/sintetico/sintetico.component';
import { EstrategiasComponent } from './piloto/estrategias/estrategias.component';
import { ConfigurarComponent } from './piloto/estrategias/configurar/configurar.component';
import { ArvoreComponent } from './piloto/estrategias/arvore/arvore.component';
import { PersonaComponent } from './piloto/estrategias/persona/persona.component';
import { ConsultaComponent } from './piloto/documentos/consulta/consulta.component';
import { NomeComponent } from './piloto/documentos/consulta/nome/nome.component';
import { IdentificacaoComponent } from './piloto/documentos/consulta/identificacao/identificacao.component';
import { DataComponent } from './piloto/documentos/consulta/data/data.component';
import { AuthComponent } from './auth/auth.component';
import { LogonComponent } from './auth/logon/logon.component';
import { LogoffComponent } from './auth/logoff/logoff.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PilotoComponent,
    DocumentosComponent,
    AnaliticoComponent,
    SinteticoComponent,
    EstrategiasComponent,
    ConfigurarComponent,
    ArvoreComponent,
    PersonaComponent,
    ConsultaComponent,
    NomeComponent,
    IdentificacaoComponent,
    DataComponent,
    AuthComponent,
    LogonComponent,
    LogoffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
