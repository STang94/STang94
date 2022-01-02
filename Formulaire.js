function  signal(){
    alert('veuillez créer votre personnage');
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min+1) ) + min;
  }

var numéro =1;
var newCommandForm = document.forms.newCommand;
function AjouterPerso(){
    const classe=document.Creation.class.value;
    const nom=document.Creation.nom.value;
    
    tabBody=document.getElementsByTagName("tbody").item(0);
    row=document.createElement("tr");
    
    //préparation des cellules
    cell0 = document.createElement("td")
    cell1 = document.createElement("td");
    cell2 = document.createElement("td");
    cell3 = document.createElement("td");
    cell4 = document.createElement("td");
    cell5 = document.createElement("td");
    cell6 = document.createElement("td");
    
    if(nom!=""){cell0=document.createTextNode(nom+"("+"Perso "+numéro+") "+"|"+classe+"|") }
    else{cell0=document.createTextNode("Perso "+numéro+"|"+classe+"|")}
    
    switch(classe)  
    {case 'Guerrier':
        Value1=document.createTextNode(getRandomInt(500,600));
        Value2=document.createTextNode(getRandomInt(10,20));
        Value3=document.createTextNode(getRandomInt(50,70));
        Value4=document.createTextNode(getRandomInt(80,100));
        Value5=document.createTextNode(getRandomInt(1,20));
        Value6=document.createTextNode(getRandomInt(20,60));
        break;
    case 'Mage':
        Value1=document.createTextNode(getRandomInt(100,250));
        Value2=document.createTextNode(getRandomInt(1,10));
        Value3=document.createTextNode(getRandomInt(1,10));
        Value4=document.createTextNode(getRandomInt(1,20));
        Value5=document.createTextNode(getRandomInt(80,100));
        Value6=document.createTextNode(getRandomInt(40,50));
        break;
    case 'Prêtre':
        Value1=document.createTextNode(getRandomInt(100,200));
        Value2=document.createTextNode(getRandomInt(1,10));
        Value3=document.createTextNode(getRandomInt(1,20));
        Value4=document.createTextNode(getRandomInt(10,30));
        Value5=document.createTextNode(getRandomInt(60,100));
        Value6=document.createTextNode(getRandomInt(30,50));
        break;
    case 'Voleur':
        Value1=document.createTextNode(getRandomInt(300,450));
        Value2=document.createTextNode(getRandomInt(1,10));
        Value3=document.createTextNode(getRandomInt(20,25));
        Value4=document.createTextNode(getRandomInt(40,60));
        Value5=document.createTextNode(getRandomInt(40,60));
        Value6=document.createTextNode(getRandomInt(60,100));
        break;
    case 'Paladin':
        Value1=document.createTextNode(getRandomInt(800,1000));
        Value2=document.createTextNode(getRandomInt(1,10));
        Value3=document.createTextNode(getRandomInt(60,100));
        Value4=document.createTextNode(getRandomInt(70,90));
        Value5=document.createTextNode(getRandomInt(30,50));
        Value6=document.createTextNode(getRandomInt(10,60));
        break;
    }


    
    
 
    
    
    //implémentation des valeurs dans les cellules
    cell1.appendChild(Value1);
    cell2.appendChild(Value2);
    cell3.appendChild(Value3);
    cell4.appendChild(Value4);
    cell5.appendChild(Value5);
    cell6.appendChild(Value6);

    //Cellules mises en lignes
    row.appendChild(cell0);
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
    row.appendChild(cell6);
    tabBody.appendChild(row);
    numéro++;
    if (!document.Creation.nom.checkValidity()  ) {
        return
 }
}
function SupprimerPerso(){
    const tbody = document.querySelector('.datatable tbody' )
      tbody.removeChild(tbody.lastChild)
      numéro--;
    
}


function SupprimerTout(){
    const tbody = document.querySelector('.datatable tbody' )
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild)
    }
    numéro=1;
}
