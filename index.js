//interaction avec la console : variables

let chiffre = 24;

let nouvelleChaine = `Température : ${chiffre} + degrés`;

console.log(nouvelleChaine);

//TYPES DE DONNEES EN JS

let string = "cc c moa la chene, ki se dit string an engler"; // chaine de caractère
let number = 24; //chiffre
let boolean = true; // booleen
let array = ["je", "suis", 24, false]; //tableau, avec des crochets

let object = {
  prenom: "Nicolas",
  nom: "CARPITA",
  age: 26,
};
//Objet, avec accolades, le contenu se dispose sous forme -index: "valeur",-

console.log(object);

//LES OPERATEURS

    console.log(4 + 5);

    // Operateurs d'affectation

    let total = 0;
    

    total++;  //ajout de 1
    total += 5; //ajout de 5
    total *= 5 // multiplie par 5
    
    let x = 4
    total = total + x

    console.log(total);


// LES STRUCTURES DE CONTROLE

let a = 2;
let b = 5;

if (a < b) {
    console.log("a est inferieur à b");
} else {
    console.log("a est superieur à b");
}

if (!a) {
    console.log("a existe");
}

if (a === b) {
    console.log("true");
} else {
    console.log("false");
}     //triple égal permet de verifier une égalité, si le type et contenu est identique

if (a == b) {
    console.log("true");
} else {
    console.log("false"); 
}   // deux egal verifie le contenue sans se soucier du type, chiffre ou texte par ex

if (a != b || a < b && b >= 5) {
    console.log("true");
}else {
    console.log("false");
}  // || = OU et && = ET



// LES FONCTIONS

function faireQuelqueChose() {
    console.log("je suis un cours JS");
    console.log(5 + 6);
}  //Il faut imperativement appeler la fonction pour la jouer

faireQuelqueChose()

//Fonctions flechés 

const addition = (a, b) => {
    console.log(a + b);
};

addition(100, 134)

//Deux syntaxes pour faire la meme chose, la difference

// La portée des Variables

function add2() {
    let a = 4;
    console.log(a + 2);
}

add2()

