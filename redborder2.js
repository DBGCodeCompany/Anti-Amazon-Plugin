
//document.body.style.border = "5px solid red";
var produkt = document.getElementById('twotabsearchtextbox').value;
if (window.confirm("weiterleiten?")==true){
window.location.href='https://geizhals.de/?fs='+produkt;//window.open('https://geizhals.de/?fs='+produkt)
}
else{
alert('dann bleib doch bei amazon!')
}
//alert("Halt Stop!");
//console.log(produkt);