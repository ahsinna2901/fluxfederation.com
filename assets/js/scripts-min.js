!function($){$(document).ready(function(){function n(){$(".scroll-trigger").off("click"),$(".scroll-trigger").on("click",function(n){n.preventDefault();var o=parseInt($("main").css("paddingTop")),e=$(this).attr("href"),s=$("#"+e).offset().top-o+1;$("html, body").animate({scrollTop:s},500)})}$.each($("iframe"),function(n,o){$(o).attr("src").indexOf("youtube")>=0&&$(o).wrap('<div class="video-container" />')}),$("h6.accordion").on("click",function(n){n.preventDefault();var o=$(this).next("div.accordion");1===o.length&&($(this).hasClass("open")?($(this).removeClass("open"),$(o).slideUp(250)):($(this).addClass("open"),$(o).slideDown(250)))}),$("#front-page .logo a").on("click",function(n){n.preventDefault(),$("html, body").animate({scrollTop:0},250,function(){$("#main-container").hasClass("closed")&&($("#main-container").slideDown(500).removeClass("closed"),$("#questions-container").slideUp(500).addClass("closed"))})}),$("#front-page a.questions").on("click",function(n){n.preventDefault(),$("html, body").animate({scrollTop:0},250,function(){$("#main-container").hasClass("closed")||($("#main-container").slideUp(500).addClass("closed"),$("#questions-container").slideDown(500).removeClass("closed"))})});var o=$("#questions-container");1===o.length&&$(o).load("questions/ajax.html",function(){$("h6.accordion").on("click",function(n){n.preventDefault();var o=$(this).next("div.accordion");1===o.length&&($(this).hasClass("open")?($(this).removeClass("open"),$(o).slideUp(250)):($(this).addClass("open"),$(o).slideDown(250)))})}),$(window).on("resize orientationchange load scroll",function(){$(this).scrollTop()<100?($("#header").removeClass("scroll"),$("main").removeClass("scroll")):($("#header").addClass("scroll"),$("main").addClass("scroll"))}),$(document).ajaxComplete(function(){n()}),n()})}(jQuery);