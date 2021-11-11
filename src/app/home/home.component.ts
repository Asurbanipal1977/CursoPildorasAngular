import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../services/empleados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private empleadosService: EmpleadosService){
    this.empleados = this.empleadosService.listarEmpleados();
  }

  ngOnInit() {
  }

  titulo = 'Listado de Empleados';

  empleado: Empleado = new Empleado("","","",0);
  empleados: Empleado[] = [];

  crearEmpleado():void{
    this.empleadosService.crearEmpleado(this.empleado);
  }

}
