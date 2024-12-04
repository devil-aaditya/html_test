const containerE1 = document.querySelector(".container");
const leftE1 = document.querySelector(".left");
const rightE1 = document.querySelector(".right");

leftE1.addEventListener("mouseenter", ()=>{
    containerE1.classList.add("active-left");
})

leftE1.addEventListener("mouseleave", ()=>{
    containerE1.classList.remove("active-left");
})

rightE1.addEventListener("mouseenter", ()=>{
    containerE1.classList.add("active-right");
})
rightE1.addEventListener("mouseleave", ()=>{
    containerE1.classList.remove("active-right");
})
const btnE1= document.querySelector(".btn");
btnE1.addEventListener("click",()=>{
    window.location.href = 'https://www.apple.com/shop/buy-iphone';
})
const btnnE2= document.querySelector(".btnn");
btnnE2.addEventListener("click",()=>{
    window.location.href = 'https://www.samsung.com/sg/smartphones/galaxy-s21-5g/buy/';
})