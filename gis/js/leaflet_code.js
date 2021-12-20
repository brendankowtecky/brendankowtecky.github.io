var mymap = L.map('mapid').setView([50.2, -125.20], 10);

// Calculate icon sizes 
var size = mymap.getSize();
console.log(size.x);
var iconSizeCalc = 0;
var iconAnchorCalc = 0;

if (size.x < 640) {
    iconSizeCalc = 32;
    iconAnchorCalc = 16;
} else if (size.x < 1007) {
    iconSizeCalc = 28;
    iconAnchorCalc = 14;
} else {
    iconSizeCalc = 24;
    iconAnchorCalc = 12;
}

// widths 
// Small (smaller than 640px)
// Medium (641px to 1007px)
// Large (1008px and larger)

	// BASEMAP 
	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiemFnYWJ5dGUiLCJhIjoiY2t0dnNoZXJuMmQ4ZjJ2bzMzYjRyNnB5diJ9.ifMUJ3JlRgdVZoUPgRrG2w'
}).addTo(mymap);

	// GEOJSON LAYERS 

    // Daily start/end icons
    var iconSize = [iconSizeCalc, iconSizeCalc]; // size of the icon
    var iconAnchor = [iconAnchorCalc, iconAnchorCalc]; // point of the icon which will correspond to marker's location
    var popupAnchor = [0, 0]; // point from which the popup should open relative to the iconAnchor

	function getCustomIcon(feature, latlng) {
        
        label = String(feature.properties.CollectionDate) // Must convert to string, .bindTooltip can't use straight 'feature.properties.attribute'
            // return new L.CircleMarker(latlng, {
            //   radius: 1,
            // }).bindTooltip(label, {permanent: true, opacity: 0.7}).openTooltip();
            // }
         
        switch(feature.properties.TeamNumber) {
            case "0":
                var warningIcon = L.icon({
                    iconUrl: 'images/warning.png',
                    iconSize: iconSize, 
                    iconAnchor: iconAnchor, 
                    popupAnchor: popupAnchor 
                });
                return L.marker(latlng, {icon: warningIcon}).bindTooltip(label, {permanent: false, opacity: 0.7}).openTooltip();
            case "1":
                var team1Icon = L.icon({
                    iconUrl: 'images/1_start.png',
                    iconSize: iconSize, 
                    iconAnchor: iconAnchor, 
                    popupAnchor: popupAnchor 
                });
                var team1IconEnd = L.icon({
                    iconUrl: 'images/1_end.png',
                    iconSize: iconSize, 
                    iconAnchor: iconAnchor, 
                    popupAnchor: popupAnchor 
                });
                if (feature.properties.CoordType == "START") {
                    return L.marker(latlng, {icon: team1Icon}).bindTooltip(label, {permanent: false, opacity: 0.7}).openTooltip();
                } else {
                    return L.marker(latlng, {icon: team1IconEnd}).bindTooltip(label, {permanent: false, opacity: 0.7}).openTooltip();
                }
            case "2":
                var team2Icon = L.icon({
                    iconUrl: 'images/2_start.png',
                    iconSize: iconSize, 
                    iconAnchor: iconAnchor, 
                    popupAnchor: popupAnchor 
                });
                var team2IconEnd = L.icon({
                    iconUrl: 'images/2_end.png',
                    iconSize: iconSize, 
                    iconAnchor: iconAnchor, 
                    popupAnchor: popupAnchor 
                });
                if (feature.properties.CoordType == "START") {
                    return L.marker(latlng, {icon: team2Icon}).bindTooltip(label, {permanent: false, opacity: 0.7}).openTooltip();
                } else {
                    return L.marker(latlng, {icon: team2IconEnd}).bindTooltip(label, {permanent: false, opacity: 0.7}).openTooltip();
                }
            case "3":
                var team3Icon = L.icon({
                    iconUrl: 'images/3_start.png',
                    iconSize: iconSize, 
                    iconAnchor: iconAnchor, 
                    popupAnchor: popupAnchor 
                });
                var team3IconEnd = L.icon({
                    iconUrl: 'images/3_end.png',
                    iconSize: iconSize, 
                    iconAnchor: iconAnchor, 
                    popupAnchor: popupAnchor 
                });
                if (feature.properties.CoordType == "START") {
                    return L.marker(latlng, {icon: team3Icon}).bindTooltip(label, {permanent: false, opacity: 0.7}).openTooltip();
                } else {
                    return L.marker(latlng, {icon: team3IconEnd}).bindTooltip(label, {permanent: false, opacity: 0.7}).openTooltip();
                }   
            case "4":
                var team4Icon = L.icon({
                    iconUrl: 'images/4_start.png',
                    iconSize: iconSize, 
                    iconAnchor: iconAnchor, 
                    popupAnchor: popupAnchor 
                });
                var team4IconEnd = L.icon({
                    iconUrl: 'images/4_end.png',
                    iconSize: iconSize, 
                    iconAnchor: iconAnchor, 
                    popupAnchor: popupAnchor 
                });
                if (feature.properties.CoordType == "START") {
                    return L.marker(latlng, {icon: team4Icon}).bindTooltip(label, {permanent: false, opacity: 0.7}).openTooltip();
                } else {
                    return L.marker(latlng, {icon: team4IconEnd}).bindTooltip(label, {permanent: false, opacity: 0.7}).openTooltip();
                }          
            }       
};

	///////////////////////////////////////////

	// OLF coastlines  
	var olf_coastlines = L.geoJSON(OLFAreas, {
		style: {color: "red", weight: 1}
	})
	olf_coastlines.addTo(mymap);

    // Debris data points 
    var warning0 = new L.layerGroup();
    var team1 = new L.layerGroup();
    var team2 = new L.layerGroup();
    var team3 = new L.layerGroup();
    var team4 = new L.layerGroup();
    warning0.addTo(mymap);
    team1.addTo(mymap);
    team2.addTo(mymap);
    team3.addTo(mymap);
    team4.addTo(mymap);

	var debris_data_points = L.geoJSON(DebrisDataPoints, {
        pointToLayer: getCustomIcon,
		onEachFeature: function (feature, layer) {
			let popup_html = "<h4 class='custom-popup'> Team " + feature.properties.TeamNumber + " (" + feature.properties.DataCollectorName + ") - " + feature.properties.CoordType + "</h4>" 
			+ "<b>" + "Date: " + "</b>" + feature.properties.CollectionDate + "<p>"
			+ "<b>" + "Site: " + "</b>" + feature.properties.SiteName + "<p>"
			+ "<b>" + "Shoreline Length (km): " + "</b>" + feature.properties.LengthShoreline + "<p>"
			+ "<b>" + "Notes: " + "</b>" + feature.properties.OtherNotes + "<p>";
			if (feature.properties.PhotoURL != "") {
				popup_html += '<a href="' + feature.properties.PhotoURL + '" target="_blank"><img src=' + feature.properties.PhotoURL + " width=100%/></a>"
            } 
            let data_popup = L.popup({maxHeight: 225}).setContent(popup_html);
            layer.bindPopup(data_popup);
            
            switch(feature.properties.TeamNumber) {
                case "0":
                    warning0.addLayer(layer);
                    break;
                case "1":
                    team1.addLayer(layer);
                    break;
                case "2":
                    team2.addLayer(layer);
                    break;
                case "3":
                    team3.addLayer(layer);
                    break;
                case "4":
                    team4.addLayer(layer);
                    break;
            }
		}
	})
	debris_data_points.addTo(mymap);


	// Project area coastlines  
	var lyr_indiv_project_coastlines = L.geoJSON(GroupedOutlinesByProjectPlan, {
		style: {color: "white", weight: 0.5},
		onEachFeature: function (feature, layer) {
            var popupContent = "";
    
            if (feature.properties && feature.properties.ShorelineLength) {
                var shoreline = Math.round((feature.properties.ShorelineLength/1000 + Number.EPSILON) * 100) / 100
                popupContent = popupContent + "Shoreline: " + shoreline + "km";
            }
    
            layer.bindPopup(popupContent);
        }
	})
    // lyr_indiv_project_coastlines.addTo(mymap);
    

    // Project area coastlines covered
    var coastline_covered = L.geoJSON(CoastlineAreasCovered, {
        style: {color: "white", weight: 4}
    })
    //coastline_covered.addTo(mymap);


    // Material card area lines 
	var lyr_material_card_area_lines = L.geoJSON(MaterialCardAreaLines, {
		// style: function(feature) {
        //     switch (feature.properties.Location) {
        //         case 'Marina Island': return {color: "red", weight: 10};
        //         case 'NW Cortes & Subtle Islands': return {color: "#9c46d1", weight: 4, opacity: 0};
        //     }
        // },
        style: function(feature) {
            switch (feature.properties.Location) {
                case 'W Quadra': return {color: "#9c46d1", weight: 3};
                case 'NW Cortes & Subtle Islands': return {color: "#f6f61d", weight: 3};
                case 'Maurelle Island': return {color: "#53bee5", weight: 3};
                case 'SE Quadra': return {color: "#1efd4e", weight: 3};
                case 'W Quadra - Deepwater Bay': return {color: "#da8115", weight: 3};
                case 'Read Island': return {color: "#9c46d1", weight: 3};
                case 'W Quadra - Open Bay': return {color: "#f6f61d", weight: 3};
                case 'E Quadra': return {color: "#53bee5", weight: 3};
                case 'SE Read Island': return {color: "#1efd4e", weight: 3};
                case 'E Quadra - Rebecca Spit': return {color: "#da8115", weight: 3};
                case 'W Quadra - Gowlland Harbour & Maude Island': return {color: "#9c46d1", weight: 3};
                case 'NW Quadra - Kanish Bay & Granite Bay': return {color: "#f6f61d", weight: 3};
                case 'W Cortes - Gorge Harbour': return {color: "#53bee5", weight: 3};
                case 'E Read': return {color: "#1efd4e", weight: 3};
                case 'Rendezvous Islands': return {color: "#da8115", weight: 3};
                case 'E Quadra - Bold Point to Yeatman Bay': return {color: "#9c46d1", weight: 3};
                case 'Marina Island': return {color: "#f6f61d", weight: 3};
                case 'W Quadra - Village Bay': return {color: "#53bee5", weight: 3};
                case 'Marina Island - Stashes': return {color: "#1efd4e", weight: 3};
                case 'S Quadra - Edgeware Rd': return {color: "#da8115", weight: 3};
            }
        },
		onEachFeature: function (feature, layer) {
            var popup_content = "<h2 class='custom-popup'>" + feature.properties.Location + "</h2>" 
            + "<b>" + "Dates: " + "</b>" + feature.properties.StartDate + " to " + feature.properties.EndDate + "<p>"
            + "<b>" + "Shoreline Length (km): " + "</b>" + feature.properties.ShorelineL + "<p>"
            + "<table>"
            + "<tr><th>Material</th><th>Weight (lbs)</th></tr>"
            + "<tr><td>#1 Foam Floats</td><td style='text-align:center'>" + feature.properties.Material1 + "</td></tr>"
            + "<tr><td>#2 White Styrofoam</td><td style='text-align:center'>" + feature.properties.Material2 + "</td></tr>"
            + "<tr><td>#3 Hard Plastic Buoys</td><td style='text-align:center'>" + feature.properties.Material3 + "</td></tr>"
            + "<tr><td>#4 Hard Plastic Fragments</td><td style='text-align:center'>" + feature.properties.Material4 + "</td></tr>"
            + "<tr><td>#5 Other Packaging</td><td style='text-align:center'>" + feature.properties.Material5 + "</td></tr>"
            + "<tr><td>#6 Beverage Bottles</td><td style='text-align:center'>" + feature.properties.Material6 + "</td></tr>"
            + "<tr><td>#7 Oyster Baskets & Crab Pots</td><td style='text-align:center'>" + feature.properties.Material7 + "</td></tr>"
            + "<tr><td>#8 Netting</td><td style='text-align:center'>" + feature.properties.Material8 + "</td></tr>"
            + "<tr><td>#9 Rope</td><td style='text-align:center'>" + feature.properties.Material9 + "</td></tr>"
            + "<tr><td>#10 Plastic Barrels</td><td style='text-align:center'>" + feature.properties.Material10 + "</td></tr>"
            + "<tr><td>#11 Tires with Styrofoam</td><td style='text-align:center'>" + feature.properties.Material11 + "</td></tr>"
            + "<tr><td>#12 Tires without Styrofoam</td><td style='text-align:center'>" + feature.properties.Material12 + "</td></tr>"
            + "<tr><td>#11 Unclassified</td><td style='text-align:center'>" + feature.properties.Material13 + "</td></tr>"
            + "<tr><td><b>Total Recyclable Debris</b></td><td style='text-align:center'><b>" + feature.properties.Deb_recyc + "</b></td></tr>"
            + "<tr><td><b>Total Non-recyclable Debris</b></td><td style='text-align:center'><b>" + feature.properties.Deb_nrecyc + "</b></td></tr>"
            + "<tr><td><b>Total Debris for Re-use/Repurposing</b></td><td style='text-align:center'><b>" + feature.properties.Deb_reuse + "</b></td></tr>"
            + "<tr><td><b>Total Debris</b></td><td style='text-align:center'><b>" + feature.properties.Deb_total + "</b></td></tr>"
            + "</table>"
            + "<p>"
            + "<b>" + "Notes: " + "</b>" + feature.properties.Notes + "<p>";
            let materials_popup = L.popup({maxHeight: 225}).setContent(popup_content);
            layer.bindPopup(materials_popup);
        }
	})
	lyr_material_card_area_lines.addTo(mymap);


    ////////////////////////////////

    /* Layer control */ 
    
    var teamMaps = {
        "POIs": warning0,
        "Team 1": team1,
        "Team 2": team2,
        "Team 3": team3,
        "Team 4": team4
    };

    L.control.layers(null, teamMaps).addTo(mymap);

    ////////////////////////////////

    /*Legend specific*/
    var legend = L.control({ position: "bottomleft" });

    legend.onAdd = function(mymap) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h4>Legend</h4>";
    div.innerHTML += '<i style="background: red"></i><span>OLF Area</span><br>';
    //div.innerHTML += '<i style="background: white"></i><span>Coastline Covered</span><br>';
    div.innerHTML += '<i class="icon" style="background-image: url(images/warning.png);background-repeat: no-repeat;"></i><span>POIs</span><br>';
    div.innerHTML += '<i class="icon" style="background-image: url(images/legend_start.png);background-repeat: no-repeat;"></i><span>Team Number (Start)</span><br>';
    div.innerHTML += '<i class="icon" style="background-image: url(images/legend_end.png);background-repeat: no-repeat;"></i><span>Team Number (End)</span><br>';
    

    return div;
    };

    legend.addTo(mymap);