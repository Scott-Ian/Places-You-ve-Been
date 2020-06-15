function Destination (location, landmark, yearVisited, favActivity, favFood) {
  this.location = location;
  this.landmark = landmark;
  this.yearVisited = yearVisited;
  this.favActivity = favActivity;
  this.favFood = favFood;
}

Destination.prototype.summary = function() {
  return "<li>" + this.location + "</li>" + "<li>" + this.landmark + "</li>" + "<li>" + this.yearVisited + "</li>" + "<li>" + this.favActivity + "</li>" + "<li>" + this.favFood + "</li>";
}

function pdxDisplay () {

}

function destinationDisplay (destination) {
  $("ul#tokyo").append(destination.summary());
}

function parisDisplay () {
  
}

$(document).ready (function () {
  $("form#destination").submit(function(event){
    event.preventDefault();
    let location = $("input#location").val();
    let landmark = $("input#landmark").val();
    let yearVisited = $("input#yearVisited").val();
    let favActivity = $("input#favActivity").val();
    let favFood = $("input#favFood").val();

    let newDestination = new Destination (location, landmark, yearVisited, favActivity, favFood);

  });
});