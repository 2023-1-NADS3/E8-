import { Component } from '@angular/core';
import { Autenticacao } from 'src/app/autenticacao.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})

export class MainpageComponent {

   constructor(private sair:Autenticacao){}

   menuVisible = false;

  menuShow() {

    this.menuVisible  = !this.menuVisible;

  }


 Sair(){
   this.sair.sair()

 }

}
