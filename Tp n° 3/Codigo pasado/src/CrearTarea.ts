import PromptSync from "prompt-sync";
const prompt = PromptSync();

import { TareaCostructora, estado, dificultad , type Tareas } from "./Tareas";

import { Confirmacion, pedirNumero } from "./Controles";

export function CrearTarea(tareas:Tareas[]): Tareas {

    //Variables utilizados para la creacion de la tarea

    let validacion: boolean = true;
    let input:string = "";
    let descripcionInput: string = "";
    
    
    
    //La nueva tarea que moldeo antes de retornarla
    let nuevaTarea: Tareas = new (TareaCostructora as any)();




    //EMPIEZA LA CREACION DE LA TAREA CON EL TITULO

    do{
    validacion = false;
    input = prompt("Ingrese el título de la tarea (max 100 caracteres): ")?.trim()||""; // trim sirve para eliminar espacios blancos al pricipio y al final
    
    if(input.length=== 0){
        console.clear();
        console.log("El titulo no puede estar vacio, por favor ingrese un titulo valido.");
        validacion = true;
        continue;
    }

    if(input.length > 100){
        //Confirmacion se utilizara simplemente para poner si quiere acortar el titulo o no quiere acortar el titulo  
        if( Confirmacion("El Titulo supero los 100 caracteres, desea recortarlo ? : ").toLocaleLowerCase() === "y"){
            nuevaTarea.SetTitulo( input.substring(0,100) ); // substring sirve para cortar el string desde el caracter 0 hasta el 100
            console.clear();
            console.log(`El titulo fue recortado a: ${nuevaTarea.GetTitulo()}`);
        }
        else{
            console.clear();
            validacion = true;
            continue;
        }
    }

    for (let i : number = 0; i<tareas.length ; i++){
        if (input.toLowerCase() == tareas[i].GetTitulo().toLowerCase()){
            console.clear();
            console.log("Ya se encuentra una tarea con ese mismo titulo, porfavor introduzca uno nuevo")
            validacion=true;
        }
    }

    }while(validacion);
    nuevaTarea.SetTitulo(input);
    console.clear();

    //Descripcion

    do{
        validacion = false;

        descripcionInput = prompt("Ingrese la descripcion de la tarea (max 500 caracteres): ")?.trim() || ""; // elimino los caracters vacios
        
        if(descripcionInput.length === 0){ 
            if(Confirmacion("Esta dejando la descripcion vacia, desea hacerlo ?: ").toLowerCase() === "y"){
                validacion = false;
            }else{
                validacion = true;
            }
        }
        if(descripcionInput.length > 500){
            if(Confirmacion("la descripcion supero los 500 caracteres, desea recortarla ?: ").toLowerCase() === "y"){
                nuevaTarea.SetDescripcion(descripcionInput.substring(0,500));
                validacion = false;
            }else{
                validacion = true;
            }
        }
    }while(validacion);
    console.clear();
    nuevaTarea.SetDescripcion(descripcionInput);

    //Estado
    
    console.log("Ingrese el estado de la tarea");
    for(let i : number = 0 ; i<estado.length; i++){
        console.log(`[${i+1}] ${estado[i]}`);
    }

    nuevaTarea.SetEstado(estado[pedirNumero("Porfavor ingrese una de las opcines, Precionar ENTER dejara la tarea con el estado en default (Pendiente): ", 1, estado.length , true) -1 ]); // -1 porque el array empieza en 0 y el usuario en 1
    console.clear();

    //Dificultad
    console.log("Ingrese la dificultad de la tarea");
    for(let i : number = 0 ; i < dificultad.length ; i++){
        console.log(`[${i+1}] ${dificultad[i]}`);
    }
    nuevaTarea.SetDificultad(dificultad[pedirNumero( "Porfavor ingrese una de las opcines, Precionar ENTER dejara la tarea con la dificultad en default (facil): ", 1 , dificultad.length, true )-1]);
    console.clear();

    console.log("ingrese la fecha de vencimiento");
    let dia : number = pedirNumero("Dia de vencimiento de la tarea: ", 1 , 31, false);
    let mes : number = pedirNumero("Mes de vencimiento de la tarea: ", 1 , 12,false);
    let año : number = pedirNumero("Año de vencimiento de la tarea: ", 1900 ,2100 ,false);
    nuevaTarea.SetFechaVencimiento(año, mes , dia);
    console.clear()

    nuevaTarea.SetFechaCreacion();
    nuevaTarea.SetFechaEdicion();

    console.log("Tarea creada con exito!");
    console.log("Presione ENTER para continuar...");
    prompt("");
    console.clear();

    return nuevaTarea;
} 