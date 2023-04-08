//Créez un programme qui affiche le résultat et le reste d’une division entre deux nombres.


//Exemples d’utilisation :
//$> python exo.py 5 2
//résultat: 2
//reste: 1


//$> python exo.py 10 0
//erreur.


//$> python exo.py 3 5
//erreur.


    let a = process.argv[2];
    let b = process.argv[3];
console.log(a, b);
   if ( a > b && a > 0 && b > 0) {
       let c = a / b 

       console.log("resultat :" + c)

let d = a % b
console.log("reste :" + d)
   }else{
    console.log("erreur")
   }
    