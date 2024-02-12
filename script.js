function firstChange(color, height, width, text) {
    document.getElementById('changingDiv').style.backgroundColor = color;
    document.getElementById('changingDiv').style.width = width;
    document.getElementById('changingDiv').style.height = height;
    document.getElementById('changingDiv').innerHTML = text;
    console.log()
}

function secoundChange(/*Denne kaller på parametre som listes opp i knappen f.eks*/) {
    document.getElementById('changingDiv').innerHTML = '';

    //Her viser jeg hva parametrene gjør i diven og viser hva det gjør.
}

//Ved å gi alle knappene det samme navnet vil alle utnytte samme funksjon å gjøre koden ryddigere. ved å bruke Parametre kan vi endre hva vil vil at hver knapp skal vise.
function buttonsToChangeDiv(color, height, width, text) {
    document.getElementById('changingDiv').style.backgroundColor = color;
    document.getElementById('changingDiv').style.width = width;
    document.getElementById('changingDiv').style.height = height;
    document.getElementById('changingDiv').innerHTML = text;
    console.log()
}

