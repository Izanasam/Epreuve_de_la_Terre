//Créez un programme qui affiche si un nombre est premier ou pas.


//Exemples d’utilisation :
//$> node exo.js 5
//Oui, 5 est un nombre premier.

//$> node exo.js 6
//Non, 6 n’est pas un nombre premier.

//Attention : 0 et 1 ne sont pas des nombres premiers. Gérez les erreurs d’arguments.

    let a = process.argv[2];
    function nbrPremier(a) {
        for(var i = 2; i < a; i++)
          if(a%i === 0) return false;
        return a > 1;
      }
      if (nbrPremier(a) === true) {
        console.log(a + " est premier");}
        else { console.log(a + " n'est pas premier");}
      