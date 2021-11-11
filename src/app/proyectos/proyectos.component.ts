import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../services/empleados.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(private router:Router, private empleadosService: EmpleadosService) { 
    this.empleados = this.empleadosService.listarEmpleados();
  }

  ngOnInit() {
  }

  volverHome()
  {
      this.router.navigate(['']);
  }

  empleado: Empleado = new Empleado("","","",0);
  empleados: Empleado[] = [];

  crearEmpleado():void{
    this.empleadosService.crearEmpleado(this.empleado);
    this.router.navigate(['']);
  }

}
