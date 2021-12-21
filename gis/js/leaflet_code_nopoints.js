var mymap = L.map('mapid').setView([50.2, -125.20], 10);

// Calculate icon sizes 
var size = mymap.getSize();

	// BASEMAP 
	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiemFnYWJ5dGUiLCJhIjoiY2t0dnNoZXJuMmQ4ZjJ2bzMzYjRyNnB5diJ9.ifMUJ3JlRgdVZoUPgRrG2w'
}).addTo(mymap);

	// OLF coastlines  
	var olf_coastlines = L.geoJSON(OLFAreas, {
		style: {color: "red", weight: 1}
	})
	olf_coastlines.addTo(mymap);

    // Material card area lines 
	var lyr_material_card_area_lines = L.geoJSON(MaterialCardAreaLines, {
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

    /*Legend specific*/
    var legend = L.control({ position: "bottomleft" });

    legend.onAdd = function(mymap) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h4>Legend</h4>";
    div.innerHTML += '<i style="background: red"></i><span>OLF Area</span><br>';

    return div;
    };

    legend.addTo(mymap);