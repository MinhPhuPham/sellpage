$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})
function validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
    
    function validate() {
      var $result = $("#result");
      var email = $("#email").val();
      $result.text("");
    
      if (validateEmail(email)) {
        $result.text(email + " is valid :)");
        $result.css("color", "green");
      } else {
        $result.text(email + " is not valid :(");
        $result.css("color", "red");
      }
      return false;
    }
    $("#validate").on("click", validate);
    