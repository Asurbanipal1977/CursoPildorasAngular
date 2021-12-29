import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../services/empleados.service';

@Component({
  selector: 'app-actualiza',
  templateUrl: './actualiza.component.html',
  styleUrls: ['./actualiza.component.css']
})
export class ActualizaComponent implements OnInit {

  constructor(private router:Router, private empleadosService: EmpleadosService, private activateRoute: ActivatedRoute) { 
    this.empleados = this.empleadosService.listarEmpleados();
  }

  ngOnInit() {
    this.indice = this.activateRoute.snapshot.params['id'];
    this.empleado=this.empleadosService.listarEmpleados()[this.indice]!;
  }

  volverHome()
  {
      this.router.navigate(['']);
  }

  empleado: Empleado = new Empleado("","","",0);
  empleados: Empleado[] = [];
  indice:number=0;

  modificarEmpleado():void{
    this.empleadosService.modificarEmpleado(this.empleado, this.indice);
    this.router.navigate(['']);
  }

  eliminarEmpleado():void{
    this.empleadosService.eliminarEmpleado(this.indice);
    this.router.navigate(['']);
  }


}
