/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*
Auteur code: Pien Leeuwenburgh
Studentnummer: 500691911
klas V1 10
Docenten: Jonathan Leenman en Michelle */



/* selecteer project en stage formulieren  */
var formProject = document.getElementById('project');
var formStage = document.getElementById('stage');

/* querySelector selecteert het element met argumenten name='submit-for' en value='project' of 'stage' */
var radioProject = document.querySelector('input[name=submit-for][value=project]');
var radioStage = document.querySelector('input[name=submit-for][value=stage]');


/* Default: verbergt project en stage automatisch */
formProject.classList.add('hidden');
formStage.classList.add('hidden');


/*Voeg een addEventListener toe voor een muisklik die ervoor zorgt dat de functie uitgevoert wordt. */
/* De functie verwijderd de 'hidden' stijl en voegt 'mystyle' toe en zet het andere formulier op hidden.*/
radioProject.addEventListener('click', function(){
    formProject.classList.remove('hidden');
    formProject.classList.add('mystyle');
    formStage.classList.add('hidden');
});

radioStage.addEventListener('click', function(){
    formStage.classList.remove('hidden');
    formStage.classList.add('mystyle');
    formProject.classList.add('hidden');
});
