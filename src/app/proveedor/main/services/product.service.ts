import { Injectable } from '@angular/core';
import { ProductDto } from '../Dto/product.dto';

@Injectable({
 providedIn: 'root'
})
export class ProductService {

 constructor() { }

 publishProduct(product: ProductDto) {
    console.log('Producto publicado:', product);
    // Agregar la lógica para guardar el producto en la base de datos.
 }
}
