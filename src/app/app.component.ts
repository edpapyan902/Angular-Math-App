import { Component } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: '../assets/template/app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Math App';
  heroes = [
    {
      id: "1",
      name: "Elon Musk"
    },
    {
      id: "2",
      name: "isksn Musk"
    },
    {
      id: "3",
      name: "habc Musk"
    }
  ];

  isCorrect= true;
}
