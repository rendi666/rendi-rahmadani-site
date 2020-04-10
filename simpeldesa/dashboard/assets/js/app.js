$( document ).ready(function() {

    // Sidebar Menu
    $(".vertical-nav-menu").metisMenu();

    // Search wrapper trigger

    $('.search-icon').click(function () {
        $(this).parent().parent().addClass('active');
    });
    // BS4 Popover


    $('[data-toggle="popover-custom-content"]').each(function (i, obj) {

        $(this).popover({
            html: true,
            placement: 'auto',
            template: '<div class="popover popover-custom" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            content: function () {
                var id = $(this).attr('popover-id');
                return $('#popover-content-' + id).html();
            }
        });

    });

    // Stop Bootstrap 4 Dropdown for closing on click inside

    $('.dropdown-menu').on('click', function (event) {
        var events = $._data(document, 'events') || {};
        events = events.click || [];
        for (var i = 0; i < events.length; i++) {
            if (events[i].selector) {

                if ($(event.target).is(events[i].selector)) {
                    events[i].handler.call(event.target, event);
                }

                $(event.target).parents(events[i].selector).each(function () {
                    events[i].handler.call(this, event);
                });
            }
        }
        event.stopPropagation(); //Always stop propagation
    });


    $('[data-toggle="popover-custom-bg"]').each(function (i, obj) {

        var popClass = $(this).attr('data-bg-class');

        $(this).popover({
            trigger: 'focus',
            placement: 'top',
            template: '<div class="popover popover-bg ' + popClass + '" role="tooltip"><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        });

    });

    $(function () {
        $('[data-toggle="popover"]').popover();
    });

    $('[data-toggle="popover-custom"]').each(function (i, obj) {

        $(this).popover({
            html: true,
            container: $(this).parent().find('.rm-max-width'),
            content: function () {
                return $(this).next('.rm-max-width').find('.popover-custom-content').html();
            }
        });
    });

    $('body').on('click', function (e) {
        $('[rel="popover-focus"]').each(function () {
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });

    $('.header-megamenu.nav > li > .nav-link').on('click', function (e) {
        $('[data-toggle="popover-custom"]').each(function () {
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });

    // BS4 Tooltips

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    $(function () {
        $('[data-toggle="tooltip-light"]').tooltip({
            template: '<div class="tooltip tooltip-light"><div class="tooltip-inner"></div></div>'
        });
    });

    // Drawer

    $('.open-right-drawer').click(function () {
        $(this).addClass('is-active');
        $('.app-drawer-wrapper').addClass('drawer-open');
        $('.app-drawer-overlay').removeClass('d-none');
    });

    $('.drawer-nav-btn').click(function () {
        $('.app-drawer-wrapper').removeClass('drawer-open');
        $('.app-drawer-overlay').addClass('d-none');
        $('.open-right-drawer').removeClass('is-active');
    });

    $('.app-drawer-overlay').click(function () {
        $(this).addClass('d-none');
        $('.app-drawer-wrapper').removeClass('drawer-open');
        $('.open-right-drawer').removeClass('is-active');
    });

    $('.mobile-toggle-nav').click(function () {
        $(this).toggleClass('is-active');
        $('.app-container').toggleClass('sidebar-mobile-open');
    });

    $('.mobile-toggle-header-nav').click(function () {
        $(this).toggleClass('active');
        $('.app-header__content').toggleClass('header-mobile-open');
    });

    $('.mobile-app-menu-btn').click(function () {
        $('.hamburger', this).toggleClass('is-active');
        $('.app-inner-layout').toggleClass('open-mobile-menu');
    });

    // Responsive

    $(window).on('resize', function(){
        var win = $(this);
        if (win.width() < 1250) {
            $('.app-container').addClass('closed-sidebar-mobile closed-sidebar');
        }
        else
        {
            $('.app-container').removeClass('closed-sidebar-mobile closed-sidebar');
        }
    });

$('.close-sidebar-btn').click(function () {

        var classToSwitch = $(this).attr('data-class');
        var containerElement = '.app-container';
        $(containerElement).toggleClass(classToSwitch);

        var closeBtn = $(this);

        if (closeBtn.hasClass('is-active')) {
            closeBtn.removeClass('is-active');
        } else {
            closeBtn.addClass('is-active');
        }
    });
});

function confirmModal(msg,url){
   if ($("#myModal").length > 0){
     $("#myModal").remove();
   }
   var divModal=null;
   divModal = $('<div id="myModal" tabindex="-1" role="dialog" aria-hidden="true" class="modal fade" />');
   divModal.append('<div class="modal-dialog modal-sm" id="myModal"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLongTitle">Konfirmasi</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button></div><div class="modal-body"><p>'+msg+'</p></div><div class="modal-footer"> <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> <a href="'+url+'" class="btn btn-primary" id="__confirm_yes">Ya</button></div></div></div>');
   $('body').append(divModal);
   $('#myModal').modal('show');
   return false;
}
// alert(0)
$('#__main_menu li ul').each(function(i){
    if($(this).children().length ==0){
        $(this).parent().remove();
        $(this).parent().parent().remove();
    }
})

$('#__main_menu li ul').each(function(i){
    console.log($(this).children());
    if($(this).children().length ==0){
        $(this).parent().remove();
        $(this).parent().parent().remove();
    }
})



    
