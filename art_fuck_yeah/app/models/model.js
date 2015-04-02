function Model() {
}

Model.prototype.generateBox = function (size) {
  var $div = $('<div></div>').css({
    'height' : size + 'px',
    'width' : size + 'px'
  });
  console.log($div)
  return $div;
}