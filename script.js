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

function buttonsToChangeDiv(color, height, width, text) {
    document.getElementById('changingDiv').style.backgroundColor = color;
    document.getElementById('changingDiv').style.width = width;
    document.getElementById('changingDiv').style.height = height;
    document.getElementById('changingDiv').innerHTML = text;
    console.log()
}

