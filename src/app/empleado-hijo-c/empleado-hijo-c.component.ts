import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { MostrarMensajeService } from '../services/mostrar-mensaje.service';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent implements OnInit {

  caracteristicas:string[] = [];

  
  constructor(private mostrarMensajeService: MostrarMensajeService) { }

  ngOnInit(): void {
  }

  anadirCaracteristica(nuevaCaracteristica: string) {
    this.mostrarMensajeService.muestraMensaje(`Se añade la característica ${nuevaCaracteristica}`);
    this.caracteristicas.push(nuevaCaracteristica);
  }

  @Input() ElemEmpleado!:Empleado;
  @Input() indice!:number;

}