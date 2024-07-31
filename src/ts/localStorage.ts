import { Products } from "../types/products-types";

const STORAGE_KAY = 'products';

export function addToLocalStorage(product:Products) {
    const saveProducts = localStorage.getItem(STORAGE_KAY);
    const productsArray: Products[] = saveProducts ? JSON.parse(saveProducts) : [];

   console.log(productsArray);

   productsArray.push(product);
  localStorage.setItem(STORAGE_KAY, JSON.stringify(productsArray));
   
  }

// function getIdProduct() {
//     const saveProducts = localStorage.getItem(STORAGE_KAY);

//     if (saveProducts) {
//     const saveProductsPars = JSON.parse(saveProducts);
//     console.log(saveProductsPars);
//     } else {
//         console.log('No products found in local storage');
//       }
// }

// getIdProduct()