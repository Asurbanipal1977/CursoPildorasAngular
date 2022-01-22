import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponent } from './actualiza/actualiza.component';
import { ErrorComponent } from './error/error.component';

const rutas: Routes=[
  {path:'',component: HomeComponent},
  {path:'proyectos',component: ProyectosComponent},
  {path:'quienes',component: QuienesComponent},
  {path:'contactos',component: ContactoComponent},
  {path:'actualiza/:id',component: ActualizaComponent},
  {path:'**', component: ErrorComponent},
];

@NgModule({
   declarations: [
      AppComponent,
      EmpleadoHijoCComponent,
      CaracteristicasEmpleadoCComponent,
      HomeComponent,
      ProyectosComponent,
      QuienesComponent,
      ContactoComponent,
      ActualizaComponent
   ],
   imports: [
	 BrowserModule,
   FormsModule,
   RouterModule.forRoot(rutas)
	],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
