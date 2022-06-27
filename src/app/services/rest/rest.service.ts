import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { parametros } from '../parametros';
import { ResponseOptions } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  apiUrl = new parametros().rest_server;
  private headers: any = {'Content-type': 'application/json'};

  constructor(public http: HttpClient, private options: ResponseOptions) {
  //constructor(public http: HttpClient) {
  }

  //#region CRUD

  CRUD_fabricantes(datos: any) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + 'CRUD_fabricantes', datos, this.headers).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  CRUD_citas(datos: any) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + 'CRUD_citas', datos, this.headers).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  
  //#endregion


  //#region  GEN

  GEN_login_control_acceso(datos: any) {
    console.log("datos del login: ", JSON.stringify(this.headers));
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + 'GEN_login_control_acceso', datos, this.headers).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }


  PROC_dashboard(datos: any) {
    console.log(this.headers);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + 'PROC_dashboard', datos, this.headers).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  GEN_fabricantes(datos: any) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + 'GEN_fabricantes',datos, this.headers).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }


  //#endregion

  GEN_cambio_contrasena(datos) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + 'GEN_cambio_contrasena', datos, this.headers).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

 
  GEN_cambio_contrasena_Activar(datos: any) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + 'GEN_cambio_contrasena_Activar', datos, this.headers).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  PROC_cargar_fabricante(datos: any) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + 'PROC_cargar_fabricante', datos, this.headers).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

}
