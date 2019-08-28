import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  lat = 45.5259594;
  lng = 4.20207577;

  nombre:string=''
  paises: any=[
    {cercano: 1, activo: true,nombre:'Colombia'},
    {cercano: 2,activo: false,nombre:'Argentina'},
    {cercano: 3,activo: true,nombre:'Brasil'},
    {cercano: 3,activo: false,nombre:'Peru'}
]

  title = 'Ejercicio y Mapa';
}
