"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerMisTareas = VerMisTareas;
var prompt_sync_1 = require("prompt-sync");
var prompt = (0, prompt_sync_1.default)();
var Tarea_1 = require("./Tarea");
var Interfas_1 = require("./Interfas");
var Controles_1 = require("./Controles");
function Seleccion(tareas, indice, formaOrdenada) {
    var indices = [];
    var contador = 0;
    console.clear();
    console.log("  --------  Tareas Ordenadas de forma ".concat(formaOrdenada, "  --------  "));
    console.log("Estado: ".concat(Tarea_1.estado[indice]));
    console.log("");
    for (var i = 0; i < tareas.length; i++) {
        if (tareas[i].estado === Tarea_1.estado[indice]) {
            contador++;
            indices.push(i);
            console.log("[".concat(contador, "]. ").concat(tareas[i].titulo));
        }
    }
    console.log("");
    return tareas[indices[(0, Controles_1.pedirNumero)("Porfavor seleccione una tarea para visualizar: ", 1, indices.length, false) - 1]];
}
//Tipo de ordenamiento 
function Titulo(tareas) {
    var ayudante;
    //metodo de resolucion : Ordenamiento burbuja 
    for (var i = 0; i < tareas.length - 1; i++) {
        for (var j = 0; j < tareas.length - 1; j++) {
            /*funcion que busque con la ia
            devuelve -1 si el titulo 1 es menor al titulo 2 , 0 si son iguales y 1 si es titulo 2> titulo 1
            parametro "es" = hay letras que en ingles van antes que en español
            sensitivity = base lo ponemos para no prestar atencion a las mayusculas y tildes
            ignorePunctuation: true  ignora los guiones y etc */
            if (tareas[j].titulo.localeCompare(tareas[j + 1].titulo, "es", { sensitivity: 'base', ignorePunctuation: true }) == 1) {
                // ojo que estoy intercambiando direcciones
                ayudante = tareas[j];
                tareas[j] = tareas[j + 1];
                tareas[j + 1] = ayudante;
            }
        }
    }
    return tareas;
}
//Tipo de ordenamiento
function FechaVencimiento(tareas) {
    var ayudante;
    for (var i = 0; i < tareas.length - 1; i++) {
        for (var j = 0; j < tareas.length - 1; j++) {
            if (tareas[j].fechaCreacion.getTime() > tareas[j + 1].fechaCreacion.getTime()) {
                var aux = tareas[j];
                tareas[j] = tareas[j + 1];
                tareas[j + 1] = aux;
            }
        }
    }
    return tareas;
}
//Tipo de ordenamiento
//getTime calcula los milisecgundos de 1970 hasta la fecha y compara 
function FechaCreacion(tareas) {
    for (var i = 0; i < tareas.length - 1; i++) {
        for (var j = 0; j < tareas.length - 1; j++) {
            if (tareas[j].fechaCreacion.getTime() > tareas[j + 1].fechaCreacion.getTime()) {
                var aux = tareas[j];
                tareas[j] = tareas[j + 1];
                tareas[j + 1] = aux;
            }
        }
    }
    return tareas;
}
function Ordenamientos(tareas, indice) {
    var tarea;
    switch ((0, Controles_1.pedirNumero)("Porfavor eliga una opcion: ", 1, 3, false)) {
        case 1:
            //ojo que hay una funcion que recibe otra funcion
            tarea = Seleccion(Titulo(tareas), indice - 1, "Alfabetico ascendente");
            (0, Tarea_1.VerTarea)(tarea);
            if ((0, Controles_1.Confirmacion)("Desea modificar los datos de la tarea?") == "y") {
                (0, Tarea_1.EditarTarea)(tarea);
            }
            else {
                console.log("Volviendo al menu...");
            }
            break;
        case 2:
            tarea = Seleccion(FechaVencimiento(tareas), indice - 1, "fecha de vencimiento ascendente");
            (0, Tarea_1.VerTarea)(tarea);
            if ((0, Controles_1.Confirmacion)("Desea modificar los datos de la tarea?") == "y") {
                (0, Tarea_1.EditarTarea)(tarea);
            }
            else {
                console.log("Volviendo al menu...");
            }
            break;
        case 3:
            tarea = Seleccion(FechaCreacion(tareas), indice - 1, "fecha de creacion ascendente");
            (0, Tarea_1.VerTarea)(tarea);
            if ((0, Controles_1.Confirmacion)("Desea modificar los datos de la tarea?") == "y") {
                (0, Tarea_1.EditarTarea)(tarea);
            }
            else {
                console.log("Volviendo al menu...");
            }
            break;
    }
}
function VisualizarTipoTarea(tareas, indice) {
    console.clear();
    var opcion;
    var tarea;
    var validacion = false;
    if (indice < 4) {
        //Verifica si tiene tareas del tipo que eligio
        for (var i = 0; i < tareas.length; i++) {
            if (tareas[i].estado == Tarea_1.estado[indice - 1]) {
                validacion = true;
            }
        }
        if (!validacion) {
            console.clear();
            console.log("No tiene tareas del tipo ".concat(Tarea_1.estado[indice - 1]));
            return;
        }
        (0, Interfas_1.FormaDeVer)();
        console.log("");
        Ordenamientos(tareas, indice);
    }
    else {
        console.log(" -------- Todas las tareas  -------- ");
        for (var i = 0; i < tareas.length; i++) {
            console.log("[".concat(i + 1, "]. ").concat(tareas[i].titulo, " (Estado: ").concat(tareas[i].estado, ")"));
        }
        opcion = (0, Controles_1.pedirNumero)("Porfavor indique la tarea que desea ver: ", 1, tareas.length, false);
        console.clear();
        (0, Tarea_1.VerTarea)(tareas[opcion - 1]);
        if ((0, Controles_1.Confirmacion)("Desea modificar los datos de la tarea?: ") == "y") {
            (0, Tarea_1.EditarTarea)(tareas[opcion - 1]);
        }
        else {
            console.log("Volviendo al menu...");
        }
    }
}
function VerMisTareas(tareas) {
    var indice;
    (0, Interfas_1.VerTipos)();
    console.log();
    indice = (0, Controles_1.pedirNumero)("Porfavor elige una tipo: ", 1, Tarea_1.estado.length, false);
    VisualizarTipoTarea(tareas, indice);
}
