/*
Auteur : Charles-Olivier Lefebvre
Da : 2130875
Session : H2022
*/

function rememberLanguage(){
    if (localStorage.getItem("EN") === "true") {
        document.getElementById("EN").disabled = true;
        changeTextEnglish();
        
    } else {
        document.getElementById("FR").disabled = true;
    }

    if(localStorage.getItem("25") == "true"){
        display25();
    } else if(localStorage.getItem("50") == "true"){
        display50();
    } else if(localStorage.getItem("75") == "true"){
        display75();
    }else {
    display100();
    }
    
}
function date(){
    var date = (new Date()).toISOString().split("T")[0];
    document.getElementById("date").innerHTML = "date : " + date;
}

function goTop(){
 window.scrollTo({top : 0, behavior:"smooth"});
}

function display25() {
    localStorage.setItem("25", "true");
    if (localStorage.getItem("100") === "true"){
        localStorage.removeItem("100");
    }
    if (localStorage.getItem("75") === "true"){
        localStorage.removeItem("75");
    }
    if (localStorage.getItem("50") === "true"){
        localStorage.removeItem("50");
    }

    document.getElementById("cinquante").disabled = false;
    document.getElementById("soixante-quinze").disabled = false;
    document.getElementById("cent").disabled = false;
    document.getElementById("vint-cinq").disabled = true;
    document.getElementById("home").style.filter = "brightness(25%)";
    document.getElementById("galerie").style.filter = "brightness(25%)";
    document.getElementById("gear").style.filter = "brightness(25%)";
    document.getElementById("about").style.filter = "brightness(25%)";
    document.getElementById("me").style.filter = "brightness(25%)";
    document.getElementById("text1").style.filter = "brightness(25%)";
    document.getElementById("text3").style.filter = "brightness(25%)";
    document.getElementById("text4").style.filter = "brightness(25%)";
    document.getElementById("text5").style.filter = "brightness(25%)";
    document.getElementById("text6").style.filter = "brightness(25%)";
    document.getElementById("text7").style.filter = "brightness(25%)";
    document.getElementById("text8").style.filter = "brightness(25%)";
    document.getElementById("text9").style.filter = "brightness(25%)";
    document.getElementById("text10").style.filter= "brightness(25%)";
    document.getElementById("text11").style.filter = "brightness(25%)";
    document.getElementById("text12").style.filter = "brightness(25%)";
    document.getElementById("text13").style.filter = "brightness(25%)";
    document.getElementById("text14").style.filter = "brightness(25%)";
    document.getElementById("text15").style.filter = "brightness(25%)";
    
}

 
function display50() {
    localStorage.setItem("50", "true");
    if (localStorage.getItem("100") === "true"){
        localStorage.removeItem("100");
    }
    if (localStorage.getItem("75") === "true"){
        localStorage.removeItem("75");
    }
    if (localStorage.getItem("25") === "true"){
        localStorage.removeItem("25");
    }

    document.getElementById("cent").disabled = false;
    document.getElementById("soixante-quinze").disabled = false;
    document.getElementById("cinquante").disabled = true;
    document.getElementById("vint-cinq").disabled = false;
    document.getElementById("home").style.filter = "brightness(50%)";
    document.getElementById("galerie").style.filter = "brightness(50%)";
    document.getElementById("gear").style.filter = "brightness(50%)";
    document.getElementById("about").style.filter = "brightness(50%)";
    document.getElementById("me").style.filter = "brightness(50%)";
    document.getElementById("text1").style.filter = "brightness(50%)";
    document.getElementById("text3").style.filter = "brightness(50%)";
    document.getElementById("text4").style.filter = "brightness(50%)";
    document.getElementById("text5").style.filter = "brightness(50%)";
    document.getElementById("text6").style.filter = "brightness(50%)";
    document.getElementById("text7").style.filter = "brightness(50%)";
    document.getElementById("text8").style.filter = "brightness(50%)";
    document.getElementById("text9").style.filter = "brightness(50%)";
    document.getElementById("text10").style.filter = "brightness(50%)";
    document.getElementById("text11").style.filter = "brightness(50%)";
    document.getElementById("text12").style.filter = "brightness(50%)";
    document.getElementById("text13").style.filter = "brightness(50%)";
    document.getElementById("text14").style.filter = "brightness(50%)";
    document.getElementById("text15").style.filter = "brightness(50%)";
}


function display75() {
    localStorage.setItem("75", "true");
    if (localStorage.getItem("100") === "true"){
        localStorage.removeItem("100");
    }
    if (localStorage.getItem("25") === "true"){
        localStorage.removeItem("25");
    }
    if (localStorage.getItem("50") === "true"){
        localStorage.removeItem("50");
    }
    document.getElementById("vint-cinq").disabled = false;
    document.getElementById("soixante-quinze").disabled = true;
    document.getElementById("cent").disabled = false;
    document.getElementById("cinquante").disabled = false;
    document.getElementById("home").style.filter = "brightness(75%)";
    document.getElementById("galerie").style.filter = "brightness(75%)";
    document.getElementById("gear").style.filter = "brightness(75%)";
    document.getElementById("about").style.filter = "brightness(75%)";
    document.getElementById("me").style.filter = "brightness(75%)";
    document.getElementById("text1").style.filter = "brightness(75%)";
    document.getElementById("text3").style.filter = "brightness(75%)";
    document.getElementById("text4").style.filter = "brightness(75%)";
    document.getElementById("text5").style.filter = "brightness(75%)";
    document.getElementById("text6").style.filter = "brightness(75%)";
    document.getElementById("text7").style.filter = "brightness(75%)";
    document.getElementById("text8").style.filter = "brightness(75%)";
    document.getElementById("text9").style.filter = "brightness(75%)";
    document.getElementById("text10").style.filter = "brightness(75%)";
    document.getElementById("text11").style.filter = "brightness(75%)";
    document.getElementById("text12").style.filter = "brightness(75%)";
    document.getElementById("text13").style.filter = "brightness(75%)";
    document.getElementById("text14").style.filter = "brightness(75%)";
    document.getElementById("text15").style.filter = "brightness(75%)";
}

function display100() {
    localStorage.setItem("100", "true");
    if (localStorage.getItem("25") === "true"){
        localStorage.removeItem("25");
    }
    if (localStorage.getItem("75") === "true"){
        localStorage.removeItem("75");
    }
    if (localStorage.getItem("50") === "true"){
        localStorage.removeItem("50");
    }
    document.getElementById("vint-cinq").disabled = false;
    document.getElementById("soixante-quinze").disabled = false;
    document.getElementById("cent").disabled = true;
    document.getElementById("cinquante").disabled = false;
    document.getElementById("home").style.filter = "brightness(100%)";
    document.getElementById("galerie").style.filter = "brightness(100%)";
    document.getElementById("gear").style.filter = "brightness(100%)";
    document.getElementById("about").style.filter = "brightness(100%)";
    document.getElementById("me").style.filter = "brightness(100%)";
    document.getElementById("text1").style.filter = "brightness(100%)";
    document.getElementById("text3").style.filter = "brightness(100%)";
    document.getElementById("text4").style.filter = "brightness(100%)";
    document.getElementById("text5").style.filter = "brightness(100%)";
    document.getElementById("text6").style.filter = "brightness(100%)";
    document.getElementById("text7").style.filter = "brightness(100%)";
    document.getElementById("text8").style.filter = "brightness(100%)";
    document.getElementById("text9").style.filter = "brightness(100%)";
    document.getElementById("text10").style.filter = "brightness(100%)";
    document.getElementById("text11").style.filter = "brightness(100%)";
    document.getElementById("text12").style.filter = "brightness(100%)";
    document.getElementById("text13").style.filter = "brightness(100%)";
    document.getElementById("text14").style.filter = "brightness(100%)";
    document.getElementById("text15").style.filter = "brightness(100%)";
}



function English() {
    
    document.documentElement.setAttribute("lang", 'en');
    localStorage.setItem("EN", "true");
    if (localStorage.getItem("FR") === "true"){
        localStorage.removeItem("FR");
    }
    document.getElementById("EN").disabled = true;
    document.getElementById("FR").disabled = false;
    fadeOutText();
    delay(1000).then(() => fadeInText());
    delay(600).then(() => changeTextEnglish()); 
    goTop();
}

function Francais() {
    document.documentElement.setAttribute("lang", 'fr');
    localStorage.setItem("FR", "true");
    if (localStorage.getItem("EN") === "true"){
        localStorage.removeItem("EN");
    }
    document.getElementById("FR").disabled = true;
    document.getElementById("EN").disabled = false;
    fadeOutText();
    delay(1000).then(() => fadeInText());
    delay(600).then(() => changeTextFrancais()); 
    goTop();
}



function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function changeTextEnglish(){
    document.getElementById("galerie1").innerHTML = "GALLERY";
    document.getElementById("galerie2").innerHTML = "GALLERY";
    document.getElementById("galerie3").innerHTML = "GALLERY";
    document.getElementById("galerie4").innerHTML = "GALLERY";
    document.getElementById("moi1").innerHTML = "ME";
    document.getElementById("moi2").innerHTML = "ME";
    document.getElementById("moi3").innerHTML = "ME";
    document.getElementById("apropos1").innerHTML = "ABOUT";
    document.getElementById("apropos2").innerHTML = "ABOUT";
    document.getElementById("apropos3").innerHTML = "ABOUT";
    document.getElementById("home1").innerHTML = "HOME";
    document.getElementById("home2").innerHTML = "HOME";
    document.getElementById("gear1").innerHTML = "GEAR";
    document.getElementById("gear2").innerHTML = "GEAR";
    document.getElementById("gear3").innerHTML = "GEAR";
    document.getElementById("contact1").innerHTML = "CONTACT ME";
    document.getElementById("contact2").innerHTML = "CONTACT ME";
    document.getElementById("contact3").innerHTML = "CONTACT ME";
    document.getElementById("contact4").innerHTML = "CONTACT ME";
    document.getElementById("contact5").innerHTML = "Contact us";
    document.getElementById("contact5").innerHTML = "CONTACT ME";
    document.getElementById("contact6").innerHTML = "CONTACT ME";
    document.getElementById("envoyer1").innerHTML = "SEND";
    document.getElementById("text1").innerHTML = "This picture is one of the hardest i have ever took. I had to hide for hours to wait for any kind of animal to pass near me. After hours, an animal came by and i took this picture. - Antoine";
    document.getElementById("text2").innerHTML = "This picutre was taken on a beach, while i was in familly vacation with my two boys and my beautiful wife. It was one of the only vacation we took in our relationship, this moment was on of the best in my life... -William";
    document.getElementById("text3").innerHTML = "1";
    document.getElementById("text4").innerHTML = "1";
    document.getElementById("text5").innerHTML = "1";
    document.getElementById("text6").innerHTML = "1";
    document.getElementById("text7").innerHTML = "1";
    document.getElementById("text8").innerHTML = "1";
    document.getElementById("text9").innerHTML = "1";
    document.getElementById("text10").innerHTML = "1";
    document.getElementById("text11").innerHTML = "1";
    document.getElementById("text12").innerHTML = "1";
    document.getElementById("text13").innerHTML = "1";
    document.getElementById("text14").innerHTML = "1";
    document.getElementById("text15").innerHTML = "1";
    
}


function changeTextFrancais(){
    document.getElementById("galerie1").innerHTML = "GALERIE";
    document.getElementById("galerie2").innerHTML = "GALERIE";
    document.getElementById("galerie3").innerHTML = "GALERIE";
    document.getElementById("galerie4").innerHTML = "GALERIE";
    document.getElementById("moi1").innerHTML = "MOI";
    document.getElementById("moi2").innerHTML = "MOI";
    document.getElementById("moi3").innerHTML = "MOI";
    document.getElementById("apropos1").innerHTML = "À PROPOS";
    document.getElementById("apropos2").innerHTML = "À PROPOS";
    document.getElementById("apropos3").innerHTML = "À PROPOS";
    document.getElementById("home1").innerHTML = "ACCEUIL";
    document.getElementById("home2").innerHTML = "ACCEUIL";
    document.getElementById("gear1").innerHTML = "ÉQUIPEMENT";
    document.getElementById("gear2").innerHTML = "ÉQUIPEMENT";
    document.getElementById("gear3").innerHTML = "ÉQUIPEMENT";
    document.getElementById("contact1").innerHTML = "CONTACTER MOI";
    document.getElementById("contact2").innerHTML = "CONTACTER MOI";
    document.getElementById("contact3").innerHTML = "CONTACTER MOI";
    document.getElementById("contact4").innerHTML = "CONTACTER MOI";
    document.getElementById("contact5").innerHTML = "Contact Nous";
    document.getElementById("contact6").innerHTML = "CONTACT MOI";
    document.getElementById("envoyer1").innerHTML = "ENVOYER";
    document.getElementById("text1").innerHTML = "Cette photo est une de mes photo les plus dur que j’ai pris. J'ai du me cacher pendant des heures dans la foret en attendant qu’un animal interagissent avec mes alentours et quand cela est finalement arrivé j’ai pris cette photo. - Antoine";
    document.getElementById("text2").innerHTML = "Cette photo a été pris sur une plage dans mon voyage de famille avec mes deux gosses et ma magnifique femme. C'était l'un des seul voyages que nous avons fait de tout notre relation amoureuse ce moment était le plus beau jours de ma vie... -William";
    document.getElementById("text3").innerHTML = "Cette photo a été pris en juin 2008, cette photo représente beaucoup pourmoi car ces une photo de mon père avec sa voiture de rêve. Cette photo m’a pris des millionsd’essaie avant de l’avoir parfaitement. Mon père la accrocher dans son bureau avant de mourirces donc pour sa que j’adore autant cette photo. - Jhone";
    document.getElementById("text4").innerHTML = "Cette photo est une photo de ma ville natale, cette place est la place ou j'ai le plus de souvenir de mon enfance. J'ai passer tout mon temps ici en tant qu'adolescante a faire du skateboard tout les jours. -Jessica";
    document.getElementById("text5").innerHTML = "Cette photo a été pris avec une caméra plus vielle que moi. Une camera des années 80 avec du film 35mm j'adore l'effet que les caméra comme celle ci amène au photo. On dirait que la photo prend vie litéralement. - Carolle";
    document.getElementById("text6").innerHTML = "Cette photo a été pris pendant une soirée de camping. Cela fesait mainteant 3 jours que j'était présent sur place, mais les 2 premier jours on été nuageux le troisième, la météo était parfaite j'ai donc pu prendre cette magnifique photo. - Carolle";
    document.getElementById("text7").innerHTML = "Cette caméra vien des années 80. Elle n'a peu-etre pas la meme technologie que les nouvelles caméras, mais les photo qui sorte de se chef d'oeuvre sont tout simplement magnifique. La profondeur des photos de cette caméra est tellement belle qu'on dirait que c'est la réalité.";
    document.getElementById("text8").innerHTML = "Cette caméra est la plus cher de tout notre équipement, la caméra coute 3000$. Ce prix est comprenable car elle est la caméra qui prend des photo avec la plus grand qualité au monde. Cette caméra peut zoomer sur des kilomètre et la qualité serais encore clair.";
    document.getElementById("text9").innerHTML = "L'appareil argentique Nikon L35 AF a été surnommé Pikaichi ou top-notch (excellent) en raison de sa haute qualité et de la fiabilité de son objectif en verre multicouches. Cette caméra de type point and shoot est l'une des meilleurs dans le millieux.";
    document.getElementById("text10").innerHTML = "Je m’appelle Carolle, je fait partie de Jhone’s photography depuis maintenant 5 ans et ma specialité est de photographier des voiture.";
    document.getElementById("text11").innerHTML = "Je m’appelle William, je fait partie de Jhone’s photography depuis maintenant 6 ans et j’adore photographier les étoiles.";
    document.getElementById("text12").innerHTML = "Je m’appelle Antoine, je fait partie de Jhone’s photography depuis maintenant 2 ans et j’adore photographier la nature et les animaux.";
    document.getElementById("text13").innerHTML = "Je m’appelle Jessica, je fait parti de Jhone’s photography depuis 8 ans et je photographie majoritairement des villes."
    document.getElementById("text14").innerHTML = "Cette vidéo démontre comment nos photographe procède chaque jours pour prendre des magnifique photo. Certain prennent plus de temps a prendre des photos et d’autre moins mais a la fin nos résultat sont toujours les meilleurs.";
    document.getElementById("text15").innerHTML = "Je m’appelle Jhone et je suis le créateur de Jhone’s photography. Ce groupe a été créer il y a maintenant 10 ans ayant comme but de reunir les meilleur photographe sur cette planète. ce but n’a toujours pas été atteint,mais nous travaillons fort chaque jours pour essayer de l’atteindre.";
    
}


function fadeOutText(){
    document.getElementById("galerie1").style.transition = "opacity 0.65s linear 0s";
	document.getElementById("galerie1").style.opacity = 0;
    document.getElementById("galerie2").style.transition = "opacity 0.65s linear 0s";
	document.getElementById("galerie2").style.opacity = 0;
    document.getElementById("galerie3").style.transition = "opacity 0.65s linear 0s";
	document.getElementById("galerie3").style.opacity = 0;
    document.getElementById("galerie4").style.transition = "opacity 0.65s linear 0s";
	document.getElementById("galerie4").style.opacity = 0;
    document.getElementById("moi1").style.transition = "opacity 0.65s linear 0s";
	document.getElementById("moi1").style.opacity = 0;
    document.getElementById("moi2").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("moi2").style.opacity = 0;
    document.getElementById("moi3").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("moi3").style.opacity = 0;
    document.getElementById("apropos1").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("apropos1").style.opacity = 0;
    document.getElementById("apropos2").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("apropos2").style.opacity = 0;
    document.getElementById("apropos3").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("apropos3").style.opacity = 0;
    document.getElementById("home1").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("home1").style.opacity = 0;
    document.getElementById("home2").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("home2").style.opacity = 0;
    document.getElementById("gear1").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("gear1").style.opacity = 0;
    document.getElementById("gear2").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("gear2").style.opacity = 0;
    document.getElementById("gear3").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("gear3").style.opacity = 0;
    document.getElementById("contact1").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("contact1").style.opacity = 0;
    document.getElementById("contact2").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("contact2").style.opacity = 0;
    document.getElementById("contact3").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("contact3").style.opacity = 0;
    document.getElementById("contact4").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("contact4").style.opacity = 0;
    document.getElementById("contact5").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("contact5").style.opacity = 0;
    document.getElementById("contact6").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("contact6").style.opacity = 0;
    document.getElementById("envoyer1").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("envoyer1").style.opacity = 0;
    document.getElementById("text1").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("text1").style.opacity = 0;
    document.getElementById("text2").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("text2").style.opacity = 0;
    document.getElementById("text3").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("text3").style.opacity = 0;
    document.getElementById("text4").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("text4").style.opacity = 0;
    document.getElementById("text5").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("text5").style.opacity = 0;
    document.getElementById("text6").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("text6").style.opacity = 0;
    document.getElementById("text7").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("text7").style.opacity = 0;
    document.getElementById("text8").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("text8").style.opacity = 0;
    document.getElementById("text9").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("text9").style.opacity = 0;
    document.getElementById("text10").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("text10").style.opacity = 0;
    document.getElementById("text11").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("text11").style.opacity = 0;
    document.getElementById("text12").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("text12").style.opacity = 0;
    document.getElementById("text13").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("text13").style.opacity = 0;
    document.getElementById("text14").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("text14").style.opacity = 0;
    document.getElementById("text15").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("text15").style.opacity = 0;
    
}

function fadeInText(){
    document.getElementById("galerie1").style.transition = "opacity 0.65s linear 0s";
	document.getElementById("galerie1").style.opacity = 1;
    document.getElementById("galerie2").style.transition = "opacity 0.65s linear 0s";
	document.getElementById("galerie2").style.opacity = 1;
    document.getElementById("galerie3").style.transition = "opacity 0.65s linear 0s";
	document.getElementById("galerie3").style.opacity = 1;
    document.getElementById("galerie4").style.transition = "opacity 0.65s linear 0s";
	document.getElementById("galerie4").style.opacity = 1;
    document.getElementById("moi1").style.transition = "opacity 0.65s linear 0s";
	document.getElementById("moi1").style.opacity = 1;
    document.getElementById("moi2").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("moi2").style.opacity = 1;
    document.getElementById("moi3").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("moi3").style.opacity = 1;
    document.getElementById("apropos1").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("apropos1").style.opacity = 1;
    document.getElementById("apropos2").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("apropos2").style.opacity = 1;
    document.getElementById("apropos3").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("apropos3").style.opacity = 1;
    document.getElementById("home1").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("home1").style.opacity = 1;
    document.getElementById("home2").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("home2").style.opacity = 1;
    document.getElementById("gear1").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("gear1").style.opacity = 1;
    document.getElementById("gear2").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("gear2").style.opacity = 1;
    document.getElementById("gear3").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("gear3").style.opacity = 1;
    document.getElementById("contact1").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("contact1").style.opacity = 1;
    document.getElementById("contact2").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("contact2").style.opacity = 1;
    document.getElementById("contact3").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("contact3").style.opacity = 1;
    document.getElementById("contact4").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("contact4").style.opacity = 1;
    document.getElementById("contact5").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("contact5").style.opacity = 1;
    document.getElementById("contact6").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("contact6").style.opacity = 1;
    document.getElementById("envoyer1").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("envoyer1").style.opacity = 1;
    document.getElementById("text1").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("text1").style.opacity = 1;
    document.getElementById("text2").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("text2").style.opacity = 1;
    document.getElementById("text3").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("text3").style.opacity = 1;
    document.getElementById("text4").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("text4").style.opacity = 1;
    document.getElementById("text5").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("text5").style.opacity = 1;
    document.getElementById("text6").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("text6").style.opacity = 1;
    document.getElementById("text7").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("text7").style.opacity = 1;
    document.getElementById("text8").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("text8").style.opacity = 1;
    document.getElementById("text9").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("text9").style.opacity = 1;
    document.getElementById("text10").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("text10").style.opacity = 1;
    document.getElementById("text11").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("text11").style.opacity = 1;
    document.getElementById("text12").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("text12").style.opacity = 1;
    document.getElementById("text13").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("text13").style.opacity = 1;
    document.getElementById("text14").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("text14").style.opacity = 1;
    document.getElementById("text15").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("text15").style.opacity = 1; 
    document.getElementById("statsEN").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("statsEN").style.opacity = 1;
    document.getElementById("statsFR").style.transition = "opacity 0.65s linear 0s";
    document.getElementById("statsFR").style.opacity = 1;
}

