function Destination (location, landmark, yearVisited, favActivity, favFood) {
  this.location = location;
  this.landmark = landmark;
  this.yearVisited = yearVisited;
  this.favActivity = favActivity;
  this.favFood = favFood;
}

Destination.prototype.summary = function() {
  return "Want to take a vacation? Come visit " + this.location  
}

$(document).ready (function () {

  //let tokyo = new Destination ("Tokyo", "Tokyo Tower", "2015", "Eating Food", "Takoyaki");
  let paris = new Destination ();
  let pdx = new Destination ("Portand, OR", "Voodoo Doughnuts", "2015", "Riding a Bike");

  $("#tokyo-listener").click(function () {
    let tokyo = new Destination ("Tokyo", "Tokyo Tower", "2015", "Eating Food", "Takoyaki");
    tokyoDisplay(tokyo);
  });

  $("#pdx").click(function() {
    $("#result").text(pdx.summary());
  });
});