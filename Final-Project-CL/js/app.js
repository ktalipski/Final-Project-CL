 var locations = [
      ['poranarower.pl <br> ul.Kolejowa 4a <br> tel. 600-100-200', 53.137567, 23.136437],
      ['Sprint <br> ul.Kołłątaja 1 <br> tel. 700-600-500' , 53.145044, 23.102260], 
      ['Peleton <br> ul.Ciołkowskiego 12 <br> tel. 500-600-500', 53.124620, 23.209929],
      ['Milsport <br> ul.Kręta 2 <br> tel. 700-500-500', 53.112183, 23.144220],
      ['Mistral <br> ul.Bema 6 <br> tel. 500-600-500', 53.124826, 23.145921]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: new google.maps.LatLng(53.137567, 23.136437),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) { 
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
