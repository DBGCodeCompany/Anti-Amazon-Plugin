//document.body.style.border = "5px solid red";
let produkt = document.getElementById('twotabsearchtextbox').value; //auslesen der suchleiste in amazon
if (window.confirm("Bevor du dich hier umschaust, möchtest du sehen, wo du noch einkaufen kannst? Weiterleiten?")==true){
window.location.href='https://geizhals.de/?fs='+produkt;//weiterleitung durch js nicht optimal, evtl. ausbaufähig, suche auch geizhals wird durch url erzwungen
}
else{
alert('Dann bleib doch bei Amazon!'); //muss nicht
}