/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*
Auteur code: Pien Leeuwenburgh
Studentnummer: 500691911
klas V1 10
Docenten: Jonathan Leenman en Michelle */




var button = document.getElementById('artikel1');
var button1 = document.getElementById('artikel2');
var button2 = document.getElementById('artikel3');
var button3 = document.getElementById('artikel4');
var button4 = document.getElementById('artikel5');

var inklappen = document.querySelector('.ART1');
var inklappen1 = document.querySelector('.ART2');
var inklappen2 = document.querySelector('.ART3');
var inklappen3 = document.querySelector('.ART4');
var inklappen4 = document.querySelector('.ART5');


inklappen.classList.add('hidden');
inklappen1.classList.add('hidden');
inklappen2.classList.add('hidden');
inklappen3.classList.add('hidden');
inklappen4.classList.add('hidden');



button.addEventListener('click', function(){
    inklappen.classList.toggle('hidden');
});

button1.addEventListener('click', function(){
    inklappen1.classList.toggle('hidden');
});


button2.addEventListener('click', function(){
    inklappen2.classList.toggle('hidden');
});


button3.addEventListener('click', function(){
    inklappen3.classList.toggle('hidden');
});


button4.addEventListener('click', function(){
    inklappen4.classList.toggle('hidden');
});











/* selecteer menu, zoeken en profiel -gegeven id in html-  */

var button5 = document.getElementById('menuknop');
var button6 = document.getElementById('zoekknop');
var button7 = document.getElementById('profielknop');

/* querySelector selecteert het element met classes */
var uitklappen = document.querySelector('.navigatie');
var zoekklappen = document.querySelector('.zoeken');
var profielklap = document.querySelector('.profiel');


/* Default: verbergt project en stage automatisch */
uitklappen.classList.add('hidden');
zoekklappen.classList.add('hidden');
profielklap.classList.add('hidden');


/*Voeg een addEventListener toe voor een muisklik die ervoor zorgt dat de functie uitgevoert wordt. */
button5.addEventListener('click', function(){
    uitklappen.classList.toggle('hidden');
});

button6.addEventListener('click', function(){
    zoekklappen.classList.toggle('hidden');
});


button7.addEventListener('click', function(){
    profielklap.classList.toggle('hidden');
});




