/* Mapa com a rotas.
   
   Estilos de mapa:
   1 - https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png
   2 - https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png
   3 - https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png

   Nesse link é possível ver todos os estilos de mapas disponíveis.
   O estilo do mapa pode ser trocado conforme a necessídade do projeto.

   Bruno Nascimento - Data: 12/10/2024

*/
 
  var map = L.map('map').setView([-23.561414, -46.655881], 15);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {

  }).addTo(map);

  var startPinIcon = L.icon({
    iconUrl: '../img/pin-start.svg', 
    iconSize: [20,20 ],  
    iconAnchor: [23,3],  
    popupAnchor: [-20, -38]  
});

 
var customPinIcon = L.icon({
  iconUrl: '../img/pin-icon.svg',  
  iconSize: [45, 45],  
  iconAnchor: [22, 38],  
  popupAnchor: [-3, -38]  
});

var startPoint = L.marker([-23.5287, -46.6345], { icon: startPinIcon }).addTo(map);

var endPoint = L.marker([-23.4264, -46.4819], { icon: customPinIcon }).addTo(map);

  // Cordenas para criar uma rota estou usando cordenas aleatórias para teste.
  // Considerando que não estou recebemos esses dados por API.
  var latlngs = [
         
     
    [-23.5287, -46.6345],  
    [-23.4472, -46.4840],  
    [-23.4264, -46.4819]   
  
  ];

  var polyline = L.polyline(latlngs, { color: '#8271EE',weight: 5 }).addTo(map);


  map.fitBounds(polyline.getBounds());
