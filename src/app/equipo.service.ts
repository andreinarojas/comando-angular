import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  equipo: any[] = [
  {
      nombre: 'Ignacio',
      apellido: 'Perez',
      deporte: 'Tenis',
      descripcion: "Es geniaaaal!!"
},
{
      nombre: 'Maria',
      apellido: 'Gonzales',
      deporte: 'Bascket',
      descripcion: "Es geniaaaal!!"
},
{
      nombre: 'Lionel',
      apellido: 'Messi',
      deporte: 'futbol',
      descripcion: 'El mejor de todos'
}
]

  constructor() {
    console.log("Servicio funcionando!");
   }
   obtenerEquipo(){ 
     return this.equipo
   }
}
