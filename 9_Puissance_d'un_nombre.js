//Créez un programme qui affiche le résultat d’une puissance.


//L’exposant ne pourra pas être négatif.


//Exemples d’utilisation :
//$> node exo.js 2 3
//8

//Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.

    let a = process.argv[2];
    let b = process.argv[3];

    let resultat = a ** b

    if (resultat >= 0) {

        console.log(resultat)
        
    }else{
        console.log("erreur le resultat est négatif")
    }