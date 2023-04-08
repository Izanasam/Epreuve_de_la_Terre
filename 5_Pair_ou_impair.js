//Créez un programme qui permet de déterminer si l’argument donné est un entier pair ou impair..


//Exemples d’utilisation :
//$> ruby exo.rb 2
//pair

//$> ruby exo.rb 5
//impair


//$> ruby exo.rb Bonjour
//Tu ne me la mettras pas à l’envers.

//$> ruby exo.rb
//Tu ne me la mettras pas à l’envers.


//Attention : gérez aussi les entiers négatifs.


    let a = process.argv.slice(2);

if (a % 2 == 1) {
    
    console.log("nombre impair");
    return;
} if (a % 2 == 0) {
    console.log("nombre pair")
    return;
} else {
    console.log("tu ne m'auras pas sacripan !");
    
}