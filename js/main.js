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

var $btnShowhide = $('.btn-show-hide'); 
var $box = $('.box'); 

$btnShowhide.on('click', function () { 
$box.toggleClass('js-box-hide');
}); 

var $btnShowhide2 = $('.btn-show-hide2'); 
var $box2 = $('.box2'); 

$btnShowhide2.on('click', function () { 
$box2.toggleClass('js-box-hide2');
}); 