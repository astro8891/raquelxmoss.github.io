function Controller() {
  randomNumber = function(){
    return Math.floor((Math.random() * 255) + 1);
  }
  var view = new View();
  var box = new Model();
  var size = 10;
  var rgb1 = randomNumber();
  var rgb2 = randomNumber();
  var rgb3 = randomNumber();

  this.partyTime = function() {
    initialize();
    var cycle = setInterval(function() {
      var newBox = box.generateBox(size, rgb1, rgb2, rgb3);
      view.addBox(newBox);
      view.scrollDown();
      size += 2;
      rgb1 = randomNumber();
      rgb2 = randomNumber();
      rgb3 = randomNumber();
      stopIfDone(cycle);
    },15);
  };

  function initialize() {
    view.clearScreen();
  };

  function stopIfDone(interval) {
    if (size > 1500) {
      clearInterval(interval);
    }
  };

}