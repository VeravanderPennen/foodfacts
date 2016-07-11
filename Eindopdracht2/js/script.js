/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*bronvermelding: lessen Programmeren 2015, D. de Vries, CMD, Amsterdam. + W3schools.com. + B. Pronk. */

var submitQuiz = document.getElementById('btn');
var vragenLijst = document.getElementById('vragenlijst');
var recept = document.getElementById('recept');
var feedbackBox = document.getElementById('uitleg');

// goede en foute antwoorden in array
var antwoordgoed = document.querySelectorAll('.antwoordgoed');
var antwoordfout = document.querySelectorAll('.antwoordfout');

var feedback = function(x) { //algemene feedback in het midden, feedback vanuit quiz, aantalBoterhammen of tips
    feedbackBox.textContent = x; //waarde wordt later gegeven via feedback(x)
    feedbackBox.className = 'greenback'; // meegegeven voor groene achtergrond css
};

submitQuiz.addEventListener('click', function() {
    event.preventDefault();

    if (antwoordgoed[0].checked == true) {
        antwoordgoed[0].className = 'correct'; //zie css, als goed > verspringt
    }
    if (antwoordgoed[1].checked == true) {
        antwoordgoed[1].className = 'correct'; //zie css, als goed > verspringt
    }
    if (antwoordgoed[2].checked == true) {
        antwoordgoed[2].className = 'correct'; //zie css, als goed > verspringt
    }
    if (antwoordgoed[0].checked && antwoordgoed[1].checked && antwoordgoed[2].checked) {
        vragenLijst.className = 'none';
        recept.className = '';
    } else if (antwoordgoed[0].checked || antwoordgoed[1].checked || antwoordgoed[2].checked){
        feedback('Niet alle antwoorden zijn juist, probeer het nog eens.');
    } else {
        feedback('Geen enkel antwoord dat jij gaf was juist, probeer het nog eens.');
    }
});

var submitBoterham = document.getElementById('stuurBoterham'); //verzenden-button voor aantal boterhammen
var aantalBoterhammen = document.getElementById('aantalBoterhammen'); //input text field
var aantalVezels = 2; // aantal vezels per boterham
var hoeveelheidVezels; //wordt later een waarde aan gegeven

//na het klikken op verzenden, wordt de waarde aantalBoterhammen gecheckt en een tekst meegegeven in feedbackBox
submitBoterham.addEventListener('click', function() {
    event.preventDefault();

    hoeveelheidVezels = aantalBoterhammen.value * aantalVezels; //waarde geven aan hoeveelheidvezels, value is voor waarde inputfield.

    if (hoeveelheidVezels < 10) {
        feedback('Jij eet ' + hoeveelheidVezels + ' gram vezels. Dit is te weinig boterhammen. Je zou het eventueel aan kunnen vullen met bonen en fruit.');
    } else if (hoeveelheidVezels >= 10 && hoeveelheidVezels <= 20) {
        feedback('Jij eet ' + hoeveelheidVezels + ' gram vezels. Dit is precies goed, gezond bezig! ');
    } else {
        feedback('Jij eet ' + hoeveelheidVezels + ' gram vezels. Je eet teveel boterhammen. Vervang een aantal boterhammen door bijvoorbeeld fruit of een salade.');
    }
});

var submitTip = document.getElementById('stuurTip'); //tweede button = tip-button

//na het klikken op tip-button, wordt een random tip gegeven in feedbackBox
submitTip.addEventListener('click', function() {
    event.preventDefault();

    var randomTip = Math.ceil(Math.random() * 6); //math.ceil rond af naar boven, math.random zorgt voor random cijfer.

    switch (randomTip) { //geeft random tip na klikken op tip-button
        case 1:
            feedback("In witte boterhammen zitten weinig tot geen vezels");
        break;

        case 2:
            feedback("Met bonen kunt u lekker varieren bij een warme maaltijd");
        break;

        case 3:
            feedback("Een handje noten zit vol met vezels!");
        break;

        case 4:
            feedback("Witte rijst vervangen voor zilvervliesrijst is een goed idee vanwege de vezels");
        break;

        case 5:
            feedback("Wat fruit tussendoor is een goede aanvulling voor de vezels & vitamines.");
        break;

        case 6:
            feedback("(Gedroogde) pruimen is een populair product om extra vezels binnen te krijgen");
        break;

        default: //voor als alles niet werkt op een of andere manier
            feedback("Groene groenten zijn goed voor de vezelsaanvulling");
        break;
    }
});

//array van de receptafbeeldingen
var receptKeuze = document.querySelectorAll('#receptkeuze li');

//functie mag niet in loop, later aangeroepen als showRecept
var showRecept = function() {
    this.textContent = 'Vind dit recept op ah.nl/recepten';
};

//loop: bij dubbelklik recept > laat recept(locatie) zien
var i;
for (i = 0; i < receptKeuze.length; i++) {
    receptKeuze[i].addEventListener('dblclick', showRecept);
}
