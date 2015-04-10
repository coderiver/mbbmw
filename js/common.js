head.ready(function() {

	// slider
	$('.js-slider').slick({
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 300,
		cssEase: 'linear'
	});

	// topic slider
	$('.js-topic-slider').slick({
		dots: false,
		infinite: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 800,
		autoplay: true,
		pauseOnHover: 'false',
		autoplaySpeed: 3000,
		cssEase: 'ease-in'
	});

	// click
	$(document).click(function() {
		$(".js-select").removeClass("is-active");
		$(".js-select-list").slideUp(100);
	});
	
	// popup
	$('.js-open-popup').on('click', function(){
		$('.js-popup').show();
		$('body').addClass('is-fixed');
		return false;
	});
	$('.js-popup-overley, .js-popup-close').on('click', function(){
		$('.js-popup').hide();
		$('body').removeClass('is-fixed');
	});

	// select list
	$("body").on("click", ".js-select",function(event) {
		event.stopPropagation();
	});

	$("body").on("click",".js-select-text",function() {
		var select = $(this).parents(".js-select");
		if (select.hasClass("is-active")) {
			$(".js-select").removeClass("is-active");
			$(".js-select-list").slideUp(100);
		}
		else {
			$(".js-select").removeClass("is-active");
			$(".js-select-list").slideUp(100);
			select.toggleClass("is-active").find(".js-select-list").slideToggle(100);
		}
		
	});

	$("body").on("click",".js-select-list li",function() {
		var val = $(this).attr("data-val");
		var text = $(this).text();
		var select = $(this).parents(".js-select");
		var selectList = $(this).parents(".js-select-list");
		select.find(".js-select-text").text(text);
		select.find("option").removeAttr("selected");
		select.find('option[value="'+val+'"]').attr("selected", "selected");
		selectList.find("li").removeClass("is-active");
		$(this).addClass("is-active");
		select.removeClass("is-active");
		selectList.slideUp(100);
		return false;
	});
	
	// calendar
	$( "#datepicker" ).datepicker({
		dateFormat: 'd.mm.yy',
		showOn: "both",
		buttonImageOnly: false,
		buttonImage: "img/calendar-ico.png"
	});

	// fancybox
	$('.js-fancybox').fancybox();

});