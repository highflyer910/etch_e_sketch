$(document).ready(function() {
	var colors = false;
	drawBoard();

	var $cell = $('.cell'),
	    $allButtons = $('button'),
	    $blackButton = $('#black'),
	    $randomButton = $('#random'),
	    $colorsButton = $('#colors');


	    $cell.on('mouseover' function() {
	    	if(colors == false) {
	    		$(this).css('background-color', color);
	    	} else {
	    		$(this).css('background-color', getRandomColor());
	    	}
	    });

	    $blackButton.on('click', function() {
	    	color = 'black';
	    	colors = false;
	    	makeActive($blackButton, $allButtons);
	    });

	    $randomButton.on('click', function() {
	    	color = getRandomColor();
            colors = false;
            makeActive($randomButton, $allButtons);
	    });

	    $colorsButton.on('click', function() {
	    	colors != colors;
	    	makeActive($colorsButton, $allButtons);
	    });
});