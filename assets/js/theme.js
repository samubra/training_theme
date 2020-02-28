var mobile = 80;
var pc = 100;

var backToTop = function(){
    $("body").animate({'scrollTop': 0});
}

var scrollUp = function(){
    if( window.innerWidth >= 768 ){
        var screenDifference = pc;
    }else{
        var screenDifference = mobile;
    }
    var pos = parseInt( $("body").scrollTop() ) - ( window.innerHeight - screenDifference );

    $("body").animate({scrollTop: pos});
}

var scrollDown = function(){
    if( window.innerWidth >= 768 ){
        var screenDifference = pc;
    }else{
        var screenDifference = mobile;
    }
    var pos = parseInt( $("body").scrollTop() ) + ( window.innerHeight - screenDifference );

    $("body").animate({scrollTop: pos});
}


var scrollToSection = function(param){
    pos = $("[alt='"+ param +"']").offset().top;
    pos = pos - 10;

    $("body").animate({'scrollTop': pos});
}

var notification = {};
notification.create = function(text, textType, button, buttonType){

    var newButton = "";
    if(button && buttonType){
        if(buttonType == "icon"){
            newButton = '<span class="mc-button mc-button-'+ buttonType +' mc-clickable mc-color-white" onclick="notification.close(this)" mc-action="'+ button +'"></span>';

        }else if(buttonType == "text"){
            newButton = '<span class="mc-button mc-button-'+ buttonType +' mc-clickable mc-color-white" onclick="notification.close(this)">'+ button +'</span>';

        }else{
            newButton = '<span class="mc-button mc-button-'+ buttonType +' mc-clickable mc-color-white" onclick="notification.close(this)" mc-action="'+ button +'">'+ button +'</span>';
        }
    }

    var newText = "";
    if(textType){
        newText = '<p class="'+ textType +'">'+ text +'</p>';

    }

    $(".mc-notification-container").append('<div class="mc-notification">'+ newButton + newText + '</div>');

    mc.updateFloatingButtons();
}
notification.close = function(e){
    $(e).parent(".mc-notification").remove();

    mc.updateFloatingButtons();
}

var openShare = function(){
    $(".mc-floating-window").each(function(){
        $(this).addClass("mc-hidden");
    });

    $("#shareLink").val( location.href );
    $("#shareLink").select();
    $(".mc-floating-window[mc-layout='share']").removeClass("mc-hidden");

    $(".mc-floating-window[mc-layout='share'] > .mc-window-header").click();
}
var closeShare = function(){
    $(".mc-floating-window").each(function(){
        $(this).removeClass("mc-opened");
    });

    setTimeout(function(){
        $(".mc-floating-window").each(function(){
            $(this).addClass("mc-hidden");
        });
        $("body").removeClass("mc-noscroll");
        $("body").scrollTop( $("body").attr("mc-scroll") );
        $(".mc-blocker").removeClass("mc-opened");
    }, 200);
}

var share = {
    facebook : function(){
        var url = encodeURIComponent( location.href );
        var facebook = window.open("https://www.facebook.com/dialog/share?app_id=804230836336073&href="+ url +"&display=popup&redirect_uri="+ url, "Share with Facebook");
        closeShare();
    },
    whatsapp: function(){
        var whatsapp = window.open("whatsapp://send?text="+ document.title +", "+ $('.mc-header .mc-header-line .mc-title').html() +" - "+ location.href, "Share with Whatsapp");
        closeShare();
    }
}

$(document).ready(function(){


    window.addEventListener("scroll", function(){

        var scrollPosition = window.scrollY ? window.scrollY : window.pageYOffset;

        /*	If the scroll is not at the bottom */
        if( (scrollPosition + window.innerHeight) < $(document).height() ){
           // $('header.mc-header .mc-header-line').remove();
            /*	Add the scroll down button	*/
            if( !$('.mc-floating .mc-button[mc-action="scroll-down"]')[0] )
                $(".mc-floating").append('<a class="mc-button mc-button-icon mc-clickable mc-button-raised" mc-action="scroll-down" onclick="javascript:scrollDown()"></a>');

        }

        /*	If the scroll position is at the bottom:	*/
        if( (scrollPosition + window.innerHeight) >= $(document).height() ){

            /*	Remove the scroll down button	*/
            $('.mc-floating .mc-button[mc-action="scroll-down"]').remove();
        }

        /*	If the scroll position is bigger than 100:	*/
        if( scrollPosition > 100 ){

            /*	Add the scroll top button	*/
            if( !$('.mc-floating .mc-button[mc-action="scroll-top"]')[0] )
                $(".mc-floating").prepend('<a class="mc-button mc-button-icon mc-clickable mc-button-raised" mc-action="scroll-top" onclick="javascript:scrollUp()"></a>');
        }

        /*	If the scroll position is at the top	*/
        if( scrollPosition <= 100 ){

            /*	Remove the scroll down button	*/
            $('.mc-floating .mc-button[mc-action="scroll-top"]').remove();
        }

    });

})
