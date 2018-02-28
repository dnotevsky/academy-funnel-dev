$(function() {

//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};


// вивод и по-секундний мониторинг дати
	var interval = setInterval(function() {
		// month = new Array("01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12");
		month = new Array("Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря");

		var d = new Date(); // обьект дати
		var dt = new Date(); // обьект дати
		var date = new Date().getDate(); // дата
		var mount = new Date().getMonth(); // месяц
		var year = new Date().getFullYear(); // год
		var tomorrow = new Date(year, mount, date); // устанавливает формат для завтра
		var afterTomorrow = new Date(year, mount, date); // устанавливает формат для после-завтра


		dt.setDate(dt.getDate()); // устанавливает значение для завтра
		tomorrow.setDate(tomorrow.getDate() + 1); // устанавливает значение для завтра
		afterTomorrow.setDate(afterTomorrow.getDate() + 2); // устанавливает значение для после-завтра

		var hours = d.getHours();
		var minutes = d.getMinutes();


		// обновление по времени в 20:00
		if(hours >= 20 && minutes >= 00)
		{
			if(month[afterTomorrow.getMonth()] == month[tomorrow.getMonth()]) {
				document.getElementById ('calendarData').innerHTML = tomorrow.getDate() + ' и ' + afterTomorrow.getDate() + ' ' + month[tomorrow.getMonth()];
			} else {
				document.getElementById ('calendarData').innerHTML = tomorrow.getDate()+' '+month[tomorrow.getMonth()] + ' и ' + afterTomorrow.getDate() + ' ' + month[afterTomorrow.getMonth()];
			}
		}
		else
		{
			if(month[dt.getMonth()] == month[tomorrow.getMonth()]) {
				document.getElementById ('calendarData').innerHTML = date + ' и ' + tomorrow.getDate() + ' ' + month[tomorrow.getMonth()];
			} else {
				document.getElementById ('calendarData').innerHTML = dt.getDate()+' '+month[dt.getMonth()] + ' и ' + tomorrow.getDate() + ' ' + month[tomorrow.getMonth()];
			}
		}

		// if ( hours >= 20 && minutes >= 00 ) {clearInterval(interval);}  // стоп обновление
	}, 1000);


	// fancybox
	$("a.modal").fancybox();
	$("a.modall_pad").fancybox({
		padding: 0,
		margin: 0
	});


	$("a.go").click(function() {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top + "px"
		}, {
			duration: 1500,
			easing: "swing"
		});
		return false;
	});
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		items:1,
		loop:true,
		animateOut: 'fadeOut',
		margin:0,
		autoplay:true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		lazyLoad:true,
		nav: false,
		dots: true
	});
	new WOW().init();



});

//Форма отправки 2.0
$(function() {
	$("[name=send]").click(function () {
		$(":input.error").removeClass('error');
		$(".allert").remove();

		var error = 0;
		var btn = $(this);
		var ref = btn.closest('form').find('[required]');
		var msg = btn.closest('form').find('input, textarea');
		var send_btn = btn.closest('form').find('[name=send]');
		var send_options = btn.closest('form').find('[name=campaign_token]');

		$(ref).each(function() {
			if ($(this).val() == '') {
				var errorfield = $(this);
				$(this).addClass('error').parent('.field').append('<div class="allert"><span>Заполните это поле</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
				error = 1;
				$(":input.error:first").focus();
				return;
			} else {
				var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
				if ($(this).attr("type") == 'email') {
					if(!pattern.test($(this).val())) {
						$("[name=email]").val('');
						$(this).addClass('error error_email').parent('.field').append('<div class="allert"><span>Некоректный e-mail</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
						error = 1;
						$(":input.error:first").focus();
					}
				}
				var patterntel = /^()[+0-9]{9,18}/i;
				if ( $(this).attr("type") == 'tel') {
					if(!patterntel.test($(this).val())) {
						$("[name=phone]").val('');
						$(this).addClass('error error_tel').parent('.field').append('<div class="allert"><span>Некоректный номер телефона</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
						error = 1;
						$(":input.error:first").focus();
					}
				}
			}
		});

		if(error === 0) {
			$(send_btn).each(function() {
				$(this).attr('disabled', true);
			});
			/*$(send_options).each(function() {
        		var form = $(this).closest('form'), name = form.find('.name').val();
				if ($(this).val() == '') {
					$.ajax({
						type: 'POST',
						url: 'mail.php',
						data: msg,
						success: function() {
							$( "#modal_callback_ok .top h4" ).remove();
							$( "#modal_callback_ok .top" ).append("<h4>"+name+"</h4>");
							$('form').trigger("reset");
							setTimeout(function(){  $("[name=send]").removeAttr("disabled"); }, 1000);
                            // Настройки модального окна после удачной отправки
                            $(".fancybox-close").click();
                            $('div.md-show').removeClass('md-show');
                            $("#call_ok")[0].click();
                        },
                        error: function(xhr, str) {
                        	alert('Возникла ошибка: ' + xhr.responseCode);
                        }
                    });
				} else {
					$.ajax({
						type: 'POST',
						url: 'mail.php',
						data: msg,
						success:
						$.ajax({
							type: 'POST',
							url: 'https://app.getresponse.com/add_subscriber.html',
							data: msg,
							statusCode: {0:function() {
								$( "#modal_callback_ok .top h4" ).remove();
								$( "#modal_callback_ok .top" ).append("<h4>"+name+"</h4>");
								$('form').trigger("reset");
								setTimeout(function(){  $("[name=send]").removeAttr("disabled"); }, 1000);
								$(".fancybox-close").click();
								// Настройки модального окна после удачной отправки
								$('div.md-show').removeClass('md-show');
								$("#call_ok")[0].click();
							}}
						}),
						error:  function(xhr, str) {
							alert('Возникла ошибка: ' + xhr.responseCode);
						}
					});
				}
			});*/

            var form = btn.closest('form');
            var name = form.find('[name=name]').val();
            var email = form.find('[name=email]').val();
			function goJs() {window.location = 'https://events.genndi.com/ew/auto-register?webicode=6eb2012475&memberid=169105139238453049&firstname='+ name +'&email='+ email +'&schedule=1'};
            if( form && name && email) {

                $.ajax({
                    type: 'POST',
                    url: '/lend_1/amo.php',
                    method: 'post',
                    data: 'name='+name+'&email='+email,
                    success: function () {
                    	$(".loader").fadeIn();
                    	console.log('Успех');
                        // Настройки модального окна после удачной отправки
                        setTimeout(function() {
	                    	$(".loader").fadeOut();
	                    	$(".modal-success").fadeIn();
		                	
	                		dataLayer.push({'event': 'event_name'});
	                        $( "#modal_callback_ok .top h4" ).remove();
	                        $( "#modal_callback_ok .top" ).append("<h4>"+name+"</h4>");
	                        $('form').trigger("reset");
	                        setTimeout(function(){  $("[name=send]").removeAttr("disabled"); }, 1000);
	                        // Настройки модального окна после удачной отправки
	                        $(".fancybox-close").click();
	                        $('div.md-show').removeClass('md-show');
	                        // $("#call_ok")[0].click();
							setTimeout(function() {
								goJs();
							}, 2400);
								
		                	
	                    }, 1000);
                    },
                    error:  function(xhr, str) {
                        alert('Возникла ошибка: ' + xhr.responseCode);
                    }
                });
            }
		}
		return false;
	})
});

