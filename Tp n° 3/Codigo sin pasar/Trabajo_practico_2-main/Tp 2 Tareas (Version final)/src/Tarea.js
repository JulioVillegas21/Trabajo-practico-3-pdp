"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estado = exports.dificultad = void 0;
exports.VerTarea = VerTarea;
exports.VerTituloTareas = VerTituloTareas;
exports.EditarTarea = EditarTarea;
var prompt_sync_1 = require("prompt-sync");
var prompt = (0, prompt_sync_1.default)();
var Controles_1 = require("./Controles");
exports.dificultad = ["Facil 🌕🌑🌑", "Medio 🌕🌕🌑", "Dificil 🌕🌕🌕"];
exports.estado = ["Pendiente", "En curso", "Terminada", "Cancelada"];
;
function VerTarea(tarea) {
    console.log("----------- Tarea seleccionada -----------\n");
    console.log("Titulo : ".concat(tarea.titulo, "\n"));
    console.log("Descripcion : ".concat(tarea.descripcion, "\n"));
    console.log("Estado : ".concat(tarea.estado, "\n"));
    console.log("Dificultad ".concat(tarea.dificultad, "\n"));
    console.log("fecha de creacion : ".concat(tarea.fechaCreacion, "\n"));
    if (tarea.fechavencimiento != null) {
        console.log("Fecha de vencimiento : ".concat(tarea.fechavencimiento, "\n"));
    }
    else {
        console.log("Esta tarea se encuentra sin fecha de vencimiento\n");
    }
    console.log("fecha de ultima edicion : ".concat(tarea.fechaultimaEdicion, "\n"));
    console.log("--------------------------------------------\n");
}
function VerTituloTareas(tareas) {
    for (var i = 0; i < tareas.length; i++) {
        console.log("[".concat(i + 1, "]. ").concat(tareas[i].titulo));
    }
}
function EditarTarea(tarea) {
    var _a;
    var validacion = true;
    var input = "";
    console.clear();
    var descripcionInput = "";
    //Descripcion
    if ((0, Controles_1.Confirmacion)("Desea cambiar la descripcion de la tarea ?") === "y") {
        do {
            validacion = false;
            descripcionInput = ((_a = prompt("Ingrese la descripcion de la tarea (max 500 caracteres): ")) === null || _a === void 0 ? void 0 : _a.trim()) || ""; // elimino los caracters vacios
            if (descripcionInput.length === 0) {
                if ((0, Controles_1.Confirmacion)("Esta dejando la descripcion vacia, desea hacerlo ? ").toLowerCase() === "y") {
                    validacion = false;
                }
                else {
                    validacion = true;
                }
            }
            if (descripcionInput.length > 500) {
                if ((0, Controles_1.Confirmacion)("la descripcion supero los 500 caracteres, desea recortarla ?").toLowerCase() === "y") {
                    descripcionInput = descripcionInput.slice(0, 500);
                    validacion = false;
                }
                else {
                    validacion = true;
                }
            }
        } while (validacion);
        console.clear();
        tarea.descripcion = descripcionInput;
    }
    //Estado
    if ((0, Controles_1.Confirmacion)("Desea cambiar el estado de la tarea?") === "y") {
        console.log("Ingrese el estado de la tarea");
        for (var i = 0; i < exports.estado.length; i++) {
            console.log("[".concat(i + 1, "] ").concat(exports.estado[i]));
        }
        tarea.estado = exports.estado[(0, Controles_1.pedirNumero)("Porfavor ingrese una de las opcines", 1, exports.estado.length, false) - 1];
        console.clear();
    }
    //Dificultad
    //utilizara la misma logica que se uso en estado 
    if ((0, Controles_1.Confirmacion)("Desea cambiar el estado de la tarea?") === "y") {
        for (var i = 0; i < exports.dificultad.length; i++) {
            console.log("[".concat(i + 1, "] ").concat(exports.dificultad[i]));
        }
        tarea.dificultad = exports.dificultad[(0, Controles_1.pedirNumero)("Porfavor ingrese una de las opcines de dificultad", 1, exports.dificultad.length, false) - 1];
    }
    console.clear();
    console.log("ingrese la fecha de vencimiento");
    var dia = (0, Controles_1.pedirNumero)("Dia de vencimiento de la tarea: ", 1, 31, false);
    var mes = (0, Controles_1.pedirNumero)("Mes de vencimiento de la tarea: ", 1, 12, false);
    var año = (0, Controles_1.pedirNumero)("Año de vencimiento de la tarea: ", 1900, 2100, false);
    tarea.fechavencimiento = new Date(año, mes, dia);
    return tarea;
}
