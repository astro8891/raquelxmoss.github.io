function Model() {
}

Model.prototype.generateBox = function (size, rgb1, rgb2, rgb3) {
  var $div = $('<div></div>').css({
    'height' : size + 'px',
    'width' : size + 'px',
    'border-color' : 'rgb('+rgb1+','+rgb2+','+rgb3+')'
  });
  return $div;
}