import { Component } from '@angular/core';
import { Autenticacao } from 'src/app/autenticacao.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private sair:Autenticacao){

  }
  
  menuVisible = false;

  menuShow() {
    this.menuVisible = !this.menuVisible;
  }

  Sair(){
    this.sair.sair()

  }
}
