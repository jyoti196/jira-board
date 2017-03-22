$(document).ready(function(){
	    $(".card").click(function(){
		$("#title1").text($(this).find(".title").attr("data-title-type"))
        $("#no").text($(this).find(".no").attr("data-title-no"))
		$(".output").css("right", "0");
		$(".output").show();
        $("#id_main_board").css("margin-right", $(".output").outerWidth());
		});
		$(".btn1").click(function(){
                $("#id_main_board").css("margin-right",0);
	        $(".output").hide();
	    });
});
