var $btnMenu = $('.btn-menu'); 
var $panel = $('.panel'); 
var $btn = $('.btn'); 

$btnMenu.on('click', function() { 
	console.log('js-panel-open');
	$panel.toggleClass('js-panel-open');		
}); 
