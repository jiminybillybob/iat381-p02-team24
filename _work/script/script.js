// JavaScript Document

		// CODE FOUND AT http://css-tricks.com/snippets/jquery/smooth-scrolling/
		// CREATES SMOOTH SCROLL TRANSITION ON ANCHOR POINT LINKS
		$(function() {
		  $('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html,body').animate({
				  scrollTop: target.offset().top
				}, 300);
				return false;
			  }
			}
		  });
		});
		// MODIFIED CODE FOUND AT http://stackoverflow.com/questions/17390989/how-to-fix-a-div-after-scrolling-a-bit-with-jquery
		// SETS THE SIDE NAV BAR TO FIXED AFTER SCROLLING A BIT
		$(window).scroll(function(){
 		   if ($(window).scrollTop() > 110){
			  $("#menu-categories").css({ position: "fixed" });
			  $("#menu-categories").css({ top: "0" });
			  $("#orders-total").css({ position: "fixed" });
			  $("#orders-total").css({ top: "0" });
  			}
			else {
      		  $("#menu-categories").css({ position: "absolute" });
			  $("#menu-categories").css({ top: "40px" });
			  $("#orders-total").css({ position: "absolute" });
			  $("#orders-total").css({ top: "40px" });
  			}
		});
		
		// POPS UP ITEM DESCRIPTION AFTER CLICKING THUMBNAIL
		$(document).ready(function() {
			$('.thumbnail_overlay').click(function(){ 
			$('.thumbnail_overlay_full').fadeIn(300);
		}); 
		});