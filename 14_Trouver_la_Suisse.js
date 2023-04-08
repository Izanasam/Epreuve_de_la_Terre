//Créez un programme qui prend en paramètre trois entiers et affiche la valeur du milieu.


//Exemples d’utilisation :
//$> ruby exo.rb 11 40 34
//34

//$> ruby exo.rb 2 1 3
//2

//$> ruby exo.rb 2 2 2
//erreur.

let a = process.argv.slice(2);
let b = process.argv.slice(3);
let c = process.argv.slice(4);
function suisse(a,b,c) {

   if (a > b && a < c) {
    console.log (a)
   } if ( a < b && a > c){
    console.log (a)
   }
   if (b > a && b < c){
    console.log (b)}
    if (b > c && b < a){
        console.log (b)
    }
    if (c > a && c < b){
        console.log (c)
    } if (c > b && c < a){
        console.log (c)}
    }
        suisse(a,b,c);