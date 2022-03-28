//Variabile per memorizzare i km che l'utente deve percorrere
const km_da_percorrere = document.getElementById('km');
//Variabile per memorizzare fascia di età del passeggero
const fascia_di_eta = document.getElementById('eta');
//Variabile per memorizzare il prezzo per percorrere un km
const prezzo_al_km = 0.21;
//Variabile per memorizzare la percentuale di sconto per gli under 18 sottratta a 1
const sconto_under_18 = 1 - 0.2;
//Variabile per memorizzare la percentuale di sconto per gli over 65 sottratta a 1
const sconto_over_65 = 1 - 0.4;
//Variabile per memorizzare il prezzo del viaggio
let prezzo;
//Variabile per il bottone genera
const genera = document.getElementById('genera');
//Variabile per il bottone annulla
const annulla = document.getElementById('annulla')
//Variabile per stampare il prezzo a schermo
const price_number = document.querySelector('.price_number');
//variabile per stampare a schermo il codice cp
const cp_code_number = document.querySelector('.cp_code_number');
//Variabile per stampare a schermo il numero della carrozza
const carriage_number = document.querySelector('.carriage_number')
//Variabile per stampare a schermo gli sconti
const discount_number = document.querySelector('.discount_number')
//Variabile pèer salvare il nome del passeggero
let name_value;
//Variabile per stampare a schermo il nome del paseggero
const personal_name = document.querySelector('.personal_name');


genera.addEventListener("click", 

function(){
    
    if (fascia_di_eta.value == '18_plus'){
        prezzo = Number(km_da_percorrere.value * prezzo_al_km).toFixed(2);
        discount_number.innerHTML = 'sconti non previsti'
    }
    else if (fascia_di_eta.value == 'underage') {
        prezzo = Number(km_da_percorrere.value * prezzo_al_km * sconto_under_18).toFixed(2);
        discount_number.innerHTML = 'sconto minorenni 20%'
    }
    else {
        prezzo = Number(km_da_percorrere.value * prezzo_al_km * sconto_over_65).toFixed(2);
        discount_number.innerHTML = 'sconto over 65 40%'
    }

    price_number.innerHTML = prezzo + ' €';

    cp_code_number.innerHTML = Math.floor(Math.random() * 10000) + 1;

    carriage_number.innerHTML = Math.floor(Math.random() * 10) + 1;

    name_value = document.getElementById('name').value;

    personal_name.innerHTML = name_value;
}
)

annulla.addEventListener("click",

function() {
    discount_number.innerHTML = 'xx'

    price_number.innerHTML = 'xx';

    cp_code_number.innerHTML = 'xx';

    carriage_number.innerHTML = 'xx'

    personal_name.innerHTML = '.............';
}

)


