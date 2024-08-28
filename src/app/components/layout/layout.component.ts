import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [ 
    RouterModule,
    CommonModule
  ],
})
export class LayoutComponent implements OnInit {
  conductores = [
    { id: 1, nombre: 'JAIME GARCIA PEREZ', edad: 33, telefono: '771 699 0918', modelo: 'CX-6', placas: 'HMG105BT' },
    { id: 2, nombre: 'JUAN LOPEZ HERNANDEZ', edad: 28, telefono: '772 123 4567', modelo: 'Sentra', placas: 'ABC123CD' }
  ];
  isMenuVisible = false;


  constructor() { }

  // Método para mostrar/ocultar el menú
  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  // Método para cerrar el menú
  closeMenu() {
    this.isMenuVisible = false;
  }

  ngOnInit(): void {
  }

}
