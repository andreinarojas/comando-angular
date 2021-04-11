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
  vector = [1,2,3,4,5,6,7];

  addFood (){
    this.foods.push(this.foodName);
    this.foodName = '';
  }
  deleteFood () {
    this.foods.pop()
   // this.food.pop=[]
  }
  }