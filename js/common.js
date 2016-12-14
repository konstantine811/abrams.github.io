$(document).ready(function() {

  // validation form
	var result = true;

	$("form").submit(function() {
		if($('.name input#name').val() == ""){
			$("input#name").css("border", "1px solid #a95d5d").next(".error_name").fadeIn(500);
			$(".error_name").next(".ok_name").fadeOut(500);
			result = false;
		}

		if(($('select#namber').val() == "") || ($('select#month').val() == "") || ($('select#year').val() == '')) {
		$("select#year").next(".error_age").fadeIn(500);
			$(".error_age").next(".ok_age").fadeOut(500);
			result = false;

	}


		return result;
});

	// validation hover input name

	$("input#name").keyup(function() {
		if($('input#name').val().length < 2){
			$("input#name").css("border", "1px solid #a95d5d").next(".error_name").fadeIn(500);
			$(".error_name").next(".ok_name").fadeOut(500);
			result = false;
		} else {
			$(".error_name").next(".ok_name").fadeIn(500);
			$("input#name").css("border", "").next(".error_name").fadeOut();
			result = true;
		}

		return result;
	});

	// validation hover input select age

	$(".option_age").click(function() {
		if(($('select#namber').val() == "") || ($('select#month').val() == "") || ($('select#year').val() == '')) {
		$("select#year").next(".error_age").fadeIn(500);
			$(".error_age").next(".ok_age").fadeOut(500);
			result = false;

	}
		else {
			$(".error_age").next(".ok_age").fadeIn(500);
			$("select#year").next(".error_age").fadeOut(500);
			result = true;
		}

		return result;
	});
			// carousel stoped onclick
	$(".pause-slide").click(function(){
    $("#myCarousel").carousel('pause');
  });

	// code slider images section

	var width = $("#slider-container").width();


	//position img
	$('.slider>li:last-child').prependTo('.slider');
	//move slider forward
	function nextSlide() {
		$(".slider").animate({
			"margin-left": width/2.3
		}, 800, function() {
			$(".slider>li:first-child").appendTo('.slider');
			$(".slider").css("margin-left", 0);
		});
	}
	//move slider backwards
	function prevSlide() {
		$(".slider").animate({
			"margin-left": -width/2.3
		}, 800, function() {
			$(".slider>li:last-child").prependTo('.slider');
			$(".slider").css("margin-left", 0);
		});
	}

	//controls
	$('.next').click(nextSlide);
	$('.prev').click(prevSlide);

	//slider_content
	$('ul.tabs_caption').each(function() {
		$(this).find('li').each(function(i) {
			$(this).click(function() {
				$(this).addClass('active').siblings().removeClass('active')
					.closest('div.tabs').find('div.tabs_content').removeClass('active')
					.eq(i).addClass('active');

			});
		});
	});

	//slider content
	//ui horizontal slider
(function () {
    $('#slider').slider({
        range: 'min',
        min: 0,
        max: 30,
        value: 20,
        slide: function (e, ui) {
            return $('.value_slider').text(ui.value + "%");
        }
    });

}.call(this));

// Step radio button
	$(".step label").click(function() {
		$('input:radio[name="options"]').change(function() {


			switch($(this).val()) {
				case "Step1":
				$("label[for=option1]").css({"background": "#EC9D36"}).children("span").css({"color": "#EC9D36"});
				$("label[for=option2]").css({"background": ""}).children("span").css({"color": "white"});
				$("label[for=option3]").css({"background": ""}).children("span").css({"color": "white"});
				$("label[for=option4]").css({"background": ""}).children("span").css({"color": "white"});
				$("label[for=option5]").css({"background": ""});
				break;

				case "Step2":
				$("label[for=option2]").css({"background": "#EC9D36"}).children("span").css({"color": "#EC9D36"});
	 			$("label[for=option1]").css({"background": "#c0c0c0"}).children("span").css({"color": "#c0c0c0"});
 				$("label[for=option3]").css({"background": ""}).children("span").css({"color": "white"});
	 			$("label[for=option4]").css({"background": ""}).children("span").css({"color": "white"});
	 			$("label[for=option5]").css({"background": ""});

	 			break;
	 			case "Step3":
	 			$("label[for=option3]").css({"background": "#EC9D36"}).children("span").css({"color": "#EC9D36"});
	 			$("label[for=option2]").css({"background": "#c0c0c0"}).children("span").css({"color": "#c0c0c0"});
	 			$("label[for=option1]").css({"background": "#c0c0c0"}).children("span").css({"color": "#c0c0c0"});
				$("label[for=option4]").css({"background": ""}).children("span").css({"color": "white"});
	 			$("label[for=option5]").css({"background": ""});

	 			break;

	 			case "Step4":
	 			$("label[for=option4]").css({"background": "#EC9D36"}).children("span").css({"color": "#EC9D36"});
	 			$("label[for=option3]").css({"background": "#c0c0c0"}).children("span").css({"color": "#c0c0c0"});
	 			$("label[for=option2]").css({"background": "#c0c0c0"}).children("span").css({"color": "#c0c0c0"});
	 			$("label[for=option1]").css({"background": "#c0c0c0"}).children("span").css({"color": "#c0c0c0"});
	 			$("label[for=option5]").css({"background": ""});

	 			break;

	 			case "Step5":
	 			$("label[for=option5]").css({"background": "#EC9D36"});
	 			$("label[for=option4]").css({"background": "#c0c0c0"}).children("span").css({"color": "#c0c0c0"});
	 			$("label[for=option3]").css({"background": "#c0c0c0"}).children("span").css({"color": "#c0c0c0"});
	 			$("label[for=option2]").css({"background": "#c0c0c0"}).children("span").css({"color": "#c0c0c0"});
	 			$("label[for=option1]").css({"background": "#c0c0c0"}).children("span").css({"color": "#c0c0c0"});
	 			break;


			}
		});
	});


	//rounge slider 

	$("#slider-range").slider({
		range: true,
		min: 0,
		max: 500,
		values: [75, 300]
	});

	//circle slider

		$("#slider_crcl").roundSlider({
    radius: 60,
    width: 20,
    handleSize: "+6",
    sliderType: "min-range",
    value: 37,
    startAngle: 90,
    tooltipFormat: tooltipVal2,
    handleSize: "+14",
});

function tooltipVal2(args) {

    return  args.value + "%";
}
  

});

