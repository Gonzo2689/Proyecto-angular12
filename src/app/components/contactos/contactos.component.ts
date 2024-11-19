import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent {
  datosFormulario = {
    nombre: '',
    correo: '',
    mensaje: ''
  };
  mostrarDatos = false;

  enviarFormulario() {
    this.mostrarDatos = true;
    console.log('Datos del formulario:', this.datosFormulario);
  }
}
