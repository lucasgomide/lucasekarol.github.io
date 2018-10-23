(function($){$(function(){var $body=$("body"),$header=$("#header"),$banner=$("#banner, #internal-banner");$("#nav > ul").dropotron({alignment:"right"});$('<div id="navButton">'+
'<a href="#navPanel" class="toggle"></a>'+
"</div>").appendTo($body);$('<div id="navPanel">'+
"<nav>"+
$("#nav").navList()+
"</nav>"+
"</div>").appendTo($body).panel({delay:500,hideOnClick:true,hideOnSwipe:true,resetScroll:true,resetForms:true,side:"left",target:$body,visibleClass:"navPanel-visible"});if($header.hasClass("alt")&&$banner.length>0){$(window).on("load",function(){$banner.scrollwatch({delay:0,range:0.1,anchor:"top",on:function(){$header.addClass("alt reveal");},off:function(){$header.addClass("reveal");$header.removeClass("alt");}});});}});})(jQuery);