var slideIndex = 0;
var slideInterval = setInterval(showSlides, 5000);

function showSlides() {
    var slides = document.getElementById("mySlider").getElementsByTagName("img");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";
}
