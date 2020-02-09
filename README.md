css:
.lt-content {
  padding: 0 0;
}
.padding-top{
    margin-top: 70px;
}
.lt-parallax-header{
    margin-top: 70px;
    height:220px;
    }
.valign-wrapper{
    height:320px;
}
.collection-horizontal{
    position: relative; height: 70px;
}
.collection-horizontal-btn{
    position: absolute; display: inline-block; right: 24px;
}
#lt-navigation nav{
    background-color:#ff5722;
}
ul#mobile-menu  li a{
    color:#000;
    }
ul#mobile-menu  li.active a{
    color:#a22700;
    }

js:
$(document).ready(function() {
        $("ul.pagination li").addClass('waves-effect');
var activeText = $("ul.pagination li.active").text();
$("ul.pagination li.active").html("<a>"+activeText+"</a>");
$('#lt-navigation nav').removeClass('lt-no-background');
    });
