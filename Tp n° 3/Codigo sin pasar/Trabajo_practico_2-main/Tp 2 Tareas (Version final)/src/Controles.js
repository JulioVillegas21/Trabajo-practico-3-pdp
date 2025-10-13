"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Confirmacion = Confirmacion;
exports.pedirNumero = pedirNumero;
var prompt_sync_1 = require("prompt-sync");
var prompt = (0, prompt_sync_1.default)();
function Confirmacion(mensaje) {
    var _a, _b;
    var input = "";
    console.log("".concat(mensaje, ".\n[y]-Si [N]-No."));
    input = ((_a = prompt("Ingrese su opcion: ")) === null || _a === void 0 ? void 0 : _a.trim()) || "";
    while (input.toLowerCase() !== "y" && input.toLowerCase() !== "n") {
        console.log("Opcion invalida, ingrese una opcion valida.\n[y]-Si [N]-No.");
        input = ((_b = prompt("Ingrese su opcion: ")) === null || _b === void 0 ? void 0 : _b.trim()) || "";
    }
    return input.toLowerCase();
}
function pedirNumero(mensaje, min, max, activadorVacio) {
    var _a, _b;
    var entrada = ((_a = prompt("".concat(mensaje))) === null || _a === void 0 ? void 0 : _a.trim()) || "";
    if (entrada === "" && activadorVacio) {
        return min;
    }
    while (Number.isNaN(parseInt(entrada)) || parseInt(entrada) > max || parseInt(entrada) < min) {
        if (entrada === "" && activadorVacio) {
            return min;
        }
        console.log("Por favor ingrese un n\u00FAmero v\u00E1lido entre ".concat(min, " y ").concat(max));
        entrada = ((_b = prompt("".concat(mensaje))) === null || _b === void 0 ? void 0 : _b.trim()) || "";
    }
    return parseInt(entrada);
}
