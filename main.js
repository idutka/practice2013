$(document).ready(function(){   
        
        var sudoSlider = $("#slider").sudoSlider({
            slideCount:4,
            autoheight: false,
            autowidth: false,
            // continuous:true,
            prevhtml:'<a href="#" class="prevBtn arrow arrow-left-active"></a>', /* option[32]/*prevhtml*/
            nexthtml:'<a href="#" class="nextBtn arrow arrow-right-active"></a>', /* option[33]/*nexthtml*/
            

        });


        var sudoSlider2 = $("#slider2").sudoSlider({
            slideCount:6,
            vertical: true,
            controlsattr: 'id="controls2"',
            prevhtml:'<a href="#" class="prevBtn2 arrow arrow-up-active"></a>', /* option[32]/*prevhtml*/
            nexthtml:'<a href="#" class="nextBtn2 arrow arrow-down-active"></a>', /* option[33]/*nexthtml*/
            

        });
        
    });