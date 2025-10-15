import  promptSync from "prompt-sync";  

const prompt = promptSync();
import {menu} from "./Interfas";
import type { Tareas } from "./Tareas";
import {CrearTarea } from "./CrearTarea";
import { VerMisTareas } from "./VisualizarTareas";
import { BuscarTarea } from "./BuscarTarea";
import { pedirNumero } from "./Controles";

function main (): void {

    let opcion : number = 0;
    let tareas : Tareas[] = []
    

    let tarea: Tareas | null = null;

    do{
        
        menu();
        opcion= pedirNumero("",0,3,false);

        switch(opcion){

            // Caso de "VER MIS TAREAS "

            case 1 :
                console.clear();
                if(tareas.length===0){
                    console.log("No hay tareas creadas")
                    break;
                }

                VerMisTareas(tareas);

            break;

            // Caso de "BUSCAR UNA TAREA"
            
            case 2:
                if(tareas.length===0){
                    console.clear();
                    console.log("No hay tareas creadas")
                    break;
                }
                
               BuscarTarea(tareas);

            break;

            //Caso de "AGREGAR TAREAS"
            case 3:
                console.clear();
                tareas.push(CrearTarea(tareas));
                console.log("");
            break;

            case 0:
                console.log("Saliendo....");
            break;    
        }
    }while (opcion != 0);
}


main();
