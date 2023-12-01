export class AlumnoModel{

  id:string;
  imagen:string;
  nombre:string;
  apellido:string;
  correo:string;
  grupo:string;
  carrera:string;
  sexo:string;
  aprobado_reprobado:boolean;

  constructor(){
    this.aprobado_reprobado = true;
  }
}
