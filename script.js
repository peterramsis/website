$(function() {

    $(document).on("click", ".link", function(e) {


        // $("html,body").animate({
        //     scrollTop: $($(this).data("scroll")).offset().top
        // });

        console.log("click");

    });

    // resize
    $(window).resize(function() {
        $(".loading").css({
            "height": $(window).innerHeight(),
            "width": $(window).innerWidth()
        })

        $(".page").css({
            "height": $(window).innerHeight() + 200,
        });




        if ($(this).innerWidth() > 768) {
            $(".my_work").css({
                "height": $(window).innerHeight(),
            });
        }


        $(".contact-us").css({
            "height": "300px",
        });
    });

    $(".page").css({
        "height": $(window).innerHeight() + 200,
    });




    if ($(this).innerWidth() > 768) {
        $(".my_work").css({
            "height": $(window).innerHeight(),
        });
    }


    $(".contact-us").css({
        "height": "300px",
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

    console.log($(window).innerWidth());








    $(".home").on("mouseover", function() {
        $(this).html('<i class="fas fa-home link" data-scroll=".page"></i>', 2000);
    });
    $(".home").on("mouseleave", function() {
        $(this).text("Home", 2000);
    });



    $(".work").on("mouseover", function() {
        $(this).html('<i class="fas fa-wrench link" data-scroll=".contact_us"></i>', 200);
    });
    $(".work").on("mouseleave", function() {
        $(this).text("My Work", 200);
    });


    $(".contact").on("mouseover", function() {
        $(this).html('<i class="far fa-envelope link"></i>', 2000);
    });
    $(".contact").on("mouseleave", function() {
        $(this).text("Contact", 2000);
    });

    $(".phone").on("mouseover", function() {
        $(this).text("01220447398", 2000);

    });
    $(".phone").on("mouseleave", function() {
        $(this).html('<i class="fas fa-phone-square-alt fa-7x text-light"></i>', 2000);
    });

    $(".my_work img").on("click", function(e) {
        $("#container_box").css("transform", 'scale(1,1)');
        $("#item img").attr("src", e.target.src)
        $("html,body").animate({ scrollTop: 0 }, "slow");
    });

    $("#container_box").on("click", function(e) {
        $("#container_box").css("transform", 'scale(0,0)');
    });


    // scroll 

    $(".nav_side li").on("click", function(e) {

        e.preventDefault();
        $("html,body").animate({
            scrollTop: $($(this).data("scroll")).offset().top
        });

    });



});