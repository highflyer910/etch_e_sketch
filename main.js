$(document).ready(function() {
  var rainbow = false;
  drawBoard();

  var $cell = $('.cell'),
    $allButtons = $('button'),
    $blackButton = $('#black'),
    $randomButton = $('#random'),
    $rainbowButton = $('#rainbow');

  $cell.on('mouseover', function() {
    if (rainbow == false) {
      $(this).css('background-color', color);
    } else {
      $(this).css('background-color', getRandomColor());
    }

  });

  $blackButton.on('click', function() {
    color = 'black';
    rainbow = false;
    makeActive($blackButton, $allButtons);
  });

  $randomButton.on('click', function() {
    color = getRandomColor();
    rainbow = false;
    makeActive($randomButton, $allButtons);
  });

  $rainbowButton.on('click', function() {
    rainbow = !rainbow;
    makeActive($rainbowButton, $allButtons);
  });
});

function drawBoard() {
  var numberOfRows = 10;
  var numberOfColumns = 20;
  for (var i = 0; i < numberOfRows; i++) {
    $('#board').append("<div class=\"row\"><\div>");
    for (var c = 0; c < numberOfColumns; c++) {
      $('.row:last-of-type').append("<div class=\"cell\"><\div>");
    }
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function makeActive(button, $allButtons) {
  $allButtons.removeClass('active');
  button.addClass('active');
}