
    $(document).ready(function() {
        $(".showing").click(function() {
          $(".hidden").show();
        });
        $("hidden").click(function() {
            $(".showing").toggle();
            $(".hidden").toggle();
          });
      });
