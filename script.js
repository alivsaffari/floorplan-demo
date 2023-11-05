var map = L.map("map", {
  crs: L.CRS.Simple,
  minZoom: 0,
});

// LAYER STYLES

var footprintStyle = {
  color: "black",
  fillColor: "white",
  fillOpacity: 1,
  opacity: 1,
  weight: 2,
};

var fixtureStyle = {
  color: "black",
  weight: 0.5,
  opacity: 0.25,
};

var roomStyle = {
  color: "black",
  opacity: 0,
  fillColor: "white",
  fillOpacity: 1,
};

var wallStyle = {
  color: "black",
  fillColor: "none",
  weight: 3,
  fillOpacity: 1,
};

var highlight = {
  color: "red",
  opacity: 0,
  fillColor: "red",
  fillOpacity: 0.5,
  weight: 2,
};

var Lfootprint = L.polygon(
  [
    [0, 0],
    [0, 50],
    [100, 50],
    [100, 0],
  ],
  footprintStyle
)
  .addTo(map)
  .on("click", function () {
    document.getElementById("desc").innerHTML =
      "<ul style='text-align: left;'><li id='number'>Booth Code: 1</li><li id='size'>Size: 20x30 ft</li><li id='price'>Price: $ 100</li></ul><button onclick='buy()' class='btn btn-primary'>Buy</button>";
  });
map.setView([25.25, 9.5], 1);

map.eachLayer(function (layer) {
  if (layer instanceof L.Polygon) {
    layer.on("mouseover", function (e) {
      layer.setStyle(highlight);
      //			layer.bringToFront();
    });
    layer.on("mouseout", function (e) {
      layer.setStyle(footprintStyle);
      //			layer.bringToBack();
    });
  }
});

function buy() {
  var price = document.getElementById("price").innerText.split(":")[1];
  var size = document.getElementById("size").innerText.split(":")[1];
  var number = document.getElementById("number").innerText.split(":")[1];
  document.getElementById("form").innerHTML =
    '<table class="table"><thead><tr><th scope="col">#</th><th scope="col">Booth Code</th><th scope="col">Size</th><th scope="col">Price</th></tr></thead><tbody><tr><th scope="row">1</th><td>' +
    number +
    "</td><td>" +
    size +
    "</td><td>" +
    price +
    '</td></tr></tbody><tfoot><td><button class="btn btn-primary" id="check">Checkout</button></td></tfoot></table>';
}
