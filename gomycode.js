//minify html permet de compresserle fichier html // 
 //sweetalert https://sweetalert2.github.io/
 // setimeout set interval 
 //BOM
 //WINDOW.BTOA chiffre les donné et atob
// let message = "bonjour"
//  if(message) {
//   setTimeout
//  }

// local storage 

// le dom 
// getelementbyId 
/***** permet de selectioner les id  */
// const id = document.getElementById("text-2")
// const selector = document.querySelector(" h1")
// const all = document.querySelectorAll(" h1")
// const im = document.images// selectionne toute les image 
// let links = document.links // selectionne les lien 
// let forms = document.forms // selectionne uniqement les formulaires /:
// console.log(forms[0].message) // acces effectuer sur les elements du formulaire par leame :
// console.log(id)
// console.log(selector)
// console.log(all)



// const premier_titre = document.querySelector("h1");
// const paragraph = document.querySelector("p");
// const button = document.querySelector("button");


// const titre = prompt("Entrez le titre principal :");
// const texte = prompt("Entrez le texte du paragraphe :");
// const buttonText = prompt("Entrez le texte du bouton :");

// console.log( premier_titre.innerHTML = titre)
// console.log(paragraph.innerHTML = texte)
// console.log(button.innerHTML = buttonText)


//.  acces u attribut 
// const elements = document.querySelectorAll('#formulaires *');


// elements.forEach(element => {
//     if (element['riqued'] === undefined || element['riqued'] === null) {
//         element['riqued'] = '';
//     }
// });

// alert('Tous les éléments du formulaire ont maintenant l\'attribut "riqued".');

//ajouter et supprime les class

//classlist add



//classlist remove



//classlist togle


//contains


//document create element 
//append
//text

// const status_de_validation = document.getElementById('status');

// const age = prompt('quel est votre age')


// if (age > 17) {
//     status_de_validation.innerHTML = 'valide';
//     status_de_validation.classList.add('valide');
// } else {
//     status_de_validation.innerHTML = 'non valide';
//     status_de_validation.classList.add('invalide');
// }


// let button = document.querySelector("button")
// let input = document.querySelector('input');
// let p = document.querySelector('p')

// button.addEventListener('click',()=>{
//     console.log(input.value)
//    document.body.style.backgroundColor = input.value
//    p.classList.add('active')
// })

// addEventListener("wheel", (event) => {
//   console.log() 
// });




// set interval

setInterval(()=>{

},100)

// let [film1 , film2 , film3] = [{
//     info1 :{
//         titre : "marvel",
//         acteur: ["jjj","bjdcn","kkjhd"],
//         année : 2015
//     }},
//     {info2 :{
//         titre : "mdcXmarvel",
//         acteur: ["jjj","bjdcn","kkjhd"],
//         année : 2015
//     }},
//     {info3 :{
//         titre : "capcom",
//         acteur: ["jjj","bjdcn","kkjhd"],
//         année : 2015
//     }}
// ]

// console.log(film1)

//e.key evenement clavier 

// bloquer l'element avec le prevent default 

// mouse enter leave  permet de faire un hover
//  mousemove permet de ressortir la position de la souris 


// window.onmousemove=(e)=>{
//     console.log(e) // represente un objet qui sont des propriete
// }

// window.onscroll=()=>{
//     // retourne le position du scroll
    
// }
// scrollTo(0,0) // prend deux parametre x et y met permte daller

// <!--
//   form validation

// username  (entre 6  et 11) text
 
// email    (  @  )     text

// age    (age>= 18)   number

// pwd  (entre 8 et 15 )  password

// confirm mdps  (pwd == confirm password)  password
// blur 

// btn.disabled=false

// <button></button>
// let form = document.createElement("form")
// form.setAttribute("action", "")

// // 
// let labels = ["username","email","age","passeword"]
// let inputTypes = ["text","text" ,"number" , "text"]
// let ids = ["username", "email" , "age" , "passeword"]

// for(let i=0; i<labels.length; i++){
//     //creation du label

//     let label = document.createElement("label")
//     label.setAttribute("for" ,labels[i] )
//     label.innerHTML = labels[i]
//     // creation de l'input et de ses attributs

//     let input = document.createElement("input")
//     input.setAttribute("type", inputTypes[i])
//     input.setAttribute("id" ,ids[i])
//     input.setAttribute("name", ids[i])

//     // creation de ses elements comme les enfants 

//     form.appendChild(label)
//     form.appendChild(input)
//     form.appendChild(document.createElement("br"))
// }


// let button = document.createElement("button");
//     button.innerHTML = "Valider";
//     form.appendChild(button)
//     document.body.appendChild(form);
//     button.disabled = true


//     let username = form.username;
//     let age = form.age;
//     let password = form.passeword;

// password.addEventListener('blur', function() {
//     button.disabled = false

    
//     if (username.value.length < 6 || username.value.length > 8) {
//         alert('Le nom dutilisateur doit avoir entre 6 et 8 caractères.');
//     } else {

//     }

//     if (age <= 18) {
//         alert('lage doit être supérieur à 18');
//     }

//     if (password.length < 8) {
//         alert('Le mot de passe doit contenir au moins 8 caractères');
//     }

    
     
class Voiture {
    constructor(marque, modele, année){
        this.marque = marque;
        this.modele =modele;
        this.année = année
    }
    
    infos() {
        console.log(`cette voiture est une ${this.marque} ,modele ${this.modele},de l'année ${this.année}`)
    }
}

let choix1 = new Voiture('bmw', 'serie 3' , 2022)
let choix2 = new Voiture('bmw', 'X5' , 2020)
let choix3 = new Voiture('bmw', 'serie 1' , 2019)

for(let appli of [choix1,choix2,choix3]){
    appli.infos()
}
