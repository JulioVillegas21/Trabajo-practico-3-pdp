const dificultad: string[] = ["Fácil 🌕🌑🌑", "Medio 🌕🌕🌑", "Difícil 🌕🌕🌕"];
const estado: string[] = ["Pendiente", "En curso", "Terminada", "Cancelada"];

export interface Tareas {
  titulo: string;
  descripcion: string;
  estado: string;
  dificultad: string;
  fechaCreacion: Date;
  fechavencimiento: Date;
  fechaultimaEdicion: Date;


  VerTarea(): void;
  
  GetTitulo(): string;
  GetDescripcion(): string;
  GetEstado(): string;
  GetDificultad(): string;
  GetFechaCreacion(): Date;
  GetFechaVencimiento(): Date;
  GetFechaUltimaEdicion(): Date;


  SetTitulo(titulo: string): string;
  SetDescripcion(descripcion: string): string;
  SetEstado(estado: string): string;
  SetDificultad(dificultad: string): string;
  SetFechaVencimiento(dia: number, mes: number, año: number): string;
  SetFechaEdicion(): void;
  SetFechaCreacion(): void;

}


export function TareaCostructora( this: Tareas, titulo: string, descripcion: string, estadoT: string, dificultadT: string, fechaVencimiento: Date) {
  this.titulo = titulo;
  this.descripcion = descripcion ;
  this.estado = estadoT ;
  this.dificultad = dificultadT ;
  this.fechaCreacion = new Date();
  this.fechavencimiento = fechaVencimiento;
  this.fechaultimaEdicion = new Date();
}

TareaCostructora.prototype.VerTarea = function (this: Tareas) {
  console.log("----------- Tarea seleccionada -----------\n");
  console.log(`Título: ${this.titulo}`);
  console.log(`Descripción: ${this.descripcion}`);
  console.log(`Estado: ${this.estado}`);
  console.log(`Dificultad: ${this.dificultad}`);
  console.log(`Fecha de creación: ${this.fechaCreacion}`);
  console.log(`Fecha de vencimiento: ${this.fechavencimiento}`);
  console.log(`Última edición: ${this.fechaultimaEdicion}`);
  console.log("------------------------------------------\n");
};


TareaCostructora.prototype.GetTitulo = function (this: Tareas): string {
  return this.titulo;
}
TareaCostructora.prototype.GetDescripcion = function (this: Tareas): string {
  return this.descripcion;
}
TareaCostructora.prototype.GetEstado = function (this: Tareas): string {
  return this.estado;
}
TareaCostructora.prototype.GetDificultad = function (this: Tareas): string {
  return this.dificultad;
}
TareaCostructora.prototype.GetFechaCreacion = function (this: Tareas): Date {
  return this.fechaCreacion;
}
TareaCostructora.prototype.GetFechaVencimiento = function (this: Tareas): Date {
  return this.fechavencimiento;
}

TareaCostructora.prototype.GetFechaUltimaEdicion = function (this: Tareas): Date {
  return this.fechaultimaEdicion;
}



TareaCostructora.prototype.SetTitulo = function (this: Tareas, titulo: string): string {
  this.titulo = titulo;
  this.fechaultimaEdicion = new Date();
  return `Título asignado: ${this.titulo}`;
};

TareaCostructora.prototype.SetDescripcion = function (this: Tareas, descripcion: string): string {
  this.descripcion = descripcion;
  this.fechaultimaEdicion = new Date();
  return `Descripción asignada: ${this.descripcion}`;
};

TareaCostructora.prototype.SetEstado = function (this: Tareas, estado: string): string {
  this.estado = estado;
  this.fechaultimaEdicion = new Date();
  return `Estado asignado: ${this.estado}`;
};

TareaCostructora.prototype.SetDificultad = function (this: Tareas, dificultad: string): string {
  this.dificultad = dificultad;
  this.fechaultimaEdicion = new Date();
  return `Dificultad asignada: ${this.dificultad}`;
};

TareaCostructora.prototype.SetFechaVencimiento = function (this: Tareas, dia: number, mes: number, año: number): string {
  this.fechavencimiento = new Date(año, mes, dia); // mes -1 porque en Date los meses van de 0 a 11
  this.fechaultimaEdicion = new Date();
  return `Fecha de vencimiento asignada: ${this.fechavencimiento}`;
};

TareaCostructora.prototype.SetFechaEdicion = function (this: Tareas){
  this.fechaultimaEdicion = new Date();
}

TareaCostructora.prototype.SetFechaCreacion = function (this: Tareas){
  this.fechaCreacion = new Date();
}


export { dificultad, estado };