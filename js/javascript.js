/*
Auteur : Charles-Olivier Lefebvre
Da : 2130875
Session : H2022
*/

function rememberLanguage() {
    if (localStorage.getItem("EN") === "true") {
        document.getElementById("EN").disabled = true;
        changeTextEnglish();

    } else {
        document.getElementById("FR").disabled = true;
    }

    if (localStorage.getItem("25") == "true") {
        display25();
    } else if (localStorage.getItem("50") == "true") {
        display50();
    } else if (localStorage.getItem("75") == "true") {
        display75();
    } else {
        display100();
    }

}
function date() {
    var date = (new Date()).toISOString().split("T")[0];
    document.getElementById("date").innerHTML = "date : " + date;
}

function goTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function display25() {
    localStorage.setItem("25", "true");
    if (localStorage.getItem("100") === "true") {
        localStorage.removeItem("100");
    }
    if (localStorage.getItem("75") === "true") {
        localStorage.removeItem("75");
    }
    if (localStorage.getItem("50") === "true") {
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
    document.getElementById("text10").style.filter = "brightness(25%)";
    document.getElementById("text11").style.filter = "brightness(25%)";
    document.getElementById("text12").style.filter = "brightness(25%)";
    document.getElementById("text13").style.filter = "brightness(25%)";
    document.getElementById("text14").style.filter = "brightness(25%)";
    document.getElementById("text15").style.filter = "brightness(25%)";

}


function display50() {
    localStorage.setItem("50", "true");
    if (localStorage.getItem("100") === "true") {
        localStorage.removeItem("100");
    }
    if (localStorage.getItem("75") === "true") {
        localStorage.removeItem("75");
    }
    if (localStorage.getItem("25") === "true") {
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
    if (localStorage.getItem("100") === "true") {
        localStorage.removeItem("100");
    }
    if (localStorage.getItem("25") === "true") {
        localStorage.removeItem("25");
    }
    if (localStorage.getItem("50") === "true") {
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
    if (localStorage.getItem("25") === "true") {
        localStorage.removeItem("25");
    }
    if (localStorage.getItem("75") === "true") {
        localStorage.removeItem("75");
    }
    if (localStorage.getItem("50") === "true") {
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
    if (localStorage.getItem("FR") === "true") {
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
    if (localStorage.getItem("EN") === "true") {
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

function changeTextEnglish() {
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
    document.getElementById("text3").innerHTML = "I took this picture at the start of this summer. I was coming back from shopping with my mom, and she was driving our mini cooper for the first time of the year, the sun was beautiful, we had the wind in our hair. It was a beautiful day. -Jhone";
    document.getElementById("text4").innerHTML = "This photo is a photo of the first house I lived in. L'Assomption is one of the places where I have the most memories of my childhood. I spent all my time here as a kid playing with my friends every day. -Jessica";
    document.getElementById("text5").innerHTML = "This photo was taken with a camera older than me. A camera from the 80s with 35mm film I love the effect that cameras like this bring to the photo. It looks like the photo literally comes to life. - Carolle";
    document.getElementById("text6").innerHTML = "This photo was taken during a spa evening in my backyard, I had been trying to take a photo of the sky for 3 days now, but the first 2 days were cloudy the third, the weather was perfect so I was able to take this beautiful photo. - Carolle";
    document.getElementById("text7").innerHTML = "This camera comes from the 80s. It may not have the same technology as the newer cameras, but the photos that it makes are a masterpiece and are simply magnificent. The depth of the photos from this camera is so beautiful that it looks like the real thing.";
    document.getElementById("text8").innerHTML = "This camera is the most expensive of all our equipment, the camera costs 3000$. This price is understandable because it is the camera that takes pictures with the highest quality in the world. This camera can zoom for miles and the quality would still be clear.";
    document.getElementById("text9").innerHTML = "The Nikon L35 AF film camera has been dubbed best in class due to its high quality and reliable multi-coated glass lens. This point and shoot type camera is one of the best in the business.";
    document.getElementById("text10").innerHTML = "My name is Carolle, I have been part of Jhone's photography for 5 years now and my specialty is to photograph cars.";
    document.getElementById("text11").innerHTML = "My name is William, I have been part of Jhone's photography for 6 years now and I love photographing the stars.";
    document.getElementById("text12").innerHTML = "My name is Antoine, I have been part of Jhone's photography for 2 years now and I love photographing nature and animals.";
    document.getElementById("text13").innerHTML = "My name is Jessica, I have been part of Jhone's photography for 8 years and I mainly photograph cities";
    document.getElementById("text14").innerHTML = "This video demonstrates how our photographers proceed every day to take beautiful photos. Some take longer to take pictures and others less but in the end our results are always the best.";
    document.getElementById("text15").innerHTML = "My name is Jhone and I am the creator of Jhone's photography. This group was created 10 years ago with the aim of bringing together the best photographers on this planet. this goal has still not been achieved, but we are working hard every day to try to achieve it.";

}


function changeTextFrancais() {
    document.getElementById("galerie1").innerHTML = "GALERIE";
    document.getElementById("galerie2").innerHTML = "GALERIE";
    document.getElementById("galerie3").innerHTML = "GALERIE";
    document.getElementById("galerie4").innerHTML = "GALERIE";
    document.getElementById("moi1").innerHTML = "MOI";
    document.getElementById("moi2").innerHTML = "MOI";
    document.getElementById("moi3").innerHTML = "MOI";
    document.getElementById("apropos1").innerHTML = "?? PROPOS";
    document.getElementById("apropos2").innerHTML = "?? PROPOS";
    document.getElementById("apropos3").innerHTML = "?? PROPOS";
    document.getElementById("home1").innerHTML = "ACCEUIL";
    document.getElementById("home2").innerHTML = "ACCEUIL";
    document.getElementById("gear1").innerHTML = "??QUIPEMENT";
    document.getElementById("gear2").innerHTML = "??QUIPEMENT";
    document.getElementById("gear3").innerHTML = "??QUIPEMENT";
    document.getElementById("contact1").innerHTML = "CONTACTER MOI";
    document.getElementById("contact2").innerHTML = "CONTACTER MOI";
    document.getElementById("contact3").innerHTML = "CONTACTER MOI";
    document.getElementById("contact4").innerHTML = "CONTACTER MOI";
    document.getElementById("contact5").innerHTML = "Contact Nous";
    document.getElementById("contact6").innerHTML = "CONTACTER MOI";
    document.getElementById("envoyer1").innerHTML = "ENVOYER";
    document.getElementById("text1").innerHTML = "Cette photo est une de mes photo les plus dur que j???ai pris. J'ai du me cacher pendant des heures dans la foret en attendant qu???un animal interagissent avec mes alentours et quand cela est finalement arriv?? j???ai pris cette photo. - Antoine";
    document.getElementById("text2").innerHTML = "Cette photo a ??t?? pris sur une plage dans mon voyage de famille avec mes deux gosses et ma magnifique femme. C'??tait l'un des seul voyages que nous avons fait de tout notre relation amoureuse ce moment ??tait le plus beau jours de ma vie... -William";
    document.getElementById("text3").innerHTML = "Cette photo est une photo que j'ai pris au d??but de cette ??t??. Je revenais de magasiner avec ma m??re et elle conduisait notre mini cooper pour la premi??re fois de l???ann??e, le soleil ??tait magnifique, nous avions les cheveux dans le vent. C?????tait une belle journ??e. -Jhone";
    document.getElementById("text4").innerHTML = "Cette photo est une photo de la premi??re maison dans l'aquelle j'ai v??cu. L'Assomption une des place ou j'ai le plus de souvenir de mon enfance. J'ai passer tout mon temps ici en tant qu'enfant a jouer avec mes amis tout les jours. - Jessica";
    document.getElementById("text5").innerHTML = "Cette photo a ??t?? pris avec une cam??ra plus vielle que moi. Une camera des ann??es 80 avec du film 35mm j'adore l'effet que les cam??ra comme celle ci am??ne au photo. On dirait que la photo prend vie lit??ralement. - Carolle";
    document.getElementById("text6").innerHTML = "Cette photo a ??t?? pris pendant une soir??e de spa dans ma cours, Cela fesait mainteant 3 jours que j'essayais de prendre une photo du ciel, mais les 2 premier jours on ??t?? nuageux le troisi??me, la m??t??o ??tait parfaite j'ai donc pu prendre cette magnifique photo. - Carolle";
    document.getElementById("text7").innerHTML = "Cette cam??ra vien des ann??es 80. Elle n'a peu-etre pas la meme technologie que les nouvelles cam??ras, mais les photo qui sorte de se chef d'oeuvre sont tout simplement magnifique. La profondeur des photos de cette cam??ra est tellement belle qu'on dirait que c'est la r??alit??.";
    document.getElementById("text8").innerHTML = "Cette cam??ra est la plus cher de tout notre ??quipement, la cam??ra coute 3000$. Ce prix est comprenable car elle est la cam??ra qui prend des photo avec la plus grand qualit?? au monde. Cette cam??ra peut zoomer sur des kilom??tre et la qualit?? serais encore clair.";
    document.getElementById("text9").innerHTML = "L'appareil argentique Nikon L35 AF a ??t?? surnomm?? Pikaichi ou top-notch (excellent) en raison de sa haute qualit?? et de la fiabilit?? de son objectif en verre multicouches. Cette cam??ra de type point and shoot est l'une des meilleurs dans le millieux.";
    document.getElementById("text10").innerHTML = "Je m???appelle Carolle, je fait partie de Jhone???s photography depuis maintenant 5 ans et ma specialit?? est de photographier des voiture.";
    document.getElementById("text11").innerHTML = "Je m???appelle William, je fait partie de Jhone???s photography depuis maintenant 6 ans et j???adore photographier les ??toiles.";
    document.getElementById("text12").innerHTML = "Je m???appelle Antoine, je fait partie de Jhone???s photography depuis maintenant 2 ans et j???adore photographier la nature et les animaux.";
    document.getElementById("text13").innerHTML = "Je m???appelle Jessica, je fait parti de Jhone???s photography depuis 8 ans et je photographie majoritairement des villes."
    document.getElementById("text14").innerHTML = "Cette vid??o d??montre comment nos photographe proc??de chaque jours pour prendre des magnifique photo. Certain prennent plus de temps a prendre des photos et d???autre moins mais a la fin nos r??sultat sont toujours les meilleurs.";
    document.getElementById("text15").innerHTML = "Je m???appelle Jhone et je suis le cr??ateur de Jhone???s photography. Ce groupe a ??t?? cr??er il y a maintenant 10 ans ayant comme but de reunir les meilleur photographe sur cette plan??te. ce but n???a toujours pas ??t?? atteint,mais nous travaillons fort chaque jours pour essayer de l???atteindre.";

}


function fadeOutText() {
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

function fadeInText() {
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

