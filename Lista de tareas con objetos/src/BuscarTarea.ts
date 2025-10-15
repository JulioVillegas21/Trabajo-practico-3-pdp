import PromptSync from "prompt-sync";
const prompt = PromptSync();


import type {Tareas} from "./Tareas";



function BuscarTarea(tareas : Tareas[]){
    let encontrada :boolean = false;
    console.clear();
    console.log("Indique el titulo de la tarea a buscar");
    let titulo : string = prompt("titulo: ")?.trim() || "";

    for(let i : number =0; i< tareas.length  ; i++){
        
        if(tareas[i].GetTitulo() === titulo){
        console.log("tarea encontrada");
        const tarea = tareas[i];
        console.log(`[${i + 1}] ${tarea.GetTitulo()}`);
        encontrada = true;
        tarea.VerTarea();
        
    }

    if (!encontrada){
        console.log("Tarea no encontrada, Volviendo al menu ...");
        return;
    }
 }
 
}

export{BuscarTarea};

