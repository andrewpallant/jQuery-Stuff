		$.browser.chrome = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase()); 
		$(document).ready(function ($){ 
		 	$(".scroll").click(function (event) { 
		 		event.preventDefault(); 
		 		if ($.browser.chrome) { 
		 			$('html,body').animate({ scrollTop: $(this.hash).offset().top}, 1000); 
		 		} else { 
		 			$('html,body').animate({ scrollTop: $(this.hash).offset().top - 100 }, 1000); 
		 		} 
		 	}); 
		 }); 