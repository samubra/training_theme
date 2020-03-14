css:
 .lt-content {
  padding: 0 0;
}
.collection-horizontal-btn{
    position: absolute; display: inline-block; right: 24px;
}
#lt-navigation nav{
    background-color:#ff5722;
}
#lt-navigation{
  padding-top:0px;
  padding-bottom: 0px;
}
.page-footer{
    background-color:#455A64;
    color:#8FA1A6;
}
.footer-copyright{
    background-color:#37474F;
    color:#E4500D;
    }
ul#mobile-menu  li a{
    color:#000;
    }
ul#mobile-menu  li.active a{
    color:#a22700;
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
