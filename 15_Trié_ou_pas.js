//Créez un programme qui détermine si une liste d’entiers est triée ou pas.


//Exemples d’utilisation :
//$> ruby exo.rb 9 8 3
//Pas triée !

//$> ruby exo.rb 3 8 9 12
//Triée !

//$> ruby exo.rb “Salut”
//erreur.

var args = process.argv;
var tab=[];


if(/^[a-zA-Z]+$/.test(args.slice(2))){
    console.log("erreur");
    return
}
function ch(args) {
    for (let i = 2; i < args.length; i++){
        tab.push(parseInt(args[i]));
        
        
    }
    
}
function check(tab) {
    true;
  
    for (let i = 0; i < tab.length; i++) {

          if (tab[i] > tab[i+1]) {
         return false;
        
        }
    }
}
ch(args);
if (check(tab) === false) {
    console.log("non triee");
    
}else{
    console.log("triee");
}



