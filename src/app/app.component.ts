import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuItems: MenuItem[] = [ 
    { Category: "Pizzas", Name: "Margherita", Price: 10.99 },
    { Category: "Pizzas", Name: "Pepperoni", Price: 12.99 },
    { Category: "Pizzas", Name: "Hawaiian", Price: 14.99 },
    { Category: "Sides", Name: "Garlic Bread", Price: 4.99 },
    { Category: "Sides", Name: "Chicken Wings", Price: 8.99 },
    { Category: "Sides", Name: "Caesar Salad", Price: 7.99 },
    { Category: "Drinks", Name: "Coke", Price: 2.49 },
    { Category: "Drinks", Name: "Sprite", Price: 2.49 },
    { Category: "Drinks", Name: "Fanta", Price: 2.49 }
];

getByCategory(Cat: string): MenuItem[]
{
  //console.log(this.menuItems.filter(x => x.Category == Cat))
  return this.menuItems.filter(x => x.Category == Cat)
}

Pizzas: MenuItem[] = this.getByCategory("Pizzas");
Sides: MenuItem[] = this.getByCategory("Sides");
Drinks: MenuItem[] = this.getByCategory("Drinks");

getUniqueCategory(): string[]{
  const categories = this.menuItems.map(item => item.Category)
  //console.log(categories)
  
  // return Array.from(new Set(categories));
  return [...new Set(categories)]
}

}