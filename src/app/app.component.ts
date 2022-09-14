import { Component } from '@angular/core';

// Component olduğunu burada belirtiyoruz
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'northwind';
  user: string = 'Engin Demiroğ';
}
