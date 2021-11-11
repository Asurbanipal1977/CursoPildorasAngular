import { Injectable } from '@angular/core';
import { Empleado } from '../empleado.model';
import { MostrarMensajeService } from './mostrar-mensaje.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private mostrarMensajeService: MostrarMensajeService) { }

  private empleados: Empleado[] = [
    {nombre:"Pepe",apellido:"Sánchez",cargo:"Analista",salario:1500},
    {nombre:"David",apellido:"Pérez",cargo:"Programador",salario:1200},
    {nombre:"Miguel Ángel",apellido:"Martínez Eusebio",cargo:"Programador",salario:1400},
    {nombre:"Julián",apellido:"Pérez Sánchez",cargo:"Programador",salario:1600}
  ];  

  listarEmpleados(): Empleado[]{
    return this.empleados;
  }

  crearEmpleado(empleado: Empleado)
  {
    this.mostrarMensajeService.muestraMensaje(`Se da de alta el empleado de nombre
          ${empleado.nombre} ${empleado.apellido}  y con el cargo ${empleado.cargo}`);
    
    this.empleados.push(empleado);
  }

}
