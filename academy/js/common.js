(function($, undefined){
  /*тут объявляем глобальные переменные или пишем свои методы и функции*/
  $(document).ready(function(){ //ждём пока загрузятся все html элементы
    $('.small_video.video-1').click(function() {
      $('.big_video').removeClass('open_video');
      $('.big_video.video-1').addClass('open_video');
      $('.small_video').removeClass('active_part');
      $('.small_video.video-1').addClass('active_part');
      $("iframe").each(function() {
        $(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')});
      $('#youtube1').attr('src', $('#youtube1').attr('src'));
      $('#youtube2').attr('src', $('#youtube2').attr('src'));
      $('#youtube3').attr('src', $('#youtube3').attr('src'));
      $('#youtube4').attr('src', $('#youtube4').attr('src'));
      $('#youtube5').attr('src', $('#youtube5').attr('src'));
    });
    $('.small_video.video-2').click(function() {
      $('.big_video').removeClass('open_video');
      $('.big_video.video-2').addClass('open_video');
      $('.small_video').removeClass('active_part');
      $('.small_video.video-2').addClass('active_part');
      $("iframe").each(function() {
        $(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')});
//					$('#youtube').attr('src', $('#youtube').attr('src'));
      $('#youtube1').attr('src', $('#youtube1').attr('src'));
      $('#youtube2').attr('src', $('#youtube2').attr('src'));
      $('#youtube3').attr('src', $('#youtube3').attr('src'));
      $('#youtube4').attr('src', $('#youtube4').attr('src'));
      $('#youtube5').attr('src', $('#youtube5').attr('src'));
    });
    $('.small_video.video-3').click(function() {
      $('.big_video').removeClass('open_video');
      $('.big_video.video-3').addClass('open_video');
      $('.small_video').removeClass('active_part');
      $('.small_video.video-3').addClass('active_part');
      $("iframe").each(function() {
        $(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')});
//					$('#youtube').attr('src', $('#youtube').attr('src'));
      $('#youtube1').attr('src', $('#youtube1').attr('src'));
      $('#youtube2').attr('src', $('#youtube2').attr('src'));
      $('#youtube3').attr('src', $('#youtube3').attr('src'));
      $('#youtube4').attr('src', $('#youtube4').attr('src'));
      $('#youtube5').attr('src', $('#youtube5').attr('src'));
    });
    $('.small_video.video-4').click(function() {
      $('.big_video').removeClass('open_video');
      $('.big_video.video-4').addClass('open_video');
      $('.small_video').removeClass('active_part');
      $('.small_video.video-4').addClass('active_part');
      $("iframe").each(function() {
        $(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')});
//					$('#youtube').attr('src', $('#youtube').attr('src'));
      $('#youtube1').attr('src', $('#youtube1').attr('src'));
      $('#youtube2').attr('src', $('#youtube2').attr('src'));
      $('#youtube3').attr('src', $('#youtube3').attr('src'));
      $('#youtube4').attr('src', $('#youtube4').attr('src'));
      $('#youtube5').attr('src', $('#youtube5').attr('src'));
    });
    $('.small_video.video-5').click(function() {
      $('.big_video').removeClass('open_video');
      $('.big_video.video-5').addClass('open_video');
      $('.small_video').removeClass('active_part');
      $('.small_video.video-5').addClass('active_part');
      $("iframe").each(function() {
        $(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')});
//					$('#youtube').attr('src', $('#youtube').attr('src'));
      $('#youtube1').attr('src', $('#youtube1').attr('src'));
      $('#youtube2').attr('src', $('#youtube2').attr('src'));
      $('#youtube3').attr('src', $('#youtube3').attr('src'));
      $('#youtube4').attr('src', $('#youtube4').attr('src'));
      $('#youtube5').attr('src', $('#youtube5').attr('src'));
    });
  });
})(jQuery);
$(function() {

  // вивод и по-секундний мониторинг дати
  var interval = setInterval(function() {
    // month = new Array("01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12");
    month = new Array("Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря");

    var d = new Date(); // обьект дати
    var dateDead = new Date(); // обьект дати
    var date = new Date().getDate(); // дата
    var mount = new Date().getMonth(); // месяц
    var year = new Date().getFullYear(); // год
    var toDate = new Date(year, mount, date); // устанавливает формат для сегодня
    var afterTomorrow = new Date(year, mount, date); // устанавливает формат для после-завтра
    var hours = d.getHours();
    var minutes = d.getMinutes();

    // перемение для количества мест
    var firstDay = new Date(year, mount, date);  //  1 день = 20 мест
    var secondDay = new Date(year, mount, date); //  2 день = 13 мест
    var thirdDay = new Date(year, mount, date);  //  3 день = 6 мест
    var fourthDay = new Date(year, mount, date); //  4 день = 2 места

    dateDead.setDate(dateDead.getDate() + 60); // смерть кукам через 60 дней

    toDate.setDate(toDate.getDate() + 0); // устанавливает значение для сегодня
    afterTomorrow.setDate(afterTomorrow.getDate() + 3); // устанавливает значение для после-завтра

    firstDay.setDate(firstDay.getDate()   + 2); //  1 день = 20 мест +2
    secondDay.setDate(secondDay.getDate() + 3); //  2 день = 13 мест +3
    thirdDay.setDate(thirdDay.getDate()   + 4); //  3 день = 6 мест  +4
    fourthDay.setDate(fourthDay.getDate() + 5); //  4 день = 2 места +5

    //функция для куки
    function getCookie(name) {
      var matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    //вставляем куки в переменую
    var proPacketsDate = getCookie('proPacketsDate');
    var proPacketsFirstDay = getCookie('proPacketsFirstDay');
    var proPacketsSecondDay = getCookie('proPacketsSecondDay');
    var proPacketsThirdDay = getCookie('proPacketsThirdDay');
    var proPacketsFourthDay = getCookie('proPacketsFourthDay');

    //если куки +3 дня нету устанавливаем их
    if (!proPacketsDate) {proPacketsDate = afterTomorrow;
      document.cookie = "proPacketsDate=" + proPacketsDate.toString() + "; path=/; expires=" + dateDead.toUTCString()+";";
    }
    //если куки для мест нету устанавливаем их
    if (!proPacketsFirstDay) {proPacketsFirstDay = firstDay;document.cookie = "proPacketsFirstDay=" + proPacketsFirstDay.toString() + "; path=/; expires=" + dateDead.toUTCString()+";";}
    if (!proPacketsSecondDay) {proPacketsSecondDay = secondDay;document.cookie = "proPacketsSecondDay=" + proPacketsSecondDay.toString() + "; path=/; expires=" + dateDead.toUTCString()+";";}
    if (!proPacketsThirdDay) {proPacketsThirdDay = thirdDay;document.cookie = "proPacketsThirdDay=" + proPacketsThirdDay.toString() + "; path=/; expires=" + dateDead.toUTCString()+";";}
    if (!proPacketsFourthDay) {proPacketsFourthDay = fourthDay;document.cookie = "proPacketsFourthDay=" + proPacketsFourthDay.toString() + "; path=/; expires=" + dateDead.toUTCString()+";";}

    // куки для пакетов приводим к одному типу - обьект
    if(typeof proPacketsDate !== 'object') {proPacketsDate = new Date(proPacketsDate);}

    // куки для мест приводим к одному типу - обьект
    if(typeof proPacketsFirstDay !== 'object') {proPacketsFirstDay = new Date(proPacketsFirstDay);}
    if(typeof proPacketsSecondDay !== 'object') {proPacketsSecondDay = new Date(proPacketsSecondDay);}
    if(typeof proPacketsThirdDay !== 'object') {proPacketsThirdDay = new Date(proPacketsThirdDay);}
    if(typeof proPacketsFourthDay !== 'object') {proPacketsFourthDay = new Date(proPacketsFourthDay);}


    //если сегодня меньше дати в куках
    if(toDate < proPacketsDate) {
      var dateThree = proPacketsDate.getDate() +" "+ month[proPacketsDate.getMonth()];
      $('.desctope-data-one').html(dateThree);

    } else {
      $('.money').css('opacity', '0');
      $('.section7 .item.left .block .prc').html('59 900 руб.');
      $('.section7 .item.center .block .prc').html('119 900 руб.');
      $('.section7 .item.right .block .prc').html('240 000 руб.');
      $('.text-prc').html('Стоимость:');
      $('#sum, #pp_a3, #sum_mob_1, #pp_a3_mob_1').val('59900');
      $('#sum1, #pp_a31, #sum_mob_2, #pp_a3_mob_2').val('119900');
      $('#sum2, #pp_a32, #sum_mob_3, #pp_a3_mob_3').val('240000');
    }

    //
    if (toDate > proPacketsFourthDay) {
      // console.log('proPacketsFourthDay');
      $('header p.calendar').css('opacity', '0');
    }
    //     17               21
    if (toDate <= proPacketsFourthDay) {
      // console.log('proPacketsFourthDay');
      // $('#place').text('Осталось -  1 место');
    }
    //     17              20
    if (toDate <= proPacketsThirdDay) {
      // console.log('proPacketsThirdDay');
      // $('#place').text('Осталось -  3 места');
    }
    //     17              19
    if (toDate <= proPacketsSecondDay) {
      // console.log('proPacketsSecondDay');
      // $('#place').text('Осталось -  5 мест');
    }
    //    17               18
    if (toDate <= proPacketsFirstDay) {
      // console.log('toDate - ' + toDate);
      console.log('proPacketsFirstDay - ' + proPacketsFirstDay);
      // $('#place').text('Осталось -  7 мест');
    }
      $('#place').text(' ');

      // console.log('typeof proPacketsFirstDay: ' + typeof proPacketsFirstDay);
      // console.log('typeof proPacketsSecondDay: ' + typeof proPacketsSecondDay);
      // console.log('typeof proPacketsThirdDay: ' + typeof proPacketsThirdDay);
      // console.log('typeof proPacketsFourthDay: ' + typeof proPacketsFourthDay);
    // var test = "Mon Dec 26 2017 00:00:00 GMT+0200 (Фінляндія (зима))";
    // if(typeof test !== 'object') {test = new Date(test);}
    //
    //
    //
    // if (test >= proPacketsFirstDay) {console.log('proPacketsFirstDay');  $('#place').text(' 20 мест');}
    // if (test >= proPacketsSecondDay) {console.log('proPacketsSecondDay');$('#place').text(' 13 мест');}
    // if (test >= proPacketsThirdDay) {console.log('proPacketsThirdDay');  $('#place').text(' 6 мест');}
    // if (test >= proPacketsFourthDay) {console.log('proPacketsFourthDay');$('#place').text(' 2 места');}
    //

    // console.log(typeof toDate);
    // console.log(typeof proPacketsFirstDay);
    // console.log('-----------');
    // console.log(toDate);
    // console.log(proPacketsFirstDay);
    // console.log('-----------');
    // console.log(toDate < proPacketsFirstDay);

    if ( hours >= 00 && minutes >= 00 ) {clearInterval(interval);}  // стоп обновление
  }, 1000);

  $("a.go").click(function() {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 1500,
      easing: "swing"
    });
    return false;
  });
  $('.big-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  var $slickElement = $('.speakers-invite-slider');

  $slickElement.on('init reInit beforeChange', function (event, slick, currentSlide, nextSlide) {

        var i = (nextSlide ? nextSlide : 0);

        if (i == 0) {
          $('.slider-prev').addClass('hid');
        } else {
          $('.slider-prev').removeClass('hid');
        }

        if (i == 5) {
          $('.slider-next').addClass('hid');
        } else {
          $('.slider-next').removeClass('hid');
        }
    });

  $slickElement.slick({
    arrows: true,
    infinite: false,
    adaptiveHeight: true,
    dots: true,
  });

  $('.slider-prev').click(function(){
    if(!$(this).hasClass('hid')) {
        $slickElement.slick('slickPrev');
      }
  });

  $('.slider-next').click(function(){
    if(!$(this).hasClass('hid')) {
        $(".slick-slide").each(function() {
          if($(this).hasClass('play')){
            var slickCurrent = $(this);
            slickCurrent.removeClass('play');
            var slickIframe = $(this).find('.youtubeIframe');
            slickCurrent.prepend('<div class="youtube" id="' + slickIframe.attr('id') + '" style="background-image: url(http://i.ytimg.com/vi/' + slickIframe.attr('id') + '/sddefault.jpg)"><div class="play"></div></div>');
            slickIframe.remove();
          }
        });
        $slickElement.slick('slickNext');
      }
  });

  $('[type=tel]').intlTelInput({
        allowExtensions: false,
        autoFormat: true,
        autoHideDialCode: false,
        autoPlaceholder: false,
        defaultCountry: "auto",
         geoIpLookup: function(callback) {
           $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
             var countryCode = (resp && resp.country) ? resp.country : "";
             callback(countryCode);
           });
         },
        nationalMode: false,
        numberType: 'MOBILE',
        preferredCountries: ['ua', 'ru', 'by','us'],
        utilsScript: 'js/utils.js'
      });

    $('.gModal').bind("click", function() {
      var id = $(this).data('id-modal');
      var idAuthor = $(this).data('idauthor');
      $('.modalSubstrate').toggleClass('show');
      $('#' + id).toggleClass('open');
    });
    $('.triggerClose').bind("click", function() {
      $(this).closest('.modalWrapper').toggleClass('open');
      $('.modalSubstrate').toggleClass('show');
    });


  $( document ).ready(function() {

    // $('.loader').addClass('load');
    // $('body').attr('style','');

  });

});



$(function() {

  var input = $('input');
  var form = $('form');
  var patternHidden = /(\D)+[^0-9]{2,}/i;
  var patternText = /(?!^ |.* $)+[^0-9]{2,}/i;
  var patternEmail = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
  var patternTel = /([+()0-9 ]){9,18}/i;
  var errorFieldsMessage = {
    text : ' Имя',
    tel : ' Телефон',
    email : ' Электронная почта',
  };

  function validationsField(field) {

    var fieldValue = field[0].value;
    var fieldType = field[0].type;

    if (fieldType == 'email') {
      var pattern = patternEmail;
    } else if (fieldType == 'text') {
      var pattern = patternText;
    } else if (fieldType == 'tel') {
      var pattern = patternTel;
    } else if (fieldType == 'hidden') {
      return true; //var pattern = patternHidden;
    }
    return pattern.test(fieldValue);
  }

function validationsForm(form) {

  var fields = form.find('input');
  var errorTags = form.find('.error-message');
  var numberIsValid = 0;
  var errorMessage = [];

  fields.each(function() {
    var field = $(this);
    var errorFieldType = field[0].type;
    if (validationsField(field)) {
      field.removeClass('error').addClass('accept');
      numberIsValid++;
    } else {
      if (errorFieldType == 'text') {
        errorMessage.push(errorFieldsMessage.text);
      } else if (errorFieldType == 'tel'){
        errorMessage.push(errorFieldsMessage.tel);
      } else if (errorFieldType == 'email') {
        errorMessage.push(errorFieldsMessage.email);
      }
      field.addClass('error');
    }
  });

  errorMessage.length > 0 ? errorTags.html('Некорректное заполнение полей: <br><b>' + errorMessage + '</b>') : null;
  return fields.length == numberIsValid;
}

function keyupEvent() {

  var field = $(this);
  var errorTags = field.closest('form').find('.error-message');
  errorTags.html('');

  field.hasClass('error') ? field.removeClass('error') : false;
  validationsField(field) ? field.addClass('accept') : field.removeClass('accept');

}

function submitForm() {

  var me = $(this);
  var dataFields = me.find('input');
  var exitValue = me.find('[name=package]').val();
  var btnSubmit = form.find('[type=submit]');

  if (validationsForm(me)){
    me.addClass('send');
    btnSubmit.attr('disabled', true);
    var formid = me.closest('.modalWrapper');
    var formidpage = me.closest('.page-form');

    // var gDataFIelds = {
    //   'entry.1863197367': dataFields[0].value,
    //   'entry.940838002': dataFields[1].value,
    //   'entry.778372954': dataFields[2].value,
    //   'entry.1465146174': dataFields[3].value
    // };

    localStorage.name = dataFields[0].value;
    localStorage.phone = dataFields[1].value;
    localStorage.email = dataFields[2].value;
    localStorage.info = dataFields[3].value;


    var name = form.find('[name=name]').val();
    var email = form.find('[name=email]').val();
    var phone = form.find('[name=custom_mob_phone]').val();

    if(name && email && phone) {
        $.ajax({
            type: 'POST',
            url: '/academy/amo.php',
            method: 'post',
            data: 'name='+name+'&email='+email+'&phone='+encodeURIComponent(phone),
            success: function () {
            dataLayer.push({'event': 'event_name'});
            },
            error:  function(xhr, str) {
                // alert('Возникла ошибка: ' + xhr.responseCode);
                // alert(xhr.Error);
            }
        });
    }


    if (formid.attr('id') == 'partners' || dataFields[3].value == 'zone' || formidpage.attr('id') == 'page-form') {
      $.ajax({
        type: 'POST',
        url: 'mail.php',
        data: dataFields,
        statusCode: {
          200: function() {
            me.removeClass('send').trigger("reset");
            btnSubmit.attr('disabled', false);
            var pop = me.closest('.modalWrapper').find('.triggerClose');
            if (pop) {
              pop.click();
            }
            window.location.href = 'https://pronetworking.ru/academy-packets/';
            // $('#btnsuccess')[0].click();
          }
        }
      });

    } else {

      $.ajax({
        type: 'POST',
        // url: 'https://docs.google.com/forms/d/e/1FAIpQLSfhn_ELudefNQWsNOL46fyckO_jeVQy9yiPxsrCwEEu9XTLDA/formResponse',
        dataType: 'xml',
        // data: gDataFIelds,
        statusCode: {
          0: function() {
            $.ajax({
              type: 'POST',
              url: 'crm/send.php',
              data: dataFields,
              statusCode: {
                200: function() {
                    $.ajax({
                      type: 'POST',
                      url: 'https://app.getresponse.com/add_subscriber.html',
                      data: dataFields,
                      statusCode: {
                        0: function() {
                          btnSubmit.attr('disabled', false);
                          $("html").addClass('gosuccess');
                          setTimeout(function() { 
                            me.removeClass('send').trigger("reset");
                            window.location.href = 'https://pronetworking.ru/academy-packets/';
                          }, 1500);
                        },
                        200: function() {
                        }
                      }
                    });
                },
                0: function() {
                }
              }
            });
          },
          200: function() {
          }
        }
      });

    }
  }
}

input.keyup(keyupEvent).focus(keyupEvent);
form.submit(submitForm);

});