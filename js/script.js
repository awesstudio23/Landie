$(document).ready(function (e) {
  $.scrollify({
    section: ".scrollify",
    scrollSpeed: 100,
    setHeights: false,
    updateHash: false,
    touchScroll: true,
  });
  if (e.cancelable) {
    e.preventDefault();
  }

  new WOW().init();
});