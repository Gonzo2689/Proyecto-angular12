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
    apellidos: '',
    direccion: '',
    correo: '',
    contrasena: '',
    fechaNacimiento: '',
    colorFavorito: '',
    ciudadNacimiento: '',
    sexo: '',
    comidasPreferidas: [] as string[], // Array para comidas seleccionadas
    postresPreferidos: [] as string[] // Array para postres seleccionados
  };

  mostrarDatos = false;

  // Método para manejar selección de comidas
  actualizarComidas(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    const valor = checkbox.value;

    if (checkbox.checked) {
      // Agregar al array si está seleccionado
      this.datosFormulario.comidasPreferidas.push(valor);
    } else {
      // Eliminar del array si se deselecciona
      this.datosFormulario.comidasPreferidas = this.datosFormulario.comidasPreferidas.filter(
        (comida) => comida !== valor
      );
    }
  }

  // Método para manejar selección de postres
  actualizarPostres(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    const valor = checkbox.value;

    if (checkbox.checked) {
      // Agregar al array si está seleccionado
      this.datosFormulario.postresPreferidos.push(valor);
    } else {
      // Eliminar del array si se deselecciona
      this.datosFormulario.postresPreferidos = this.datosFormulario.postresPreferidos.filter(
        (postre) => postre !== valor
      );
    }
  }

  enviarFormulario() {
    this.mostrarDatos = true;
    console.log('Datos del formulario:', this.datosFormulario);
  }
}
