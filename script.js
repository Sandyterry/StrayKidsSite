// base de données des membres

let membresData = [
    {
        nom: "Bangchan",
        image: ["images/ID/BangchanID.jpg"], 
        stagename: "Bangchan/CB97",
        birthname: "Christopher Bahng",
        koreanname: "Bahng Chan",
        birthday: "October 3, 1997",
        zodiacsign: "Libra",
        height: "171 cm",
        bloodtype: "O",
        mbtitype: "ENFJ",
        representativeanimal: "Wolf",
        unit: "3Racha",
        position: "Leader, Producer, Vocalist, Dancer, Rapper",
        instagram: "@gnabnahc",
        },
    {
        nom: "Felix",
        image: ["images/ID/FelixID.jpg"], 
        stagename: "Felix",
        birthname: "Felix Lee" ,
        koreanname: "Lee Yong Bok",
        birthday: "September 15, 2000",
        zodiacsign: "Virgo",
        height: "171 cm",
        bloodtype: "AB",
        mbtitype: "ESFJ",
        representativeanimal: "Chick",
        unit: "Dance Racha",
        position: "Vocalist, Dancer, Rapper",
        instagram: "@yong.lixx",
        
    },

    {
    nom: "Han",
    image: ["images/ID/HanID.jpg"], 
    stagename: "Han",
    birthname: "Han Ji Sung" ,
    koreanname: "Han Ji Sung",
    englishname: "Peter Han",
    birthday: "September 14, 2000",
    zodiacsign: "Virgo",
    height: "169 cm",
    bloodtype: "B",
    mbtitype: "ISTP",
    representativeanimal: "Quokka",
    unit: "3 Racha",
    position: "Rapper, Vocalist, Producer ",
    instagram: "none",
    },

    {
    nom: "Leeknow",
    image: ["images/ID/LeeknowID.jpg"], 
    stagename: "Lee Know",
    birthname: "Lee Min Oh" ,
    koreanname: "Lee Min Oh",
    birthday: "October 25, 1998",
    zodiacsign: "Scorpio",
    height: "172 cm",
    bloodtype: "O",
    mbtitype: "ISFP",
    representativeanimal: "Rabbit",
    unit: "Dance Racha",
    position: "Dance Leader, Dancer, Vocalist, Rapper ",
    instagram: "none",
    },

    {
    nom: "Changbin",
    image: ["images/ID/ChangbinID.jpg"], 
    stagename: "Changbin",
    birthname: "Seo Chang Bin" ,
    koreanname: "Seo Chang Bin",
    birthday: "August 11, 1999",
    zodiacsign: "Leo",
    height: "167 cm",
    bloodtype: "O",
    mbtitype: "ESFP",
    representativeanimal: "Pabbit (Pig + Rabbit)",
    unit: "3 Racha",
    position: "Rapper,Vocalist, Producer ",
    instagram: "@jutdwae",
    },

    {
        
    nom: "Seungmin",
    image: ["images/ID/SeungminID.jpg"], 
    stagename: "Seungmin",
    birthname: "Kim Seung Min" ,
    koreanname: "Kim Seung Min",
    birthday: "September 22, 2000",
    zodiacsign: "Virgo",
    height: "178 cm",
    bloodtype: "A",
    mbtitype: "ISFJ",
    representativeanimal: "Dog",
    unit: "Vocal Racha",
    position: "Vocalist ",
    instagram: "@miniverse.__",
    },
    {
        
        nom: "Hyunjin",
        image: ["images/ID/HyunjinID.jpg"], 
        stagename: "Hyunjin",
        birthname: "Hwang Hyun Jin" ,
        koreanname: "Hwang Hyun Jin",
        birthday: "Mars 20, 2000",
        zodiacsign: "Pisces",
        height: "179 cm",
        bloodtype: "B",
        mbtitype: "ESTP",
        representativeanimal: "Ferret",
        unit: "Dance Racha",
        position: "Dancer, Rapper, Vocalist, Visual ",
        instagram: "@hynjinnnn",
        },
        {
        
        nom: "I.N",
        image: ["images/ID/I.NID.jpg"], 
        stagename: "I.N",
        birthname: "Yang Jeong In" ,
        koreanname: "Yang Jeong In",
        birthday: "February 8, 2001",
        zodiacsign: "Aquarius",
        height: "172 cm",
        bloodtype: "A",
        mbtitype: "INFJ",
        representativeanimal: "Fenec Fox",
        unit: "Vocal Racha",
        position: "Vocalist, Maknae ",
        instagram: "@i.2.n.8",
        },
]

let nomMembreActuel = "Bangchan";

let Bangchan = document.querySelector("." + nomMembreActuel);
let popupContainer = document.querySelector(".popup_container")

Bangchan.addEventListener("click", function() {
    popupContainer.classList.toggle("active")
});



function chargerInformationsMembre(nomMembre) {
    // Trouver le membre dans la base de données
    let membre = membresData.find(m => m.nom === nomMembre);

    if (membre) {

        // Charger les informations du membre dans la modale
        
        document.querySelector('.imgidentite img').src = membre.image[0];
        document.getElementById('stagename').innerText = `Stage Name: ${membre.stagename}`;
        document.getElementById('birthname').innerText = `Birth Name: ${membre.birthname}`;
        document.getElementById('koreanname').innerText = `Korean Name: ${membre.koreanname}`;
        document.getElementById('birthday').innerText = `Birthday: ${membre.birthday}`;
        document.getElementById('zodiacsign').innerText = `Zodiac Sign: ${membre.zodiacsign}`;
        document.getElementById('height').innerText = `Height: ${membre.height}`;
        document.getElementById('bloodtype').innerText = `Blood Type: ${membre.bloodtype}`;
        document.getElementById('mbtitype').innerText = `MBTI Type: ${membre.mbtitype}`;
        document.getElementById('representativeanimal').innerText = `Representative Animal: ${membre.representativeanimal}`;
        document.getElementById('unit').innerText = `Unit: ${membre.unit}`;
        document.getElementById('position').innerText = `Position: ${membre.position}`;
        document.getElementById('instagram').innerText = `Instagram: ${membre.instagram}`;

        
      // Charger les informations du membre dans la modale
      chargerInformationsMembre(membre);
    }
}

// Associer un gestionnaire d'événements à chaque membre

document.querySelectorAll(".Membres > div").forEach(function(membre) {

    membre.addEventListener("click", function() {
        // Récupérer le nom du membre à partir du texte dans la balise span
        nomMembreActuel = membre.querySelector("span").innerText;

        // Charger les informations du membre dans la modale
        chargerInformationsMembre(nomMembreActuel);

        // Afficher la modale
        document.querySelector('.popup_container').classList.add("active");

              // Mettre à jour le carrousel avec les images du nouveau membre
              updateCarrousel(nomMembreActuel);
            });
        });


                            /* Carrousel */


function updateCarrousel(nomMembre) {
    nbr = 20;
    p = 0;
    container = document.getElementById("container");
    g = document.getElementById("g");
    d = document.getElementById("d");
    container.style.width = (420 * nbr) + "px";
    container.style.transition = "all 0.5s ease"; 

    // Effacer les anciennes images du carrousel
    container.innerHTML = "";

    for (i = 1; i <= nbr; i++) {
        div = document.createElement("div");
        div.className = "photo";
        div.style.backgroundImage = "url('images/Carrousel/" + nomMembre + i + ".jpg')";
        container.appendChild(div);
    }
    afficherMasquer();
}

document.body.onload = function() {
    // Charger le carrousel avec les images du membre par défaut
    updateCarrousel(nomMembreActuel);
};


// option fleches carrousel

g.onclick=function(){
    if(p>-nbr+1)
    p--;
    container.style.transform="translate("+p*420+"px)";
    container.style.trasition="all 0.5s ease ";
    afficherMasquer();
}

d.onclick=function(){
    if(p<0)
    p++;
    container.style.transform="translate("+p*420+"px)";
    container.style.transition="all 0.5s ease ";
    afficherMasquer();
}

// Options affichage desaffichage des fleches

function afficherMasquer(){
    if(p==-nbr+1)
        g.style.visibility="hidden";

    else
    g.style.visibility="visible";

    if(p==0)
    d.style.visibility="hidden";

else
d.style.visibility="visible";

}

// fermeture  et reinitialisation popup

function closePopup() {
    popupContainer.classList.remove("active");
    p = 0;
    container.style.transform = "translate(0px)";
    afficherMasquer();
}


                    // Caroussel mobile

// // Récupérez une référence vers le bouton boutonCarrouselMobile
// const boutonCarrouselMobile = document.querySelector('.boutonCarrouselMobile');

// // Ajoutez un gestionnaire d'événements de clic
// boutonCarrouselMobile.addEventListener('click', function() {
//     // Appelez la fonction updateCarrousel
//     updateCarrousel(nomMembreActuel);
// });