import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-listadrag',
  templateUrl: './listadrag.component.html',
  styleUrls: ['./listadrag.component.css']
})
export class ListadragComponent implements OnInit {

  paises: any = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.http.get(`https://restcountries.eu/rest/v2/lang/es`)
      .subscribe( paises => this.paises = paises );

  }

  drop(evento: CdkDragDrop<any> ) {

    // console.log('OK!', evento);
    moveItemInArray( this.paises, evento.previousIndex, evento.currentIndex );
  }

}
