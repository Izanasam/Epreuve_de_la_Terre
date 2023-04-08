//Créez un programme qui transforme une heure affichée en format 24h en une heure affichée en format 12h.


//Exemples d’utilisation :
//$> ruby exo.rb 23:40
//11:40PM

//Attention : midi et minuit.

let a = process.argv.slice(2);
let c = a.toString();
function heure(c){

    let heure = (c[0])
    let heure1 = (c[0]+(c[1]))
    let heures = (c[1])
    let minutes = (c[3])
    let minute = (c[4])

    if( heure1 == 00)
    {
        
let heure1 = 12

console.log(heure1 +":" + minutes + minute +"AM")}
if (heure == 0 ){
    let minutes = (c[2])
    let minute = (c[3])
    
    } 
    if (heure1 <= 12 && heure1 > 01){

        console.log(heure + heures +":" + minutes + minute +"AM")
    }
    if ( heure1 >= 13 && heure1 <= 23){
        console.log(heure + heures +":" + minutes + minute +"PM")
    }
}
heure(c)
