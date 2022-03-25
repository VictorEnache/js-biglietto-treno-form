
const km = document.querySelector('.km');

let eta = document.querySelector('.eta');

const genera = document.getElementById("genera");

const annulla = document.getElementById("annulla");

const prezzo_al_km = 0.21;

const sconto_under_18 = 0.2;

const sconto_over_65 = 0.4

let costo_biglietto;

let price = document.querySelector('.price');

let discount = document.querySelector(".discount");


genera.addEventListener('click', 
    
function() {
    costo_biglietto = km.value * prezzo_al_km;

    price.innerHTML = costo_biglietto.toFixed(2);
    
    document.querySelector('.carrozza').innerHTML = Math.floor(Math.random() * 10) + 1;

    document.querySelector('.CP').innerHTML = Math.floor(Math.random() * 10000) + 1;

    if (eta.value == 'minorenne'){
        costo_biglietto *= (1 - sconto_under_18);
        discount.innerHTML = "Sconto under 18 del 20%";
    }
    else if (eta.value == 'over_65'){
        costo_biglietto *= (1 - sconto_over_65);
        discount.innerHTML = "Sconto over 65 del 40%";
    }
    
    else{
        discount.innerHTML = "Non sono stati applicati sconti"
    }


}
)

annulla.addEventListener('click', 
    
function() {
    km.value = ''
    eta.value = 'minorenne'
}
)



console.log(km.value)
console.log(costo_biglietto)