$(document).ready(function() {
    // добавление класса active
    $(".trigger-button").on("click", function() {
        $(this).toggleClass("active");
    });

    // добавление класса active при нажатии
    ;(function() {
      var $trigger = $(".trigger");
      $trigger.on("click", function() {
          $trigger.not(this).removeClass("active");
          $(this).toggleClass("active");
      });
    })();

  // Карусель для акций
    var owlAction = $(".action-slider");

    owlAction.owlCarousel({
      loop:true,
      nav:false,
      items:1,
      dotsContainer: '#action-dots',
    });
    // ++==++

// Карусель для рецептов
    var owlRecipes = $(".recipes-container");

    owlRecipes.owlCarousel({
      loop:false,
      nav:false,
      margin:30,
      responsive:{
        320:{
            items:1
        },
        630:{
            items:2
        },
        980:{
            items:3
        }
      }
    });
    // ++==++
})
