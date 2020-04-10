// LIQUID IMAGES
function lqd_img(i){var d=$(i);$(d).each(function(d){var a=$(this).find("img").attr("src");".lqd"==i?($(this).find("img").hide(),$(this).css("background-image","url("+a+")")):$(this).append('<div class="lqd_img" style="background-image:url('+a+');"></div>')})}

// Initialize liquid images
lqd_img(".lqd");
lqd_img(".lqd_block");

// HAMBURGER MENU
$(".nav-right__hamburger").click(function(e){
    e.preventDefault();
    if($("body").hasClass("js-nav-hamburger-open")) {
        setTimeout(function(){
            $(".js-overlay").remove();
        }, 200);
        $("body").removeClass("js-nav-hamburger-open");
    }
    else {
        $("body").append("<div class='js-overlay'></div>");
        setTimeout(function(){
            $("body").addClass("js-nav-hamburger-open");
        }, 50);
    }
});

$(".nav-right__search").click(function(e){
    e.preventDefault();
    if($("body").hasClass("js-form-search-open")) {
        $("body").removeClass("js-form-search-open");
    }
    else {
        $(".form-search__input").focus();
        $("body").addClass("js-form-search-open");
        $("body").removeClass("js-nav-hamburger-open");
    }
});

// ANCHOR LINK

$( "a.scrollLink" ).click(function( event ) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
});
// CALC QUANTITY
function calc() 
{
  var price = document.getElementById("price").innerHTML;
  var noTickets = document.getElementById("num").value;
  var total = parseFloat(price) * noTickets
  if (!isNaN(total))
    document.getElementById("total").innerHTML = total
}

$(document).bind("mouseup touchend", function(e)
{
    var nav_menu = $(".navbar--primary .nav");
    var nav_primary = $(".navbar--primary");
    var form_search = $(".form-search");
    var nav_right = $(".nav-right");

    if (!nav_menu.is(e.target) // if the target of the click isn't the container...
        && nav_primary.has(e.target).length === 0) // ... nor a descendant of the container
    {
        setTimeout(function(){
            $(".js-overlay").remove();
        }, 200);
        $("body").removeClass("js-nav-hamburger-open");
    } 
    if (!form_search.is(e.target) // if the target of the click isn't the container...
        && nav_right.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $("body").removeClass("js-form-search-open");
    }  

});

function add_quantity() {
    // ADD QUANTITY
    $('.qtyplus').click(function(){
        fieldName = $(this).attr('field');
        var currentVal = parseInt($(this).prev($('input[name='+fieldName+']')).val());
        if (!isNaN(currentVal)) {
            $(this).prev().val(currentVal + 1);
            $(this).prev().prev().removeClass('null');
            calc();
        } else {
            $(this).prev().val(0);
            $(this).prev().prev().addClass('null');
        }
        return false;
    });
    $(".qtyminus").click(function() {
        fieldName = $(this).attr('field');
        var currentVal = parseInt($(this).next($('input[name='+fieldName+']')).val());
        if (!isNaN(currentVal) && currentVal > 0) {
            $(this).next().val(currentVal - 1);
            calc();
            if (currentVal == 1) {
                $(this).addClass('null');
            }
            else {
                $(this).removeClass('null');
            }
        } else {
            $(this).next().val(0);
            $(this).addClass('null');
        }
        return false;
    });
};

// TABS
/* idTabs ~ Sean Catchpole - Version 2.2 - MIT/GPL */
(function(){var dep={"jQuery":"http://code.jquery.com/jquery-latest.min.js"};var init=function(){(function($){$.fn.idTabs=function(){var s={};for(var i=0;i<arguments.length;++i){var a=arguments[i];switch(a.constructor){case Object:$.extend(s,a);break;case Boolean:s.change=a;break;case Number:s.start=a;break;case Function:s.click=a;break;case String:if(a.charAt(0)=='.')s.selected=a;else if(a.charAt(0)=='!')s.event=a;else s.start=a;break;}}
if(typeof s['return']=="function")
s.change=s['return'];return this.each(function(){$.idTabs(this,s);});}
$.idTabs=function(tabs,options){var meta=($.metadata)?$(tabs).metadata():{};var s=$.extend({},$.idTabs.settings,meta,options);if(s.selected.charAt(0)=='.')s.selected=s.selected.substr(1);if(s.event.charAt(0)=='!')s.event=s.event.substr(1);if(s.start==null)s.start=-1;var showId=function(){if($(this).is('.'+s.selected))
return s.change;var id="#"+this.href.split('#')[1];var aList=[];var idList=[];$("a",tabs).each(function(){if(this.href.match(/#/)){aList.push(this);idList.push("#"+this.href.split('#')[1]);}});if(s.click&&!s.click.apply(this,[id,idList,tabs,s]))return s.change;for(i in aList)$(aList[i]).removeClass(s.selected);for(i in idList)$(idList[i]).hide();$(this).addClass(s.selected);$(id).show();return s.change;}
var list=$("a[href*='#']",tabs).unbind(s.event,showId).bind(s.event,showId);list.each(function(){$("#"+this.href.split('#')[1]).hide();});var test=false;if((test=list.filter('.'+s.selected)).length);else if(typeof s.start=="number"&&(test=list.eq(s.start)).length);else if(typeof s.start=="string"&&(test=list.filter("[href*='#"+s.start+"']")).length);if(test){test.removeClass(s.selected);test.trigger(s.event);}
return s;}
$.idTabs.settings={start:0,change:false,click:null,selected:".selected",event:"!click"};$.idTabs.version="2.2";$(function(){$(".idTabs").idTabs();});})(jQuery);}
var check=function(o,s){s=s.split('.');while(o&&s.length)o=o[s.shift()];return o;}
var head=document.getElementsByTagName("head")[0];var add=function(url){var s=document.createElement("script");s.type="text/javascript";s.src=url;head.appendChild(s);}
var s=document.getElementsByTagName('script');var src=s[s.length-1].src;var ok=true;for(d in dep){if(check(this,d))continue;ok=false;add(dep[d]);}if(ok)return init();add(src);})();

function tabs() {
    $(".p_tabs").idTabs(function(id,list,set){ 
        $("a",set).removeClass("selected") 
        .filter("[href='"+id+"']",set).addClass("selected"); 
        for(i in list) 
            $(list[i]).hide(); 
        $(id).fadeIn(); 
        return false;
    }); 
}
