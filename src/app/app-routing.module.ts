import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './acesso/cadastro/cadastro.component';
import {AcessoComponent} from './acesso/acesso.component'
import { HomeComponent } from './Navegação/home/home.component';
import { LoginComponent } from './acesso/login/login.component';
import { MainpageComponent } from './Navegação/mainpage/mainpage.component';
import { CadastrarQuadrasComponent } from './Navegação/cadastrar-quadras/cadastrar-quadras.component';
import { Aut } from './Aut';

const routes: Routes = [
  {path: '', component:AcessoComponent},
  {path: 'cadastro', component: CadastroComponent}, 
  {path: 'login', component:LoginComponent},
  {path: 'main', component:MainpageComponent},
  { path: 'home', component: HomeComponent, canActivate: [Aut] },  
  {path:'cadastrarquadra', component:CadastrarQuadrasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
