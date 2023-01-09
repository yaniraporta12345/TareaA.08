import { Component } from '@angular/core';

@Component({
  selector: 'app-validar',
  templateUrl: './validar.component.html',
  styleUrls: ['./validar.component.css']
})
export class ValidarComponent {
  edad = "";
  mensaje ="";
  resultado = true;

  validarEdad(edad:string){
    if(edad >= "18"){
      this.resultado = true;
      this.mensaje="Eres Mayor de edad, puedes Ingresar"
    }else{
      this.resultado = true;
      this.mensaje = "Eres menor de edad, no puedes Ingresar"
    }

  }
}
