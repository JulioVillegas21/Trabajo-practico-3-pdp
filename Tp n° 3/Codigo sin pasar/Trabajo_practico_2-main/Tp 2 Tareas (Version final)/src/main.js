"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = require("prompt-sync");
var prompt = (0, prompt_sync_1.default)();
var Interfas_1 = require("./Interfas");
var CrearTarea_1 = require("./CrearTarea");
var VisualizarTareas_1 = require("./VisualizarTareas");
var BuscarTarea_1 = require("./BuscarTarea");
var Controles_1 = require("./Controles");
function main() {
    var opcion = 0;
    var tareas = [];
    // al tener "strictNullChecks": true necesito si o si iniciar tarea para usarla, el poner | me permite dejarla en null temporalmente
    var tarea = null;
    do {
        (0, Interfas_1.menu)();
        opcion = (0, Controles_1.pedirNumero)("", 0, 3, false);
        switch (opcion) {
            // Caso de "VER MIS TAREAS "
            case 1:
                console.clear();
                if (tareas.length === 0) {
                    console.log("No hay tareas creadas");
                    break;
                }
                (0, VisualizarTareas_1.VerMisTareas)(tareas);
                break;
            // Caso de "BUSCAR UNA TAREA"
            case 2:
                if (tareas.length === 0) {
                    console.clear();
                    console.log("No hay tareas creadas");
                    break;
                }
                (0, BuscarTarea_1.BuscarTarea)(tareas);
                break;
            //Caso de "AGREGAR TAREAS"
            case 3:
                console.clear();
                tareas.push((0, CrearTarea_1.CrearTarea)(tareas));
                console.log("");
                console.log("Tarea creada correctamente");
                break;
            case 0:
                console.log("Saliendo....");
                break;
        }
    } while (opcion != 0);
}
main();
