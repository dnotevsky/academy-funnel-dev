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
    localStorage.email = dataFields[1].value;
    localStorage.phone = dataFields[2].value;
    localStorage.info = dataFields[3].value;

    if (formid.attr('id') == 'partners' || dataFields[3].value == 'zone' || formidpage.attr('id') == 'page-form') {

      // Форма отправки 2.0
      // var name = dataFields[0].value;
      // var email = dataFields[1].value;
      // var phone = dataFields[2].value;

      var name = form.find('[name=name]').val();
      var email = form.find('[name=email]').val();
      var phone = form.find('[name=custom_mob_phone]').val();

      // var name = "Den";
      // var email = "max@budetweb.ru";
      // var phone = 5151515151515;

      if(name && email && phone) {
          $.ajax({
              type: 'POST',
              url: '/academy-three/amo.php',
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



      $.ajax({
        type: 'POST',
        // url: 'mail.php',
        // data: dataFields,
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
                            // window.location.href = 'https://lifeforum.pro/bilet/';
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


