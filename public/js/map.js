//https://www.youtube.com/watch?v=a2cb6eHCpvw <- Codigo del video
function iniciarMapa(){
    var latitud = 4.650519367744352;
    var longitud = -74.06148660276776;

    coordenadas = {
        lng: longitud,
        lat: latitud
    }

    generarMapa(coordenadas);
}

function generarMapa(coordenadas){
    var mapa = new google.maps.Map(document.getElementById('mapa'),
    {
        zoom: 12,
        center: new google.maps.LatLng(coordenadas.lat, coordenadas.lng)
    });

    marcador = new google.maps.Marker({
        map: mapa,
        draggable: true,
        position: new google.maps.LatLng(coordenadas.lat, coordenadas.lng)
    });

    marcador.addListener('dragend', function(event){
        var coords = this.getPosition().lat() + ", " + this.getPosition().lng();
        console.log(coords);
        document.getElementById("GeoSchema").value = coords;
    })
}