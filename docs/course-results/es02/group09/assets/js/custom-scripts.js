// This is Javascript code to make the example in question02 work, feel free to remove this when you start working on your project
$(document).ready(function() {

    $('.bubble').on('click', function(event) {

        event.stopPropagation();
        let listIndex = $(event.currentTarget).index() + 1;

        $('.label').removeClass('is-visible');
        $('.label:nth-child(' + listIndex + ')').addClass('is-visible');

    });

    $(':not(.bubble)').on('click', function(event) {

        // console.log('event fired!');
        $('.label').removeClass('is-visible');

    })

    $('.legend__item').on('mouseenter', function(event) {

        // console.log($(event.currentTarget).attr("data-area"));
        let area = $(event.currentTarget).attr("data-area");

        $('.label').removeClass('is-visible');

        $('.legend__item').addClass('is-out-focus');
        $(event.currentTarget).removeClass('is-out-focus');

        $('.bubble').addClass('is-out-focus');
        $('.' + area).removeClass('is-out-focus');

    }).on('mouseleave', function(event) {

        $('.bubble').removeClass('is-out-focus');
        $('.legend__item').removeClass('is-out-focus');

    })

});
