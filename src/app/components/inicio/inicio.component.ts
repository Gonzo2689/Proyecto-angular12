import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  platosTradicionales = [
    {
      id: 'saltenas',
      nombre: 'Salteñas',
      descripcion: 'Empanadas tradicionales con carne o pollo.',
      imagen: 'https://comidasbolivianas.org/wp-content/uploads/2020/06/receta-delicias-de-bolivia-saltena-tradicional.jpg'
    },
    {
      id: 'pique-macho',
      nombre: 'Pique Macho',
      descripcion: 'Plato con carne, papas y ají.',
      imagen: 'https://chipabythedozen.com/wp-content/uploads/2020/07/Pique-Macho-Bolivia.jpg'
    },
    {
      id: 'majadito',
      nombre: 'Majadito',
      descripcion: 'Arroz con carne deshidratada.',
      imagen: 'https://www.cocina-boliviana.com/base/stock/Recipe/majadito-boliviano/majadito-boliviano_web.jpg.webp'
    }
  ];

  platosConocidos = [...this.platosTradicionales]; // Puedes añadir más platos aquí

  postres = [
    {
      id: 'helado-canela',
      nombre: 'Helado de Canela',
      descripcion: 'Refrescante helado típico.',
      imagen: 'https://www.opinion.com.bo/asset/thumbnail,992,558,center,center/media/opinion/images/2016/05/11/2016S9042.jpg'
    },
    {
      id: 'alfajor-maicena',
      nombre: 'Alfajor de Maicena',
      descripcion: 'Dulce tradicional con relleno de dulce de leche.',
      imagen: 'https://cuk-it.com/wp-content/uploads/2020/06/alfajores-maicena.webp'
    },
    {
      id: 'tawa-tawas',
      nombre: 'Tawa Tawas',
      descripcion: 'Postres tradicionales con azúcar.',
      imagen: 'https://www.cocina-boliviana.com/base/stock/Recipe/tawatawas/tawatawas_web.jpg.webp'
    }
  ];
}