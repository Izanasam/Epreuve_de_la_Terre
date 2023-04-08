//Créez un programme qui affiche l’inverse de la chaîne de caractères donnée en argument.


//Exemples d’utilisation :
//$> node exo.js “Hello world!”
//!dlrow olleH


//$> node exo.js “lehciM”
//Michel

//Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.


    let a = process.argv.slice(2);

 function inverser(a) {
      for (let c = 0; c < a.length; c++) {
            a[c] = a[c].split('').reverse().join('')
            
      }
    
       return a.toString('');
 }
    let b = inverser(a);

    console.log(b)