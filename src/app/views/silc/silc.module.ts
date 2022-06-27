
import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';

import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';

import { CollapseModule } from 'ngx-bootstrap/collapse';


import { NgPipesModule } from 'ngx-pipes';


import { SilcRoutingModule } from './silc-routing.module';
import { InicioComponent } from './inicio/inicio.component';

/* Inicio componentes Javier */
/*import { RolesComponent } from './MODULO DE CONTROL DE USUARIOS1/roles/roles.component';
import { NuevoRolComponent } from './MODULO DE CONTROL DE USUARIOS1/nuevo-rol/nuevo-rol.component';
import { NuevoUsuarioComponent } from './MODULO DE CONTROL DE USUARIOS1/nuevo-usuario/nuevo-usuario.component';
import { UsuariosComponent } from './MODULO DE CONTROL DE USUARIOS1/usuarios/usuarios.component';
import { MenuRolComponent } from './MODULO DE CONTROL DE USUARIOS1/menu-rol/menu-rol.component';*/


/*import { MenusComponent } from './MODULO DE CONTROL DE USUARIOS1/menus/menus.component';
import { NuevoMenuComponent } from './MODULO DE CONTROL DE USUARIOS1/nuevo-menu/nuevo-menu.component';*/

import { ShareModule } from '../../share/share.module';
import { FabricantesComponent } from './MODULO DE CONTROL DE SISTEMAS/fabricantes/fabricantes.component';
import { FrmFabricantesComponent } from './MODULO DE CONTROL DE SISTEMAS/frm-fabricantes/frm-fabricantes.component';

import { DashboardAdministradorComponent } from './DASHBOARD/dashboard-administrador/dashboard-administrador.component';


// import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
 


import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CargarExcelFabricanteComponent } from './MODULO DE PROCESOS/cargar-excel-fabricante/cargar-excel-fabricante.component';
import { ChartsModule } from 'ng2-charts';
// import { NotifOrdenesComponent } from './NOTIFICACIONES/notif-ordenes/notif-ordenes.component';
// import { NotifPedidosComponent } from './NOTIFICACIONES/notif-pedidos/notif-pedidos.component';

@NgModule({
  /*declarations: [InicioComponent, RolesComponent, NuevoRolComponent, NuevoUsuarioComponent, 
    UsuariosComponent, MenuRolComponent, 
     MenusComponent, NuevoMenuComponent, FabricantesComponent, FrmFabricantesComponent,  
    DashboardAdministradorComponent, 
    CargarExcelFabricanteComponent,
    
  ]*/ declarations: [InicioComponent, FabricantesComponent, FrmFabricantesComponent,  
    DashboardAdministradorComponent, 
    CargarExcelFabricanteComponent,
    
  ],
  imports: [HttpModule, FormsModule,
    SilcRoutingModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    NgPipesModule,
    // BrowserModule,
    CommonModule,ShareModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    ReactiveFormsModule,
    PaginationModule.forRoot()
  ]
})
export class SilcModule { }
