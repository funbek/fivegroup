$(document).ready(function() {
    // добавление класса active
    $(".trigger-button").on("click", function() {
        $(".trigger-button").not(this).removeClass("active");
        $(this).toggleClass("active");
    });

    // скрытие пункта с active при нажатии на свободную область
    $(document).on( "click", function(event){
        if( $(event.target).closest(".trigger-button, .hidden-block").length )
        return;
          $(".trigger-button.active").removeClass("active");
          event.stopPropagation();
    });

    // добавление класса active при нажатии
    ;(function() {
      var $trigger = $(".trigger");
      $trigger.on("click", function() {
          $trigger.not(this).removeClass("active");
          $(this).toggleClass("active");
      });
    })();

    // Прокрутка страницы наверх
    var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
    var delay = 1000; // Задержка прокрутки
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
        /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
        if ($(this).scrollTop() > top_show) $('#top').fadeIn();
        else $('#top').fadeOut();
    });
    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
        /* Плавная прокрутка наверх */
        $('body, html').animate({
        scrollTop: 0
        }, delay);
    });

    // плавная прокрутка к якорю
    $("a.smooth-link").click(function() {
          $("html, body").animate({
             scrollTop: $($(this).attr("href")).offset().top + "px"
          }, {
             duration: 500,
             easing: "swing"
          });
          return false;
    });


    var owlAction = $(".action-slider");

    owlAction.owlCarousel({
      loop:true,
      nav:false,
      items:1,
      dotsContainer: '#action-dots',
    });

    var owlRecipes = $(".recipes-container");

    owlRecipes.owlCarousel({
      loop:false,
      nav:false,
      margin:30,
      responsive:{
        480:{
            items:1
        },
        800:{
            items:2
        },
        1000:{
            items:3
        }
      }
    });
})
