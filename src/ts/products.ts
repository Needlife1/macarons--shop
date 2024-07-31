import {getAllProducts} from "./products-api";
import { Products } from "../types/products-types";
import {addToBasket}from './add-to-basket';

document.addEventListener('DOMContentLoaded', ()=>{
    const macaronsList:HTMLElement|null = document.querySelector('.macarons-list');
    const otherList:HTMLElement|null = document.querySelector('.other-list');
    const mochiList:HTMLElement|null = document.querySelector('.mochi-list')

const path:string = window.location.pathname;

    if (path.includes('macarons')&& macaronsList) {
        loadProducts(macaronsList, 'api/macarons');
    } else if(path.includes('other')&& otherList){
        loadProducts(otherList,'api/other');
    }else if(path.includes('mochi') && mochiList){
        loadProducts(mochiList, 'api/mochi')
    }
})

async function loadProducts(productList: HTMLElement,route:string) {
    const productsData = await getAllProducts(route);
    const markup = markupProducts(productsData);
    productList?.insertAdjacentHTML("beforeend",markup);

    let productCardBtns:NodeListOf<HTMLElement>|null = document.querySelectorAll('.product-card-btn');

    addEventToBtn(productCardBtns);

}

function markupProducts(productsData:Products[]):string {
    if (productsData) {
     return  productsData.map(product =>{
            const {description,price,productImg,title,weight,_id}=product
       
            return `<li class="item" id='${_id}'>

                    <div class="product-card">

                        <div class="product-img-box">
                            <img class="ptoduct-img" src="${productImg}" alt="${title}" width="300" height="300">
                        </div>

                        <div class="product-card-body">
                            <h2 class="product-card-title">${title}</h2>
                            <p class="product-description">${description}</p>
                            <div class="product-text-box">
                                <p class="product-top-text">${weight}г(1шт)</p>
                                <p class="product-bottom-text">${price}грн</p>
                            </div>

                            <button class="product-card-btn" id="${_id}">
                                <svg class="product-card-svg" id='basket' xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24" width="100%" height="100%">
                                    <path
                                        d="M16,6V4a4,4,0,0,0-8,0V6H4V20a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V6Zm-6-2a2,2,0,0,1,4,0V6H10ZM18,20H6V8H8v2a1,1,0,0,0,2,0V8h4v2a1,1,0,0,0,2,0V8h2Z"
                                        stroke="currentColor" stroke-width="1" fill="none" />
                                </svg>
                                <span>Додати у кошик</span>
                            </button>


                        </div>
                    </div>

                </li>`
            
        }).join(''); 
    }
    return '';
   
}

function addEventToBtn(btns:NodeListOf<HTMLElement>) {
    btns.forEach(btn=>{
        
        btn.addEventListener('click',addToBasket)
        
    })
}
