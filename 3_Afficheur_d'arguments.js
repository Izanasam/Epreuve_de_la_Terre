//Créez un programme qui affiche les arguments qu’il reçoit ligne par ligne, peu importe le nombre d’arguments.


//Exemples d’utilisation :
//$> ruby exo.rb je suis solide !
//je
//suis
//solide
//!

let arg = process.argv.slice(2);

for (let i = 0; i < arg.length; i++) {
    const element = arg[i];
    console.log(arg[i])
    
}