
import { getProductById } from "./products-api";
import { Products } from "../types/products-types";

export function addToBasket(e:Event) {
  const path:string = window.location.pathname;
  const target = e.target as HTMLElement;
  const productId:string|null = target ? target.id : null;



  if (path.includes('macarons') && productId) {
  getProductById(`api/macarons/${productId}`).then(prod=>{
console.log(prod);

    });
} else if(path.includes('other') && productId){
 getProductById(`api/other/${productId}`).then(prod=>{
console.log(prod);

  });
}else if(path.includes('mochi') && productId){
  getProductById(`api/mochi/${productId}`).then(prod=>{
console.log(prod);

  })
}

}