//Créez un programme qui transforme une heure affichée en format 12h en une heure affichée au format 24h.


//Exemples d’utilisation :
//$> ruby exo.rb 11:40PM
//23:40

//Attention : midi et minuit.

let a = process.argv.slice(2);
let c = a.toString();

function heure(c){


    let heure = (c[0])
    let heures = (c[1])
    let minutes = (c[3])
    let minute = (c[4])
    let heure1 = (c[0]+c[1])
    let AM = (c[5]+(c[6]));

if ( heure1 == '12' && AM ==="AM") { // MINUIT
    
    let heure = 0
    let heures = 0
    
    console.log(heure + heures +':'+ minutes + minute ) 
}
if (heure1 > 0 && heure1 <= 11 && AM === "AM") {   // MATIN 
    console.log(heure + heures +':'+ minutes + minute ) 
}
if (heure1 >= 12 && heure1 <= 23 && AM == "PM"){    //APRES MIDI && SOIR    
    let heure2 = (heure + heures) - 12 + 24
    console.log(heure1 + ':'+ minutes + minute ) 
}
}


heure(c)