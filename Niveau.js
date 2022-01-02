function changeimg(){
    const monde=document.Monde.niveau.value; //Une constante qui prendra en compte le niveau choisis par l'utilisateur
    switch(monde){ //Un switch case pour faire le choix
        case 'Niveau 1':
            document.getElementById('sect').style.backgroundImage= "url(images/Niv1.jpg)";//https://wallhere.com/en/wallpaper/211052
            break;
        case 'Niveau 2':
            document.getElementById('sect').style.backgroundImage= "url(images/Niv2.jpg)";//https://wallhere.com/en/wallpaper/116114
            break;
        case 'Niveau 3':
            document.getElementById('sect').style.backgroundImage= "url(images/Niv3.jpg)";//https://wallhere.com/en/wallpaper/2021319
            break;
        case 'Niveau 4':
            document.getElementById('sect').style.backgroundImage= "url(images/Niv4.jpg)";//https://wallhere.com/en/wallpaper/1495295
            break;
    }
    
}
