import { Injectable } from '@angular/core';
import { Produit } from '../shared/produit';

@Injectable()
export class ProduitMockService{
private  produits: Produit[] = [];
  constructor(){
    // tslint:disable-next-line:prefer-const
    let p1: Produit = new Produit('Livre', 50, 20);
    let p2: Produit = new Produit('PC Portable', 150, 350);
    let p3: Produit = new Produit('Imprimante',60, 220);
    let p4: Produit = new Produit('Clefs USB',35, 60);
    this.produits.push(p1);
    this.produits.push(p2);
    this.produits.push(p3);
    this.produits.push(p4);
  }
  public getProduits(): Produit[]{
    return this.produits;
  }
}
