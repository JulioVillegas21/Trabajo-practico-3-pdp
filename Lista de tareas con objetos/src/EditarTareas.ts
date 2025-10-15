
import { Tareas, estado, dificultad } from "./Tareas";
import { Confirmacion, pedirNumero } from "./Controles";
import  promptSync from "prompt-sync"; 
const prompt = promptSync();



export function EditarTarea (tarea:Tareas) : Tareas {

    let validacion: boolean = true;

    let input:string = "";

    console.clear();
    let descripcionInput: string = "";

    //Descripcion
    if(Confirmacion("Desea cambiar la descripcion de la tarea ?")==="y"){
        do{
            validacion = false;

            descripcionInput = prompt("Ingrese la descripcion de la tarea (max 500 caracteres): ")?.trim() || ""; // elimino los caracters vacios
        
            if(descripcionInput.length === 0){ 
                if(Confirmacion("Esta dejando la descripcion vacia, desea hacerlo ? ").toLowerCase() === "y"){
                    validacion = false;
                }

                else{
                validacion = true;
                }
            }
            if(descripcionInput.length > 500){
                if(Confirmacion("la descripcion supero los 500 caracteres, desea recortarla ?").toLowerCase() === "y"){
                    descripcionInput = descripcionInput.slice(0,500);
                    validacion = false;
                }
                
                else{
                    validacion = true;
                }
            }
        }while(validacion);

        console.clear();
        tarea.SetDescripcion(descripcionInput);
    }

    //Estado

    if(Confirmacion ("Desea cambiar el estado de la tarea?")==="y"){

        console.log("Ingrese el estado de la tarea");
        for(let i : number = 0 ; i<estado.length; i++){
            console.log(`[${i+1}] ${estado[i]}`);
        }
        tarea.SetEstado(estado [pedirNumero( "Porfavor ingrese una de las opcines", 1 , estado.length, false )-1]); 
        console.clear();
    }

    //Dificultad
    //utilizara la misma logica que se uso en estado 

    if(Confirmacion ("Desea cambiar la dificultad de la tarea?: ")==="y"){

       for(let i : number = 0 ; i < dificultad.length ; i++){
            console.log(`[${i+1}] ${dificultad[i]}`);
        }
        tarea.SetDificultad(dificultad[pedirNumero( "Porfavor ingrese una de las opcines de dificultad: ", 1 , dificultad.length, false )-1]);
    }

    if(Confirmacion ("Desea cambiar la fecha de vencimiento de la tarea?: ")==="y"){

        console.log("ingrese la fecha de vencimiento");
        let dia : number = pedirNumero("Dia de vencimiento de la tarea: ", 1 , 31, false);
        let mes : number = pedirNumero("Mes de vencimiento de la tarea: ", 1 , 12,false);
        let año : number = pedirNumero("Año de vencimiento de la tarea: ", 1900 ,2100 ,false);
        tarea.SetFechaVencimiento(año, mes , dia);

    
    }
    
    tarea.SetFechaEdicion();
    
    console.clear()
    
    return tarea;
} 