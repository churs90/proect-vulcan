var numb = 1;
showSlids(numb);
function one(n) {
  showSlids(numb += n);
}

function showSlids(n) {
  var i;
  var slide = document.getElementsByClassName("slide");
  if (n > slide.length) {
    numb = 1;
  }
  if (n < 1) {
    numb = slide.length;
  }
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = 'none';
  }
  slide[numb-1].style.display = 'block';
}


