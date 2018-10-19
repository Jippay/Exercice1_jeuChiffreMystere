/*
le logiciel choisi un chiffre entre 1 et 100 = chiffre mystere
ouverture de la boucle
le logiciel demande à l'utilisateur un chiffre entre 1 et 100 = proposition
le logiciel compare le chiffre proposé
le logiciel annonce le coups

si le chiffre est trop grand, le logiciel annonce "trop grand"
le logiciel redemande un chiffre à l'utilisateur

si le chiffre est trop petit, le logiciel annonce "trop petit"
le logiciel redemande un chiffre à l'utilisateur

si le chiffre est le bon, le logiciel annocne "bravo!"
le logiciel annonce le nombre de coups effectué
fin du jeu
*/
///////////////////////**/ */

/*variable*/
var nbMystere;
var proposition;
var coups = 0;
nbMystere = nbAleatoire();
    console.log(nbMystere);
chiffremax = chiffre();


chiffremax = parseInt(prompt("Proposez un chiffre maximum"));

function chiffre() /*chiffre max choisi par l'utilisateur*/
{
    Math.floor(Math.random() * chiffremax) + 1;
}
chiffre();

/*boucle tant que le chiffre n'est pas trouvé*/
while (proposition != nbMystere )
{
    proposition = parseInt(prompt("Proposez un chiffre entre 1 et" + chiffremax));
    console.log("coups:", coups);
    coups++;

    if (proposition > nbMystere) 
        {
        console.log("chiffre trop grand ! On recommence !");
        } else if (proposition < nbMystere)
        {
        console.log("chiffre trop petit ! On recommence !");
        } else
        {
        console.log("C'est le bon chiffre ! Bravo !");
        }
}
/*fin de la boucle*/

/*fonction chiffre aléatoire*/
function nbAleatoire( min, max)
{
    min=0
    max= chiffre()

    return Math.floor(Math.random() * chiffremax);
}
console.log("tu a trouvé en :" , coups, "coups");

if (coups == 1)
    {
        console.log("FANTASTIQUE ! Tu est un dieu !");
    }
    else if (coups <= 15)
    {
        console.log("bien ... mais peut mieux faire");
    }
    else if (coups >= 16)
    {
        console.log("arf ", coups, " coups ... sans commentaire !");
    }
