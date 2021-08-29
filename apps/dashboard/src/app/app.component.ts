import { Component } from '@angular/core';


@Component({
  selector: 'cerveja-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Cardápio de Cerveja';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'cervejas', icon: 'view_list', title: 'Cerveja'}
  ]
}
