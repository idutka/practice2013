$(document).ready(function(){   
        
        // var sudoSlider = $("#slider").sudoSlider({
        //     slideCount:4,
        //     autoheight: false,
        //     autowidth: false,
        //     // continuous:true,
        //     prevhtml:'<a href="#" class="prevBtn arrow arrow-left-active"></a>', /* option[32]/*prevhtml*/
        //     nexthtml:'<a href="#" class="nextBtn arrow arrow-right-active"></a>' /* option[33]/*nexthtml*/
        // });


        // var sudoSlider2 = $("#slider2").sudoSlider({
        //     slideCount:6,
        //     vertical: true,
        //     controlsattr: 'id="controls2"',
        //     prevhtml:'<a href="#" class="prevBtn2 arrow arrow-up-active"></a>', /* option[32]/*prevhtml*/
        //     nexthtml:'<a href="#" class="nextBtn2 arrow arrow-down-active"></a>' /* option[33]/*nexthtml*/
        // });

    var myslider = new slider();

    function slider () {

        var slider = $("#slider");  // Set slider
        var controls = $("#controls-bg"); // Set  controls
        var buttons = $("#buttons"); // Set  buttons

        var box = slider.children();  

        var prev = controls.children().eq(0); // button PREV
        var next = controls.children().eq(1); // button NEXT 

        var button = "<span>#</span>";
        
        
        var widthElements = box.children().outerWidth(true);
        var numberElements = box.children().length;
        var numberViewElements = 4;
        var ViewElement = 0;
        var moveCount = 1;
         

        // slider.css( "width", numberViewElements*widthElements);
        drawArrows();
        drawButton();

        next.click(function () {
            var n = numberElements - numberViewElements;
            if(ViewElement < n){
                ViewElement += moveCount; 
                if (ViewElement > n) { ViewElement = n};
                setLeft()
            }
        })

        prev.click(function () {
            if(ViewElement > 0){
                ViewElement -= moveCount ;
                if (ViewElement < 0) { ViewElement = 0};
                setLeft()
            }
        })

        buttons.children().each(function(i){
                $(this).click(function(){
                    ViewElement = i;
                    setLeft();
                });
            });

        function setLeft () {
            var p = ViewElement*widthElements;
            p*=-1;
            box.stop().animate({
                left: p +'px'
            }, 500, function() {
                drawArrows();
            })
        }


        function drawArrows () {
            if(ViewElement == 0){
                prev.removeClass("arrow-left-active").addClass("arrow-left");
            }else{
                prev.removeClass("arrow-left").addClass("arrow-left-active");
            }

            if(ViewElement == (numberElements - numberViewElements)){
                next.removeClass("arrow-right-active").addClass("arrow-right");
            }else{
                next.removeClass("arrow-right").addClass("arrow-right-active");
            }
        }

        function drawButton () {

            for (var i = 0; i <= (numberElements - numberViewElements); i++) {
                buttons.append(button);
            };
        }

               


}




















    });