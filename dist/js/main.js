$('a[href^="#"').on('click', function () {

  let href = $(this).attr('href');

  $('html, body').animate({
    scrollTop: $(href).offset().top
  });
  return false;
});

jQuery(document).ready(function () {
  var btn = $('#button');
  btn.hide();
});

jQuery(document).ready(function () {
  var btn = $('#button');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.show();
    } else {
      btn.hide();
    }
  });
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });
});

let one = $('.one');
let two = $('.two');



let all = document.querySelector('.all');
let print = document.querySelector('.print');
let web = document.querySelector('.web');
let user = document.querySelector('.user');
let mockUp = document.querySelector('.mock-up');

let productsGrid = document.querySelector('.products-grid');
let printGrid = document.querySelector('.products-grid-print');
let webGrid = document.querySelector('.products-grid-web');
let userGrid = document.querySelector('.products-grid-user');
let mockUpGrid = document.querySelector('.products-grid-mockUp');


all.onclick = function () {
  all.style.color = 'red';
  print.style.color = '#8a877b';
  web.style.color = '#8a877b';
  user.style.color = '#8a877b';
  mockUp.style.color = '#8a877b';
  productsGrid.style.display = 'grid';
  printGrid.style.display = 'none';
  webGrid.style.display = 'none';
  userGrid.style.display = 'none';
  mockUpGrid.style.display = 'none';
};

print.onclick = function () {
  all.style.color = '#8a877b';
  print.style.color = 'red';
  web.style.color = '#8a877b';
  user.style.color = '#8a877b';
  mockUp.style.color = '#8a877b';
  productsGrid.style.display = 'none';
  printGrid.style.display = 'grid';
  webGrid.style.display = 'none';
  userGrid.style.display = 'none';
  mockUpGrid.style.display = 'none';
};

web.onclick = function () {
  all.style.color = '#8a877b';
  print.style.color = '#8a877b';
  web.style.color = 'red';
  user.style.color = '#8a877b';
  mockUp.style.color = '#8a877b';
  productsGrid.style.display = 'none';
  printGrid.style.display = 'none';
  webGrid.style.display = 'grid';
  userGrid.style.display = 'none';
  mockUpGrid.style.display = 'none';
};

user.onclick = function () {
  all.style.color = '#8a877b';
  print.style.color = '#8a877b';
  web.style.color = '#8a877b';
  user.style.color = 'red';
  mockUp.style.color = '#8a877b';
  productsGrid.style.display = 'none';
  printGrid.style.display = 'none';
  webGrid.style.display = 'none';
  userGrid.style.display = 'grid';
  mockUpGrid.style.display = 'none';
};

mockUp.onclick = function () {
  all.style.color = '#8a877b';
  print.style.color = '#8a877b';
  web.style.color = '#8a877b';
  user.style.color = '#8a877b';
  mockUp.style.color = 'red';
  productsGrid.style.display = 'none';
  printGrid.style.display = 'none';
  webGrid.style.display = 'none';
  userGrid.style.display = 'none';
  mockUpGrid.style.display = 'grid';
};





