$(document).ready(function(){
	$('.menu_icon').click(function(){
		$(this).next().slideToggle();
	});
	var Menu = {
  
	  el: {
	    ham: $('.menu_icon'),
	    menuTop: $('.menu-top'),
	    menuMiddle: $('.menu-middle'),
	    menuBottom: $('.menu-bottom')
	  },
  
	  init: function() {
	    Menu.bindUIactions();
	  },
  
	  bindUIactions: function() {
	    Menu.el.ham
	        .on(
	          'click',
	        function(event) {
	        Menu.activateMenu(event);
	        event.preventDefault();
	      }
	    );
	  },
  
	  activateMenu: function() {
	    Menu.el.menuTop.toggleClass('menu-top-click');
	    Menu.el.menuMiddle.toggleClass('menu-middle-click');
	    Menu.el.menuBottom.toggleClass('menu-bottom-click'); 
	  }
		};

	Menu.init();

	$('.sl').slick({
      slidesToShow:4,
      arrows:true,
      infinite:false,
      responsive: [
      	  {
            breakpoint: 1124,
            settings:{
              slidesToShow:3
            }
          },
          {
            breakpoint: 800,
            settings:{
              slidesToShow:2
            }
          },
          {
            breakpoint: 570,
            settings:{
              slidesToShow:1
            }
          }
      ]
  });
	$('.sl-feedback').slick({
      slidesToShow:1,
      arrows:true,
      infinite:false
  });
	  jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });


})
