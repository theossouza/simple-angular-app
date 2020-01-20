import { DataComponent } from './piloto/documentos/consulta/data/data.component';
import { IdentificacaoComponent } from './piloto/documentos/consulta/identificacao/identificacao.component';
import { NomeComponent } from './piloto/documentos/consulta/nome/nome.component';
import { PersonaComponent } from './piloto/estrategias/persona/persona.component';
import { ArvoreComponent } from './piloto/estrategias/arvore/arvore.component';
import { ConfigurarComponent } from './piloto/estrategias/configurar/configurar.component';
import { SinteticoComponent } from './piloto/documentos/sintetico/sintetico.component';
import { AnaliticoComponent } from './piloto/documentos/analitico/analitico.component';
import { EstrategiasComponent } from './piloto/estrategias/estrategias.component';
import { DocumentosComponent } from './piloto/documentos/documentos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'piloto/documentos', component: DocumentosComponent},
  { path: 'piloto/estrategias', component: EstrategiasComponent},
  { path: 'piloto/documentos/analitico', component: AnaliticoComponent},
  { path: 'piloto/documentos/sintetico', component: SinteticoComponent},
  { path: 'piloto/estrategias/configurar', component: ConfigurarComponent},
  { path: 'piloto/estrategias/arvore', component: ArvoreComponent},
  { path: 'piloto/estrategias/persona', component: PersonaComponent},
  { path: 'piloto/documentos/consulta/nome', component: NomeComponent},
  { path: 'piloto/documentos/consulta/identificacao', component: IdentificacaoComponent},
  { path: 'piloto/documentos/consulta/data', component: DataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
