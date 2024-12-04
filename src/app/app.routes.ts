import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListagemComponent } from './components/listagem/listagem.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'listagem', component: ListagemComponent },
  { path: 'cadastro', component: CadastroComponent }

];
