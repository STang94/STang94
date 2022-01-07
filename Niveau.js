function changeimg(){
    const monde=document.Monde.niveau.value; //Une constante qui prendra en compte le niveau choisis par l'utilisateur
    switch(monde){ //Un switch case pour faire le choix
        case 'Niveau 1':
            document.getElementById('sect').style.backgroundImage= "url(images/Niv1.jpg)";//https://wallhere.com/en/wallpaper/211052
            block.removeChild(block.lastChild)
            cell = document.createElement("p");
            Value=document.createTextNode("C'est dans cette forêt que votre périple sera le plus mystérieux."+"\n"+"A travers cette forêt se cache les monstres des ténèbres dangereux");
            cell.appendChild(Value);
            block.appendChild(cell);
            break;
        case 'Niveau 2':
            document.getElementById('sect').style.backgroundImage= "url(images/Niv2.jpg)";//https://wallhere.com/en/wallpaper/116114
            block.removeChild(block.lastChild)
            cell = document.createElement("p");
            Value=document.createTextNode("La cave de Serpi est le domaine d'un monstre mythique redoutable. Le courage seul ne sera pas suffisant");
            cell.appendChild(Value);
            block.appendChild(cell);
            break;
        case 'Niveau 3':
            document.getElementById('sect').style.backgroundImage= "url(images/Niv3.jpg)";//https://wallhere.com/en/wallpaper/2021319
            block.removeChild(block.lastChild)
            cell = document.createElement("p");
            Value=document.createTextNode("Bienvenue dans les profondeur aquatique. Là où demeure la tortue légendaire Tortula. Demander son aide vous sera important pourra vous aidez énormément dans votre périple. Mais les habitants ne vous laisseront pas faire cela facilement");
            cell.appendChild(Value);
            block.appendChild(cell);
            break;
        case 'Niveau 4':
            document.getElementById('sect').style.backgroundImage= "url(images/Niv4.jpg)";//https://wallhere.com/en/wallpaper/1495295
            block.removeChild(block.lastChild)
            cell = document.createElement("p");
            Value=document.createTextNode("Vous voila face à votre destin. Le dernier lieu de votre périple est juste sous vos pieds."+"\t"+ "L'ennemi le plus dangereux n'est pas très. Mais avec tout ce que vous avez surmontés vous devrez être capable de le vaincre");
            cell.appendChild(Value);
            block.appendChild(cell);
            break;
            
    }
    function loadDoc() {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
          document.getElementById("demo").innerHTML = this.responseText;
        }
        xhttp.open("GET", "ajax_info.txt");
        xhttp.send();
      }
}
