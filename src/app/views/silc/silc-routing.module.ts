import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// IMPORTAR COMPONENTES.
import { InicioComponent } from './inicio/inicio.component';

/* Inicio componentes Javier */
import { DashboardAdministradorComponent } from './DASHBOARD/dashboard-administrador/dashboard-administrador.component';
import { FabricantesComponent } from './MODULO DE CONTROL DE SISTEMAS/fabricantes/fabricantes.component';
import { FrmFabricantesComponent } from './MODULO DE CONTROL DE SISTEMAS/frm-fabricantes/frm-fabricantes.component';
import { CargarExcelFabricanteComponent } from './MODULO DE PROCESOS/cargar-excel-fabricante/cargar-excel-fabricante.component';


const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
    data: {
      title: 'Inicio'
    }
  },
  {
    path: 'fabricantes',
    component: FabricantesComponent,
    data: {
      title: 'Citas'
    }
  },
  {
    path: 'frm-fabricantes/:data',
    component: FrmFabricantesComponent,
    data: {
      title: 'Formulario de citas'
    }
  },
  {
    path: 'cargar-excel-fabricante',
    component: CargarExcelFabricanteComponent,
    data: {
      title: 'Cargar Fabricante'
    }
  },
  {
    path: 'Dashboard-Adm',
    component: DashboardAdministradorComponent,
    data: {
      title: 'Pantalla Gerencial Administrador'
    }
    
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SilcRoutingModule { }
