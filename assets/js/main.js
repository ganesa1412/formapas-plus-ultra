$(document).ready(function(){
    var scene = document.getElementById('scene');
	var parallax = new Parallax(scene);

    AOS.init({
        duration: 1000
    });

    var swiper = new Swiper('.swiper1', {
        // Optional parameters
        loop: true,
        slidesPerView: 2,
        spaceBetween: 5,
        grabCursor: true,
        centeredSlides: true,
        autoplay: {
            delay: 2500
        },
        breakpoints: {
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          }
        }
    });

    var swiper2 = new Swiper('.swiper2', {
        // Optional parameters
        loop: true,
        slidesPerView: 2,
        spaceBetween: 5,
        grabCursor: true,
        centeredSlides: false,
        autoplay: {
            delay: 2500
        },
        breakpoints: {
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          }
        }
    });

    var swiper3 = new Swiper('.swiper3', {
        // Optional parameters
        loop: true,
        slidesPerView: 1,
        spaceBetween: 5,
        grabCursor: true,
        centeredSlides: false,
        autoplay: {
            delay: 4000
        }
    });
    var swiper4 = new Swiper('.swiper4', {
        // Optional parameters
        loop: true,
        slidesPerView: 1,
        spaceBetween: 5,
        grabCursor: true,
        centeredSlides: false
    });
    
    
    

    Fancybox.bind("[data-fancybox]", {});
})

$(window).on('load', function(){
    $('#spinner').fadeOut();
})

var show = false;
$('#nav-toggle').click(function(){
    if (!show) {
        $('.nav-menu').addClass('show');
        show = true;
    }else{
        $('.nav-menu').removeClass('show');
        show = false;
    }
});


function makeTimer() {

    //      var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");  
    var endTime = new Date("18 December 2021 09:00:00 GMT+07:00");          
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

        $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span>Hours</span>");
        $("#minutes").html(minutes + "<span>Minutes</span>");
        $("#seconds").html(seconds + "<span>Seconds</span>");       

    }

setInterval(function() { makeTimer(); }, 1000);

  $('.accordion-title').click(function(){
    var accordion = '.'+$(this).data('accordion')+'-text';
    if (!$(accordion).hasClass('active')) {
      $('.accordion-text').removeClass('active');
      $(accordion).addClass('active');
      $('.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
      $(this).find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
    }else{
      $(accordion).removeClass('active');
      $(this).find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
    }
  });

function gotoslide(num){
    new Swiper('.swiper4').slideTo(num,1000,false);
}

function atc_tambah(){
    var cur = $('#atc_qty').val();
    var newval = parseFloat(cur) + 1;
    $('#atc_qty').val(newval);
}
function atc_kurang(){
    var cur = $('#atc_qty').val();
    if (cur > 0) {
        var newval = parseFloat(cur) - 1;
        $('#atc_qty').val(newval);
    }else{
        // do nothing
    }
}
function set_qty(){
    var qty = $('#atc_qty').val();
    $('#qty').val(qty);
}
function sendWA(){
    var t = "Halo, admin. Saya mau jajan produk Formapas.";
    t += "%0aNama:%20" + $('#nama').val();
    t += "%0aAlamat:%20: " + $('#alamat').val()+" "+$('#kodepos').val();
    t += "%0aProduk:%20" + $('#produk').val();
    t += "%0aJumlah:%20" + $('#qty').val() + "pcs";

    var text = t.replace(/\s/g, "%20");
    window.open("https://wa.me/+6281357126518/?text="+text, "_blank");
}
