$(document).ready(() => {
  $(function() {
    $('body').removeClass('fade-out');
  });
  // Menu buttons behaviours
  $('.btn--burger').on('click', (event) => {
    let $el = $(event.currentTarget);
    let pressed = ($el.attr('aria-pressed') === 'true');
    $el.attr('aria-pressed', !pressed);
    $el.addClass('nav--open');
    $('nav, body, .btn--close').addClass('nav--open');
  });
  $('.btn--close').on('click', (event) => {
    let $el = $(event.currentTarget);
    let pressed = ($el.attr('aria-pressed') === 'true');
    $el.attr('aria-pressed', !pressed);
    $el.removeClass('nav--open');
    $('nav, body, .btn--burger').removeClass('nav--open');
  });

  // Navigation images behaviours
  $('.index__item').on('mouseenter', (event) => {
    let $el = $(event.currentTarget);
    let index = $el.index() + 1;
    let image = '.nav__background-image:nth-of-type(' + index + ')';
    $('.nav__background-image').removeClass('image--shown');
    $(image).addClass('image--shown');
  }).on('mouseleave', (event) => {
    $('.nav__background-image').removeClass('image--shown');
  })

  // Navigation opening book
  $(".home__index a").on("mouseenter", (event) => {
    let $el = $(event.currentTarget);
    $el.html("📖");
    $(".navigation__label").toggleClass("visible");
    $("nav").toggleClass("nav__hover");
  }).on("mouseleave", (event) => {
    let $el = $(event.currentTarget);
    $el.html("📘");
    $(".navigation__label").toggleClass("visible");
    $("nav").toggleClass("nav__hover");
  })

  // Set sidebar height
  $(".question__sidebar").css("height", $(window).height() - 15);

  if ($(window).width() < 768) {
    $(".question__sidebar ul").toggleClass("links__open links__collapsed");
  }

  // Collapse sidebar
  $(".question__sidebar__title").on("click", () => {
    $("ul").toggleClass("links__open links__collapsed");
    $(".fa-chevron-up").toggleClass("rotated");
    $(this).css("background", "var(--color-lightest)");
  });
})
