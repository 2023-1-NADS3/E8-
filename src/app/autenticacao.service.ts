import { Usuario } from "./acesso/usuario.model";
import * as firebase from "firebase";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class Autenticacao {



    public token_id: any
    

    constructor(private rotas: Router) {

    }

    public CadUser(usuario: Usuario): Promise<any> {
       
        return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then((resposta: any) => {
                
                firebase.database().ref(`user_detail/${btoa(resposta.email)}`)
                    .push(usuario)
                alert('Cadastrado com sucesso!')
                this.rotas.navigate(['/login']);

            })
            .catch((err: Error) => console.log(err))
            .then((resposta: any) => { console.log(resposta) })
    }



    
    public Auth(email: string, senha: string): Promise<any> {
        console.log('autenticação no firebase')
        return firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((resposta: any) => {

                alert('Autenticado')
                firebase.auth().currentUser?.getIdToken()
                    .then((id: string) => {
                        this.token_id = id
                        console.log(this.token_id)
                        
                        localStorage.setItem('id_token', id)

                        this.rotas.navigate(['/main'])


                    })



            })
            .catch((err: Error) => {
                alert('erro')
                console.log(err)
            })

    }

    // deleta usuário do banco de dados
    public async DelUserBD(email: string): Promise<any> {

        const deletar = firebase.database().ref(`usuario_deletado/${btoa(email)}`);

        try {
            await deletar.remove();
            console.log('Dados deletados');
        } catch (err) {
            console.log(err);
        }
    }



    
    public desativarConta(): void {
        firebase.auth().currentUser?.delete()
            .then(() => {

                alert('Conta desativada ');
               
            })
            .catch((err: Error) => console.log(err));
    }



    public autenticado(): boolean {

        let ok: boolean = true
        if (this.token_id === undefined && localStorage.getItem('id_token') != null) {
            this.token_id = localStorage.getItem('id_token')

        }
        if (this.token_id === undefined) {
            this.rotas.navigate(['/']);
        }
        return this.token_id !== undefined




    }

    public sair() {

        firebase.auth().signOut()
            .then(() => {
                localStorage.removeItem('id_token')
                this.token_id = undefined
                this.rotas.navigate(['/']);
            })
            .catch((err) => { console.log(err) })

    }
    
}