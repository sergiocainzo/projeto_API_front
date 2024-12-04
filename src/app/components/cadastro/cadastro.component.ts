import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  // Variáveis de Visibilidade
  atividade: string = '';
  descricao: string = '';
  selectedOption: string = 'Option 2';
  condicaoAtendida: boolean = false;


  enviar() {
    alert("Cadastro enviado com sucesso!")
    console.log('Formulário enviado:', this.atividade, this.selectedOption, this.descricao);
    this.limpar();
  }

  limpar() {
    this.atividade = '';
    this.descricao = '';
    this.selectedOption = 'Option 2';
    console.log('Limpar chamado, valores redefinidos:', this.atividade, this.selectedOption, this.descricao);
    this.verificarCondicao();
  }

  verificarCondicao() {
    // A condição aqui é o campo de atividade não estar vazio
    this.condicaoAtendida = this.atividade.trim().length > 0 || this.descricao.trim().length > 0 || this.selectedOption.trim().length >0;
  }



}
