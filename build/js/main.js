$(document).ready(function(){$(".trigger-button").on("click",function(){$(".trigger-button").not(this).removeClass("active"),$(this).toggleClass("active")}),$(document).on("click",function(e){$(e.target).closest(".trigger-button, .hidden-block").length||($(".trigger-button.active").removeClass("active"),e.stopPropagation())});var e=150,o=1e3;$(window).scroll(function(){$(this).scrollTop()>e?$("#top").fadeIn():$("#top").fadeOut()}),$("#top").click(function(){$("body, html").animate({scrollTop:0},o)}),$("a.smooth-link").click(function(){return $("html, body").animate({scrollTop:$($(this).attr("href")).offset().top+"px"},{duration:500,easing:"swing"}),!1});var a=function(){$("html").removeClass("menu-open"),$(".under-level__children").removeClass("open"),$(".main-nav__link").removeClass("active")},n=function(){$("html").removeClass("popup-open"),$(".popup-container").removeClass("open")};!function(){var e,o=$(".main-nav__link"),t="data-nav-under-level",r=$(".under-level__children");r.append("<div class='close'></div>"),$("body").append("<div class='shadow-box'></div>"),$(".shadow-box").click(function(){$("html").removeClass("menu-open"),$(".main-nav__link").removeClass("active"),r.removeClass("open")}),$(".under-level__children .close").click(a);var i=(function(){o.click(function(){n();var a=$(this);return $(".popup-container").removeClass("open"),o.not(a).removeClass("active"),a.addClass("active").parents("html").addClass("menu-open"),e=a.attr(t),$(".under-level__children:not(["+t+"="+e+"])").removeClass("open"),$(".under-level__children["+t+"="+e+"]").addClass("open"),!1})}(),$(".under-level__product"));i.click(function(){i.not(this).removeClass("active").siblings(".hidden-block").stop(!0).slideUp("300"),$(this).toggleClass("active").siblings(".hidden-block").stop(!0).slideToggle("300")});var e,s=$(".g-popup"),l=$(".popup-container"),d="data-g-popup";l.append("<div class='close'></div>"),s.click(function(){var o=$(this);return o.parents("html").addClass("popup-open"),e=o.attr(d),$(".popup-container["+d+"="+e+"]").addClass("open"),$(".popup-container.open .close").click(n),!1});var c=$(".g-hover-slider");c.first().addClass("hovered").end().hover(function(){var e=$(this);c.not(e).removeClass("hovered"),e.addClass("hovered")}),$(".bx-pager__link").click(function(){var e=$(this),o=e.attr("data-submenu");console.log(o),$(".under-level__product:not([data-submenu="+o+"])").removeClass("active"),$(".under-level__product[data-submenu="+o+"]").addClass("active")})}(),$(document).keydown(function(e){27===e.keyCode&&n()});var t=$(".bxslider1").bxSlider({pager:!1,controls:!1,speed:300,pause:1e4,auto:!0,autoStart:!0,autoHover:!0,onSlideBefore:function(e,o,a){$(".bx-pager-hover1 .active").removeClass("active"),$(".bx-pager-hover1 > a").eq(a).addClass("active")},onSliderLoad:function(){$(".bx-pager-hover>a").eq(0).addClass("active")}});$(".bx-pager-hover1 a").hover(function(){var e=$(this).attr("data-slide-index");t.goToSlide(e)});var r=$(".bxslider2").bxSlider({pager:!1,controls:!1,speed:300,pause:1e4,auto:!0,autoStart:!0,autoHover:!0,onSlideBefore:function(e,o,a){$(".bx-pager-hover2 .active").removeClass("active"),$(".bx-pager-hover2 > a").eq(a).addClass("active")},onSliderLoad:function(){$(".bx-pager-hover2 > a").eq(0).addClass("active")}});$(".bx-pager-hover2 a").hover(function(){var e=$(this).attr("data-slide-index");r.goToSlide(e)})});