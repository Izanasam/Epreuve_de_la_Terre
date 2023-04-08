//Créez un programme qui affiche le nombre de caractères d’une chaîne de caractères passée en argument.


//Exemples d’utilisation :
//$> python exo.py “Hello world!”
//12


//$> python exo.py
//erreur.


//$> python exo.py “Bonjour” “Aurevoir”
//erreur.

//$> python exo.py 10
//erreur.

let a = process.argv.slice(2);
let c = a.toString();

    function exo(c){
    if (c >= 0 ){
      console.log("erreur");
    }
 
    else{
      console.log(c.length);
    }}
   exo(c);