
const km = document.querySelector('.km');

const eta = document.querySelector('.eta');

const genera = document.getElementById("genera");

const annulla = document.getElementById("annulla");

const prezzo_al_km = 0.21;

const sconto_under_18 = 0.2;

const sconto_over_65 = 0.4

let costo_biglietto = km.value * prezzo_al_km;

let price = document.querySelector('.price');
 
if (eta.value == 'minorenne'){
    costo_biglietto *= (1 - sconto_under_18)
}
else if (eta.value == "over_65"){
    costo_biglietto *= (1 - sconto_over_65)
}

genera.addEventListener('click', 
    
function() {
    price.innerHTML = costo_biglietto.toFixed(2);
}
)

annulla.addEventListener('click', 
    
function() {
    km.value = "";
    window.location.reload();
}
)