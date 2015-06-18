(function(){
	"use strict";

	var $pickButton = $("#pickButton");

	$("#reasonDropdown li a").on("click",function(){
		var reason = $(this).text();
		$pickButton.text(reason);
	});


	var $sentDialog = $("#sentDialog");

	$("#contactForm").on("submit",function(){
		$sentDialog.modal('show');
		return false;
	});

	$("#contactForm input[type=submit]").tooltip({
		delay:{
			show: 500,
			hide: 0
		}

	});

	$("#carousel").carousel();


})();
