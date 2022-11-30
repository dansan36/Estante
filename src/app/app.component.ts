import { Component } from '@angular/core';

export interface PeriodicElement {
  nome: string;
  position: number;
  genero: number;
  autor: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nome: 'Hydrogen', genero: 1.0079, autor: 'H'},
  {position: 2, nome: 'Helium', genero: 4.0026, autor: 'He'},
  {position: 3, nome: 'Lithium', genero: 6.941, autor: 'Li'},
  {position: 4, nome: 'Beryllium', genero: 9.0122, autor: 'Be'},
  {position: 5, nome: 'Boron', genero: 10.811, autor: 'B'},
  {position: 6, nome: 'Carbon', genero: 12.0107, autor: 'C'},
  {position: 7, nome: 'Nitrogen', genero: 14.0067, autor: 'N'},
  {position: 8, nome: 'Oxygen', genero: 15.9994, autor: 'O'},
  {position: 9, nome: 'Fluorine', genero: 18.9984, autor: 'F'},
  {position: 10, nome: 'Neon', genero: 20.1797, autor: 'Ne'},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'material';
  displayedColumns:string[] = ['position', 'nome', 'genero', 'autor'];
  dataSources = ELEMENT_DATA;
}
