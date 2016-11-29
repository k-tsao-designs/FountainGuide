$(document).ready(function() {

	// $("#landing-page").animate({opacity: '0'}, 4000)

 //    function hideText() {
 //        $("#landing-page").css({display: "none"});
 //    }

 //    setTimeout(hideText,4000);


//Open/Close buttons
	$('#joy-btn').click(function(){
		$(".info").css({display:"none"})
		$("#joy-info").css({display:"block"});
		// $("info").animate({height:"600px"}, 1500);
	});

	$('#pickle-btn').click(function(){
		$(".info").css({display:"none"})
		$("#pickle-info").css({display:"block"});
	});

	$('.closeinfo').click(function(){
		$(".info").css({display:"none"})
	});

});