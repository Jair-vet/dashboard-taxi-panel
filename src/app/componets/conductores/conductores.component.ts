import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.component.html',
  styleUrls: ['./conductores.component.scss']
})
export class ConductoresComponent implements OnInit {

  conductores = [
    { id: 1, nombre: 'JAIME GARCIA PEREZ', edad: 33, telefono: '771 699 0918', modelo: 'CX-6', placas: 'HMG105BT' },
    { id: 2, nombre: 'JUAN LOPEZ HERNANDEZ', edad: 28, telefono: '772 123 4567', modelo: 'Sentra', placas: 'ABC123CD' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
