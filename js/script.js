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
    iconAnchor: [15, 15],  
    popupAnchor: [-3, -38]  
});

 
var customPinIcon = L.icon({
  iconUrl: '../img/pin-icon.svg',  
  iconSize: [45, 45],  
  iconAnchor: [22, 38],  
  popupAnchor: [-3, -38]  
});

var startPoint = L.marker([-23.561414, -46.655881], { icon: startPinIcon }).addTo(map);

var endPoint = L.marker([-23.536810, -46.685625], { icon: customPinIcon }).addTo(map);

  // Cordenas para criar uma rota estou usando cordenas aleatórias para teste.
  // Considerando que não estou recebemos esses dados por API.
  var latlngs = [
      [-23.561414, -46.655881],   
      [-23.561915, -46.655013],   
      [-23.559679, -46.656128],   
      [-23.559449, -46.658105],   
      [-23.559072, -46.660812],   
      [-23.558616, -46.662908],
      [-23.557712, -46.664100],   
      [-23.556307, -46.665960],   
      [-23.554993, -46.667665],   
      [-23.552874, -46.669915],   
      [-23.551260, -46.671788],   
      [-23.549900, -46.673125],   
      [-23.548320, -46.674542],   
      [-23.546821, -46.676127],   
      [-23.545122, -46.677812],   
      [-23.543312, -46.679303],   
      [-23.541728, -46.680923],   
      [-23.540189, -46.682475],   
      [-23.538492, -46.684050],   
      [-23.536810, -46.685625]   
  
  ];

  var polyline = L.polyline(latlngs, { color: '#8271EE',weight: 5 }).addTo(map);


  map.fitBounds(polyline.getBounds());
