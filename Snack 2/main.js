'use strict'

const teams = [
    {
        nome: 'Team 1',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Team 2',
        puntiFatti: 0,
        falliSubiti: 0,
    },
];

console.log(teams);

const teamsModificato = teams.map((element, index, arr) => {
    return {
        nome: element.nome,
        puntiFatti: element.puntiFatti,
        falliSubiti: element.falliSubiti,
    };
});

console.log(teamsModificato);

const result = teamsModificato.map((element) => {
    element.puntiFatti = Math.floor(Math.random()*100)
    element.falliSubiti = Math.floor(Math.random()*100)
    
    return {
        nome: element.nome,
        falliSubiti: element.falliSubiti,
    };
});

console.log(result);