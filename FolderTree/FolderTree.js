<script> 
$(document).ready(function () {
     $('[id^="subFolder"]').css("display", "none"); 
     $('.TopFolder').css("display", "block"); 
     $('[id^="expander"]').click(function () { 
          var id = this.id.replace("expander", ""); 
          openHide(id); 

          // Open Parents 
          $(this).parents("ul").css("display", "block"); 
    }); 

    // Open Hide File Nodes 
	function openHide(id) { 
	     // Set Icon 
	     $('[id^="expander"]').attr('src', 'images/closed.png'); 
	     $('#expander' + id).attr('src', 'images/open.png'); 

	     // Close All - Comment out next 3 lines if you want to open all nodes 
	     $('[id^="subFolder"]').css("display", "none"); 
	     $('.TopFolder').css("display", "block"); 
	     $('#subFolder' + id).css("display", "block"); 

	     // Set Selected 
	     $('[id^="title"]').removeClass("selected"); 
	     $('.title').removeClass("selected"); 
	     $('#title' + id).addClass("selected"); 
	 } 

	// Click Title Handler - With Sub 
	$('[id^="title"]').click(function () { 
	     var id = this.id.replace("title", ""); 
	     openHide(id); 

	     // Open Parents 
	     $(this).parents("ul").css("display", "block"); 
	}); 

	// Click Title - No Sub 
	$('.title').click(function () { 
	     // Set Selected 
	     $('[id^="title"]').removeClass("selected"); 
	     $('.title').removeClass("selected"); 
	     $(this).addClass("selected"); 
	});
}); 

</script>