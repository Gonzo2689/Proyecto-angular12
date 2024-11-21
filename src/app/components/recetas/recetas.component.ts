import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {
  receta: any;

  // Define recetas con un índice dinámico para que acepte cualquier string como clave
  recetas: { [key: string]: { titulo: string; descripcion: string; pasos: string[] } } = {
    'saltenas': {
      titulo: 'Receta de Salteñas',
      descripcion: 'Receta completa para preparar salteñas.',
      pasos: [
        'Preparar la masa.',
        'Hacer el relleno con carne, pollo, o ambos.',
        'Hornear a temperatura media durante 30 minutos.'
      ]
    },
    'pique-macho': {
      titulo: 'Receta de Pique Macho',
      descripcion: 'Cómo preparar este delicioso plato boliviano.',
      pasos: [
        'Freír las papas.',
        'Saltear la carne con ají.',
        'Servir con huevos y salchichas.'
      ]
    },
    'majadito': {
      titulo: 'Receta de Majadito',
      descripcion: 'Plato tradicional del oriente boliviano.',
      pasos: [
        'Preparar el arroz.',
        'Añadir carne deshidratada.',
        'Cocinar hasta que esté todo bien integrado.'
      ]
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id'); // Obtiene el ID de la URL
    console.log('ID obtenido:', id); // Verifica si el ID es correcto
    if (id && this.recetas[id]) {
      this.receta = this.recetas[id]; // Asigna la receta si el ID es válido
      console.log('Receta seleccionada:', this.receta); // Muestra la receta seleccionada
    } else {
      this.receta = null; // Si no, muestra un mensaje o una página vacía
      console.log('Receta no encontrada');
    }
  }
  
}
