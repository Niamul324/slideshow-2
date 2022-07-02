let flag = 0;
function plusSlides(x) {
  flag = flag + x;
  slideshow(flag);
}
function dotslide(a) {
  flag = a;
  slideshow(flag);
}
function slideshow(num) {
  let i;
  let slides = document.getElementsByClassName("mySlides")
  let dots = document.getElementsByClassName("dot")
  if (num == slides.length) {
    flag = 0;
    num = 0;
  }
  if (num<0){
     flag = slides.length - 1;
     num = slides.length - 1;
  }
  for(y of slides){
    y.style.display = "none"
  }
  for (let i = 0; i < dots.length; i++) {
    dots[num].className = dots[num].className.replace(" active", "");
    
  }
  slides[num].style.display = "block";
  dots[num].className += " active";
}
slideshow(flag);