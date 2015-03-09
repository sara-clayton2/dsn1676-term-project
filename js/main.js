var $btnMenu = $('.btn-menu'); 
var $panel = $('.panel'); 
var $btn = $('.btn'); 

$btnMenu.on('click', function() { 
	console.log('js-panel-open');
	$panel.toggleClass('js-panel-open');		
}); 


var $btnPanel = $('.btn-panel-down'); 
var $pop = $('.pop');


$btnPanel.on('click', function () { 
$pop.toggleClass('js-panel-down');
}); 

	