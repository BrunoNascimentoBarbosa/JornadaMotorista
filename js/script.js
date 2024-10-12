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

  var startPoint = L.marker([-23.561414, -46.655881]).addTo(map);
  var endPoint = L.marker([-23.558616, -46.662908]).addTo(map);

  // Cordenas para criar uma rota estou usando cordenas aleatórias para teste.
  // Considerando que não estou recebemos esses dados por API.
  var latlngs = [
      [-23.561414, -46.655881],   
      [-23.561915, -46.655013],   
      [-23.559679, -46.656128],   
      [-23.559449, -46.658105],   
      [-23.559072, -46.660812],   
      [-23.558616, -46.662908]   
  ];

  var polyline = L.polyline(latlngs, { color: 'red' }).addTo(map);


  map.fitBounds(polyline.getBounds());
