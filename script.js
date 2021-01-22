$(function() {

    // resize
    $(window).resize(function() {
        $(".loading").css({
            "height": $(window).innerHeight(),
            "width": $(window).innerWidth()
        })
    });

    $(".loading").css({
        "height": $(window).innerHeight(),
        "width": $(window).innerWidth()
    });


    $(window).on("load", function() {
        $(".loading").fadeOut(2000, function() {
            $("#all").fadeIn(500);
        })
    })


    var textWrite = $(".typewrite").data("text"),
        textLength = textWrite.length,
        n = 0,
        theTyper = setInterval(function() {

            $(".typewrite").each(function() {
                $(this).html($(this).html() + textWrite[n]);
            });

            n = n + 1;
            if (n >= textLength) {
                clearInterval(theTyper);
            }

        }, 90);

    $(".btn_event").on("click", function() {
        $(".nav_side").toggleClass("hide");
    });

    $(".page").css({
        "height": $(window).innerHeight(),
    });


    $(".home").on("mouseover", function() {
        $(this).html('<i class="fas fa-home"></i>', 2000);
    });
    $(".home").on("mouseleave", function() {
        $(this).text("Home", 2000);
    });



    $(".work").on("mouseover", function() {
        $(this).html('<i class="fas fa-wrench"></i>', 200);
    });
    $(".work").on("mouseleave", function() {
        $(this).text("My Work", 200);
    });


    $(".contact").on("mouseover", function() {
        $(this).html('<i class="far fa-envelope"></i>', 2000);
    });
    $(".contact").on("mouseleave", function() {
        $(this).text("Contact", 2000);
    });


    ;
    $(".my_work img").on("click", function(e) {
        $("#container_box").css("transform", 'scale(1,1)');
        $("#item img").attr("src", e.target.src)
        $("html,body").animate({ scrollTop: 0 }, "slow");
    });

    $("#container_box").on("click", function(e) {
        $("#container_box").css("transform", 'scale(0,0)');
    });

});