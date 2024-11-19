import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule aquí
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent {
  noticias = [
    {
      titulo: 'Marsia Taha Mohamed: Mejor Chef Femenina de América Latina 2024',
      descripcion: 'La chef boliviana Marsia Taha Mohamed ha sido reconocida como la Mejor Chef Femenina de América Latina 2024. Este galardón destaca su dedicación a la cocina boliviana y su compromiso con la sostenibilidad.',
      imagen: 'https://cdn.unotv.com/images/2024/10/cocina-170415-1024x576.jpeg',
      enlace: 'https://www.unotv.com/estilo-de-vida/gastronomia/marsia-taha-mohamed-mejor-chef-femenina-de-america-latina-2024/'
    },
    {
      titulo: 'Bolivia entre las 100 mejores cocinas del mundo según TasteAtlas',
      descripcion: 'Bolivia ha sido ubicada en el puesto 60 entre las 100 mejores cocinas del mundo por TasteAtlas. Este reconocimiento resalta la diversidad y riqueza de la gastronomía boliviana.',
      imagen: 'https://comidasbolivianas.org/wp-content/uploads/2020/09/%F0%9F%87%A7%F0%9F%87%B4-Sopa-de-Mani-12-7-screenshot.png',
      enlace: 'https://elpais.bo/nacional/20231222_bolivia-ocupa-un-puesto-entre-las-100-mejores-cocinas-y-platos-del-mundo-segun-el-tasteatlas.html'
    },
    {
      titulo: 'Vinos bolivianos ganan reconocimiento internacional',
      descripcion: 'Los vinos bolivianos han obtenido reconocimiento en competencias internacionales, destacando la calidad y el potencial de la viticultura en el país.',
      imagen: 'https://brujuladigital.net/images/news/es/b_18971_cinco-vinos-bolivianos-que-debes-degustar-este-2022-1.jpg',
      enlace: 'https://brujuladigital.net/promocion-empresarial/cinco-vinos-bolivianos-que-debes-degustar-este-2022'
    },
    {
      titulo: 'Incorporación de carne de lagarto en la alta cocina boliviana',
      descripcion: 'La chef Marsia Taha ha innovado al incluir carne de lagarto en sus preparaciones, explorando nuevos sabores y promoviendo ingredientes locales en la alta cocina.',
      imagen: 'https://cdn.bolivia.com/sdi/2023/06/27/marsia-taha-incluyo-carne-de-lagarto-en-su-menu-1162466.webp',
      enlace: 'https://www.bolivia.com/el-sabor-de-bolivia/noticias/marsia-taha-incluyo-carne-de-lagarto-en-su-menu-410357'
    }
  ];
}
