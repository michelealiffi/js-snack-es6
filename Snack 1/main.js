'use strict';

const bikes = [
    {
        nome: 'Bike 1',
        peso: 5,
    },
    {
        nome: 'Bike 2',
        peso: 23,
    },
    {
        nome: 'Bike 3',
        peso: 2,
    },
    {
        nome: 'Bike 4',
        peso: 33,
    },
    {
        nome: 'Bike 5',
        peso: 15,
    },
];

let biciLeggera = bikes[0];

for(let i = 0; i < bikes.length; i++) {

    const biciAttuale = bikes[i];

    if(biciAttuale.peso < biciLeggera.peso) {
        biciLeggera = biciAttuale;
    }
}

console.log(biciLeggera);
