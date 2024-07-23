// 1_ declaration d'une variable
let temps;

// 2_ Assigner une valeur a la variable
temps = "pleuveux"

// Verification de la valeur dans la console
console.log(temps);

alert("super, tu es arrivé sur mon site web !");
window.alert("j'affiche une nouvelle boite de dialogue");

// ecrire sur la page
document.write("<h1>c'est stylé le javascript mon pote!</h1>")

// demander a l'utilisateur une valeur (2facon)
let answer = prompt("Question: je ne sais pas du tout on est quel jour aujourd'hui");

// window.prompt("Question: je ne sais pas du tout on est quel jour aujourd'hui");
document.write(`<p>La reponse est :${answer}`);


let weather 

// camelcase
let weatherOfDay;

// pascalCase
let weatherOfDay;

// snakeCase
let weather_of_day;

// possibilité de reassigner une nouvelle valeur a notre variable de base
temps = "nuageux";
console.log(temps);

                        //*Les types de variables*//

// 1. Chaine de caracteres (sring)
let hollydays = "2020";
let destination = "Egypte"

// 2. Un nombre entier (integer ou init)
let year  2015;

// 3. Un nombre decimal (float)
let number = 3.55;

// 4. Un booléen (boolean VRAI/FAUX = TRUE/FALSE)
let condition =  false;

// 5. Une constante 
const pays = "France"       
const YEAR = 2021;
//  integer

// 6. connaitre le type d'une variable avec typeof
console.log(typeof YEAR);
console.log(typeof holidays);


// NUMBER => STRING
let othernumber = 20;
othernumber = othernumber.toString();
console.log(typeof othernumber);


// STRING => NUMBER
let number2 = "36";
// let number2 = 36.5;
number2 = parseInt(number2);
// number2 = parseFloat (number2);
console.log(typeof number2);