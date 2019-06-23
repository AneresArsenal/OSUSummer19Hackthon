$('.full-tomato').click((event) => {
  if ($('.full-tomato').hasClass('split')) {
    $('.full-tomato').removeClass('split');
  } else {
    $('.full-tomato').addClass('split');
  }
})
