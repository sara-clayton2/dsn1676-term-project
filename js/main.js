var $btnMenu = $('.btn-menu'); 
var $panel = $('.panel'); 
var $btn = $('.btn'); 
var $btnPanel = $('.btn-panel-down'); 
var $pop = $('.pop');

$btnMenu.on('click', function() { 
	console.log('js-panel-open');
	$panel.toggleClass('js-panel-open');		
}); 

$btnPanel.on('click', function () { 
$pop.toggleClass('js-panel-down');
}); 


var $thumbs = $('.thumbnails'); 
var $lbImg = $('.lightbox-img');
var $lb = $('.lightbox');
var $btnClose = $('.btn-close');


$thumbs.on('click', 'a', function(e) { 
	e.preventDefault();
	
	var big = $(this).attr('href');
	$lbImg.attr('src', big);
	$lb.attr('data-state', 'visible');
	console.log('.lightbox');
});

$btnClose.on('click', function () {
	$lb.attr('data-state', 'hidden');			
});

$('.nav').localScroll();
$('.sec').localScroll();
$('.bottom').localScroll();