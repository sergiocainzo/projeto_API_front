import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Atividade } from '../../model/Atividade';


@Component({
  selector: 'app-listagem',
  imports: [CommonModule, FormsModule],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemComponent {

  // Objeto Atividade
  atividade = new Atividade();

  // JSON da Atividade
  atividades: Atividade[] = [];

}
