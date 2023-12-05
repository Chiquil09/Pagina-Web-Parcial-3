
export class AlumnoModel{

  id:string;
  imagen:string | ArrayBuffer | null = null;
  nombre:string;
  apellido:string;
  correo:string;
  contra:string;
  grupo:string;
  carrera:string;
  sexo:string;
  aprobado_reprobado:string;

  constructor(){

  }
}
