export class deficiencias {
    public prm_deficiencias = {
        token: JSON.parse(decodeURIComponent(escape(window.atob(localStorage._token)))),
        id_deficiencia: 0,
        id_compania: parseInt(localStorage.getItem("COMP")),
        id_tipo_deficiencia: 0,
        id_tipo_mantenimiento: 0,
        id_estatus: 0,
        fecha_deficiencia: new Date().toUTCString(),
        id_cprioridad: 0,
        color: '#FFFFF',
        id_sistema: 0,
        sw_activo: 0,
        descripcion: '',
        nombre: '',
        id_prioridad: 0,
        accion_tipo: '',
        usuario_crea: parseInt(localStorage.getItem("USU")),
        usuario_actualiza: parseInt(localStorage.getItem("USU")),
        fecha_crea: new Date().toUTCString(),
        fecha_actualiza: new Date().toUTCString(),
        posibles_fallas: [],
        requisiciones: [],
        id_posible_falla: 0,
        sw_procesada: 0,
        id_orden: 0,
        tareas: [],
        codigo_falla: '',
        sw_codigo_falla: 0
    }
}