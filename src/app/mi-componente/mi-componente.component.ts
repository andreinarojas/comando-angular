import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../equipo.service';


@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {
  equipo:any [] = []; 

  constructor(private _servicio:EquipoService) {
    this.equipo = _servicio.obtenerEquipo ();
   }

  ngOnInit(): void {
  }

}
