//Hamburger menu:
//mostrare / nascondere il menu principale
//(ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
//Partite come base del vostro esercizio scaricando questa repo:
//https://bitbucket.org/teachersboolean/ex-hamburger-menu-base/downloads/
//Ricordate di scrivere solo il codice JavaScript e non modificare HTML e CSS
//Consiglio del giorno:
//Partite dal comprendere bene come è fatto il DOM e il CSS, potete usarli a vostro vantaggio!

let burger = document.querySelector('.header-right > a');

burger.addEventListener('click', activate)
function activate(){
    let menu = document.querySelector('.hamburger-menu');
    menu.classList.add('active')
    console.log(menu)
}

let crossBurger = document.querySelector('.close');
crossBurger.addEventListener('click', deactivate);
function deactivate(){
    let menu = document.querySelector('.hamburger-menu');
    menu.classList.remove('active')
    console.log(menu)
}
