window.onload = function() {
document.getElementById("headermac").style.fontSize= "85px";
}


window.onclick = function(){
  document.getElementById('headermac').style.color = "purple";
}
notes.style.display = 'none';
ingredients.style.visibility = 'hidden';
equipment.style.visibility = 'hidden';
directions.style.visibility = 'hidden';

var notesdiv = document.getElementById("notes");
var ingred = document.getElementById("ingredients");
var equipmenta = document.getElementById("equipment");
var direc = document.getElementById("directions");

function hideshownotes() {
  if (notesdiv.style.display === "none") {
    notesdiv.style.display = "block";
  } else if (notesdiv.style.display === "block") {
    notesdiv.style.display = "none";
  }
}

function hideshowingred() {
  if (ingred.style.visibility === "hidden") {
    ingred.style.visibility = "visible";
  } else if (ingred.style.visibility === "visible") {
    ingred.style.display = "hidden";
  }
}

function hideshow3() {
  if (equipmenta.style.visibility === "hidden") {
    equipmenta.style.visibility = "visible";
  } else if (equipmenta.style.visibility === "hidden") {
    equipmenta.style.visibility = "visible";
  }
}

function hideshow4() {
  if (direc.style.visibility === "hidden") {
    direc.style.visibility = "visible";
  } else if (direc.style.visibility === "visible") {
    direc.style.display = "hidden";
  }
}

function showall (elements, ingred, direc, equipmenta) {
  elements = elements.length ? elements : [ingred, direc, equipmenta];
  for (var index = 0; index < elements.length; index++) {
    elements[index].style.visibility === "visible";
  }
}

document.getElementById('awoo').innerHTML = '<img width="500" height="500" src="https://cdn.shopify.com/s/files/1/0086/6320/3921/products/Filou_Eating_800x.gif?v=1604302415">';

