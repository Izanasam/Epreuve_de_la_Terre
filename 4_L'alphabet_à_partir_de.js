//Créez un programme qui affiche l’alphabet à partir de la lettre donnée en argument en lettres minuscules suivi d’un retour à la ligne.


//Exemples d’utilisation :
//$> python exo.py n
//nopqrstuvwxyz
//$>


//Attention : votre programme devra utiliser une boucle.

    let a = process.argv[2];
    var b = "abcdefghijklmnopqrstuvwxyz";
    var z = b.indexOf(a);

    for (let c = z; c < b.length; c++) {
        const element = b[c];
        console.log(b[c])
        
    }
       
    return
        
    
        
    


  

