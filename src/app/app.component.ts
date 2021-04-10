import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Menu';
  title2 = 'hola soy el segundo titulo';
  foods= ['Pollo', 'Pescado', 'Carne', 'Pastas'];
  foodName= '';

  addFood (){
    this.foods.push(this.foodName);
    this.foodName = '';
  }
  deleteFood () {
    this.foods.pop()
   // this.food=[]
  }
  }