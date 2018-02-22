$(function() {
    $('.gModal').bind("click", function() {
        var id = $(this).data('id-modal');
        var idAuthor = $(this).data('idauthor');
        $('.modalSubstrate').toggleClass('show');
        $('#partners').toggleClass('open');
    });
    $('.triggerClose').bind("click", function() {
        $(this).closest('.modalWrapper').toggleClass('open');
        $('.modalSubstrate').toggleClass('show');
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
    var localName = localStorage.getItem('name');
    var localPhone = localStorage.getItem('phone');
    var localEmail = localStorage.getItem('email');

    if(localName && localPhone && localEmail) {
        $("#customerNumber, #pp_custom, #customerNumber1, #pp_custom1, #customerNumber2, #pp_custom2, #customerNumber_mob_1, #customerNumber_mob_2, #customerNumber_mob_3, #pp_custom_mob_1, #pp_custom_mob_2, #pp_custom_mob_3").val(localName +', '+ localEmail +', '+ localPhone);
        $("#name, #name1, #name2, #name_mob_1, #name_mob_2, #name_mob_3").val(localName);
        $("#cps_phone, #cps_phone1, #cps_phone2, #cps_phone_mob_1, #cps_phone_mob_2, #cps_phone_mob_3").val(localPhone);
        $("#cps_email, #cps_email1, #cps_email2, #cps_email_mob_1, #cps_email_mob_2, #cps_email_mob_3").val(localEmail);
    }
    var localName = localStorage.getItem('name');
    console.log('name = ', localName); //"myValue"

    var localPhone = localStorage.getItem('phone');
    console.log('phone = ', localPhone); //"myValue"

    var localEmail = localStorage.getItem('email');
    console.log('email = ', localEmail); //"myValue"

    if(localName || localPhone || localEmail) {
        console.log('локал норм');
    } else {

        console.log('локал пустой');
        var clk = $('#form_help');
        clk.click();
    }



    if(document.getElementById("check").checked) {
        $(".section7 .item input.pas").removeAttr('disabled');
        $(".section7 .item input.pas").addClass('active');
    }
    if(document.getElementById("check1").checked) {
        $(".section7 .item.left input.pas").removeAttr('disabled');
        $(".section7 .item.left input.pas").addClass('active');
    }
    if(document.getElementById("check2").checked) {
        $(".section7 .item.center input.pas").removeAttr('disabled');
        $(".section7 .item.center input.pas").addClass('active');
    }
    if(document.getElementById("check3").checked) {
        $(".section7 .item.right input.pas").removeAttr('disabled');
        $(".section7 .item.right input.pas").addClass('active');
    }

    $('#check').click(function () {

        if(document.getElementById("check").checked) {
            $(".section7.desctope .item input.pas").removeAttr('disabled');
            $(".section7.desctope .item input.pas").addClass('active');
        } else {
            $(".section7.desctope .item input.pas").attr('disabled', 'disabled');
            $(".section7.desctope .item input.pas").removeClass('active');
        }

    });
    $('#check1').click(function () {

        if(document.getElementById("check1").checked) {
            $(".section7.mobile .item.left input.pas").removeAttr('disabled');
            $(".section7.mobile .item.left input.pas").addClass('active');
        } else {
            $(".section7.mobile .item.left input.pas").attr('disabled', 'disabled');
            $(".section7.mobile .item.left input.pas").removeClass('active');
        }

    });
    $('#check2').click(function () {

        if(document.getElementById("check2").checked) {
            $(".section7.mobile .item.center input.pas").removeAttr('disabled');
            $(".section7.mobile .item.center input.pas").addClass('active');
        } else {
            $(".section7.mobile .item.center input.pas").attr('disabled', 'disabled');
            $(".section7.mobile .item.center input.pas").removeClass('active');
        }

    });
    $('#check3').click(function () {

        if(document.getElementById("check3").checked) {
            $(".section7.mobile .item.right input.pas").removeAttr('disabled');
            $(".section7.mobile .item.right input.pas").addClass('active');
        } else {
            $(".section7.mobile .item.right input.pas").attr('disabled', 'disabled');
            $(".section7.mobile .item.right input.pas").removeClass('active');
        }

    });

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
        firstDay.setDate(firstDay.getDate()   + 2); //  1 день = 20 мест
        secondDay.setDate(secondDay.getDate() + 3); //  2 день = 13 мест
        thirdDay.setDate(thirdDay.getDate()   + 4); //  3 день = 6 мест
        fourthDay.setDate(fourthDay.getDate() + 5); //  4 день = 2 места


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
        if (!proPacketsDate) {
            proPacketsDate = afterTomorrow;
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
			$('.text-prc1').html(' ');
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
            // console.log('proPacketsFirstDay - ' + proPacketsFirstDay);
            // $('#place').text('Осталось -  7 мест');
        }
        $('#place').text('');

        // if (toDate >= proPacketsFirstDay) {
        //   console.log('proPacketsFirstDay');
        //   $('#place').text(' 20 мест');
        // }
        // if (toDate >= proPacketsSecondDay) {
        //   console.log('proPacketsSecondDay');
        //   $('#place').text(' 13 мест');
        // }
        // if (toDate >= proPacketsThirdDay) {
        //   console.log('proPacketsThirdDay');
        //   $('#place').text(' 6 мест');
        // }
        // if (toDate >= proPacketsFourthDay) {
        //   console.log('proPacketsFourthDay');
        //   $('#place').text(' 2 места');
        // }

        // if ( hours >= 00 && minutes >= 00 ) {clearInterval(interval);}  // стоп обновление
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
    $('.slick').slick({
        arrows: true,
        dots: true
    });

});