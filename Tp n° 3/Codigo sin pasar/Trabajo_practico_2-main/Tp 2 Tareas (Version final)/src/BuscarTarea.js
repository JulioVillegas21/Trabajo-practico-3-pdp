"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuscarTarea = BuscarTarea;
var prompt_sync_1 = require("prompt-sync");
var prompt = (0, prompt_sync_1.default)();
var Tarea_1 = require("./Tarea");
function BuscarTarea(tareas) {
    var _a;
    var encontrada = false;
    console.clear();
    console.log("Indique el titulo de la tarea a buscar");
    var titulo = ((_a = prompt("titulo: ")) === null || _a === void 0 ? void 0 : _a.trim()) || "";
    for (var i = 0; i < tareas.length; i++) {
        if (tareas[i].titulo === titulo) {
            console.log("tarea encontrada");
            var tarea = tareas[i];
            console.log("[".concat(i + 1, "] ").concat(tarea.titulo));
            encontrada = true;
            (0, Tarea_1.VerTarea)(tarea);
        }
        if (!encontrada) {
            console.log("Tarea no encontrada, Volviendo al menu ...");
            return;
        }
    }
}
