import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as firebase from 'firebase';
import { Autenticacao } from 'src/app/autenticacao.service';
import { CadQuadra } from '../../cad-quadra.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private autenticacao:Autenticacao, private Cad: CadQuadra){}
  ngOnInit(): void {
      
  }
  public Quadras:any
  public teste: any =0

  public Form: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'senha': new FormControl(null)

  })


    public Recuperar(){
      
      this.Cad.RecuperarQuadras()
      .then((quadras:any) => {
        this.Quadras=quadras
        console.log(quadras)
      })
    }
    public  Deletar(dados:any){
      let dado =dados.key
      console.log(dado)
      this.Cad.test(dado)
      .then(()=>{
        console.log('postagem deletada')
      })
      
    }
    Sair(){
      this.autenticacao.sair()
  
    }
}
