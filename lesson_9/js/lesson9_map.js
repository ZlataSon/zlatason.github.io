//TASK 1 Google Map API search

function initAutocomplete() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 49.444431, lng: 32.059769},
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    });

    var styleArray = [
        {
            featureType: "all",
            stylers: [
                { hue: "#00ffe6" },
                { saturation: -10 }
            ]
        },{
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
                { lightness: 90 },
                { visibility: "simplified" }
            ]
        },{
            featureType: "poi.business",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        },
    ];

    map.setOptions({styles: styleArray});

    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
    });

    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach(function(marker) {
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function(place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            var icon = {
                url: place.icon,
                // url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
                size: new google.maps.Size(90, 90),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
                map: map,
                icon: icon,
                title: place.name + "<br/>" + place.geometry.location,
                position: place.geometry.location,
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
                animation: google.maps.Animation.DROP,
            }));

            var infowindow = new google.maps.InfoWindow({
                content: place.name + "<br/>" + "Address: " + place.formatted_address
                + "<br/>" + place.geometry.location,
            });

            markers.forEach(function (marker) {
                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.open(map,marker);
                });
            });

            console.log("Lat: " + place.geometry.location.lat());
            console.log("Lng: " + place.geometry.location.lng());

            document.getElementById("map-lat-lng").innerHTML = "<br/>" + "Lat: " + place.geometry.location.lat() + "<br/>" +
                "Lng: " + place.geometry.location.lng();

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);

    });
}

