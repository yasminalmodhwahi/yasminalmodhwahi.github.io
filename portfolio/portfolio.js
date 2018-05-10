
// var sliderImages = document.getElementById(".slide");
var arrowLeft = document.getElementById("arrowleft");
var arrowRight = document.getElementById("arrowright");
    // current = 0;

var slideIndex = 0;
/*this is for the slideshow automatic from https://www.w3schools.com/howto/howto_js_slideshow.asp*/

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        //console.log(slides);
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
           slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
          slideIndex = 1
        }
        slides[slideIndex-1].style.display = "block";

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 4000); // Change image every 2 seconds
    }
    showSlides();

/*song autoplay*/
var song;

function preload(){
  song = loadSound("music.mp3");
}

function setup (){
  createCanvas(200,200);
  song.setVolume(0.5);
  song.loop();
}

/*load slower transition*/
var i = 0,               //initial index
    duration = 3000,     //animation duration
    interval = 3000;     //interval

function switchImg() {
    $("<img>")                                               //create new <img>
        .attr("src", "img" + (i<6?++i:(i=1,i)) + ".jpg") //set attr.
        .css("opacity", 0)                                   //hide it
        .prependTo("#wrap")                                  //add it to DOM
        .animate({                                           //fade in
            opacity: 1
        }, {
            duration: duration
        })
        .next()                                              //select current img
        .animate({                                           //fade out
            opacity: 0
        }, {
            duration: duration
        })
        .promise()
        .done(function () {                                  //remove old img
            $(this).remove();                                // when done
            setTimeout(switchImg, interval);                 //repeat
        });
}
switchImg();




/*

//this is the code for the slideshow//
var slideIndex = 0;
showSlides();

function showSlides(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n>x.length){ index = 1};
    if (n<1) {index = x.length};
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        x[index-1].style.display = "block";
    }
    autoslide();
    function autoSlide(){
      var i;
      var x = document.getElementsByClassName("mySlides")
      for(i=0;i<x.length;i++)
          {
            x[i].style.display = "none";
          }
      if (index > x.length){index = 1}
      x[index-1].style.display ="block";
      index++;
      setTimeout(autoSlide,2000);
    }

    /*slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}


//this code is for playing the music

function preload (){
  song = loadSound("music.mp3");
}

function setup(){
  createCanvas(200, 200);
  song.play();
}

//code below is for moving images right and Left, not the most diserable

//use code from here: https://codepen.io/bradtraversy/pen/boydaE for the image slidehow

//clear all images
function reset (){
  console.log ("hi")
  for(let i=0; i < sliderImages.length; i++){
    sliderImages[i].style.display = "none";
  }
}

//Initialise the sslider
function startSlide(){
  reset();
  sliderImages[0].style.display = "block";
}

//show previous
function slideLeft(){
  reset();
  sliderImages[current - 1].style.display= "block";
  current--;
}

//show Next
function slideRight(){
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

//Left arrow click
arrowLeft.addEventListener("click", function(){
  if(current == 0){
    current = sliderImages.length;
  }
  slideLeft();
});

//Right arrow click
arrowRight.addEventListener("click", function(){
  if(current === sliderImages.length - 1){
    current = -1;
  }
  slideRight();
});

startSlide();

*/
