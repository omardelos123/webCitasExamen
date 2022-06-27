import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RestService, parametros,  Permisos, ValidadoresService, PaginacionService, UtilidadesService } from '../../../../services/_export';
declare var swal: any;
@Component({
  selector: 'app-fabricantes',
  templateUrl: './fabricantes.component.html',
  styleUrls: ['./fabricantes.component.scss']
})
export class FabricantesComponent implements OnInit {

  /*
    Variables Globales en la vista.
  */

  
 
  permisos = new Permisos().access;
  solicitud = new parametros().prm_control_sistemas;
  flag: boolean = false;

  filtrar_fabricantes:string = '';
  fabricantes: any = [];
  nombre_fabricante: string = '';

  //#region Variables de paginacion
  // array of all items to be paged
  private allItems: any[];
  // pager object
  pager: any = {};
  // paged items
  pagedItems: any[];
  //#endregion
  ArregloRespuesta: any[];

  constructor( private router: Router, private rest: RestService,
    private _validadores: ValidadoresService, private _paginacion: PaginacionService, private _utilidades: UtilidadesService) { }

  ngOnInit() {
    this.solicitud.accion_tipo = 'R';
    this.solicitud.id_compania =parseInt(localStorage.getItem("COMP"));
    this.run_fabricantes();
  }

  run_fabricantes() {
    this.flag = true;
    //this.rest.CRUD_fabricantes(this.solicitud)
    this.rest.CRUD_citas(this.solicitud)
      .then((respuesta) => {

        let resp: any = respuesta; // toda la respuesta del servidor.
        console.log("resp: " , resp);

        
       //let resp_validada = this._validadores.respuesta_api(resp); // la respuesta validada (si ocurrio erro o no).
       let resp_validada = true;
       

        //if (resp_validada.estado) {
          if (resp_validada) {
          // this.menus = resp.recordset;
          this.allItems = resp.recordset;
          this.ArregloRespuesta = resp.recordset;

          this.setPage(1); //para iniciar la paginacion.
        } else {
          this.allItems = [];
          this.setPage(1); //para iniciar la paginacion.
         // swal('Ocurrio un Error', resp_validada.msg, 'error');
        }

        this.flag = false;

      }, (error) => {
        this.flag = false;
        let respuesta = this._utilidades.manejo_status(error);
        swal('Oops', 'Ocurrió un error', 'error');
        console.log(error);
      });
  }

  //#region  METODOS CREAR, MODIFICAR, DETALLE

  crear() {
    const arreglo = {
      titulo: "CREAR CITA", estatus: "crear"
    }
    const parametros = btoa(unescape(encodeURIComponent(JSON.stringify(arreglo)))) // btoa(JSON.stringify(arreglo));
    this.router.navigate(['./silc/frm-fabricantes', parametros]);
  }

  modificar(datos: any) {
    const arreglo = {
      titulo: "MODIFICAR CITA", estatus: "modificar", datos: datos
    }
    const parametros = btoa(unescape(encodeURIComponent(JSON.stringify(arreglo)))) // btoa(JSON.stringify(arreglo));
    this.router.navigate(['./silc/frm-fabricantes', parametros]);
  }

  detalle(datos: any) {
    const arreglo = {
      titulo: "DETALLE DE  FABRICANTE", estatus: "detalle", datos: datos
    }
    const parametros = btoa(unescape(encodeURIComponent(JSON.stringify(arreglo)))) // btoa(JSON.stringify(arreglo));
    this.router.navigate(['./silc/frm-fabricantes', parametros]);
  }

  //#endregion

  //#region  Metodos para eliminar

  eliminar_modal(datos: any) {
    this.solicitud.accion_tipo = 'D';
    this.nombre_fabricante = datos.placa;
    this.solicitud.placa = datos.placa;
    this.solicitud.id_fabricante = datos.id_fabricante;
    this.solicitud.sw_activo = 0;
    swal({
      title: "Desea eliminar el registro? \n " + this.nombre_fabricante ,
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Si",
      cancelButtonText: "No",
      closeOnConfirm: false
    },
      confirmed => {
        if (confirmed) {
          swal("Registro eliminado!", "", "success");
          this.eliminar();
        }

      });
  }

  eliminar() {
    this.flag = true;
    //this.rest.CRUD_fabricantes(this.solicitud)
    this.rest.CRUD_citas(this.solicitud)
      .then((respuesta) => {

        let resp: any = respuesta; // toda la respuesta del servidor.
        console.log(resp);

        //let resp_validada = this._validadores.respuesta_api(resp); // la respuesta validada (si ocurrio erro o no).
        let resp_validada = true;

        //if (resp_validada.estado) {
          if (resp_validada) {
          
          this.allItems = resp.recordset;
          this.setPage(this.pager.currentPage); //para iniciar la paginacion.
        } else {
          this.allItems = [];
          this.setPage(1); //para iniciar la paginacion.
          //swal('Ocurrio un Error', resp_validada.msg, 'error');
        }

        this.flag = false;

      }, (error) => {
        this.flag = false;
        let respuesta = this._utilidades.manejo_status(error);
        swal('Oops', 'Ocurrió un error', 'error');
        console.log(error);

      });
  }

  //#endregion

  estatus() {
    alert('Función no prograda!')
  }


  //#region metodos de funcionamientos

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      // return;
    }

    // get pager object from service
    this.pager = this._paginacion.getPager(this.allItems.length, page, 10);

    // get current page of items
    this.fabricantes = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);

  }

  //#endregion

  
  filtrar($evet) {
    this.allItems = $evet;
    this.setPage(1);
  }


}
