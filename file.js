// FOR DYNAMIC TEXT
new TypeIt("#hero", {
    speed: 80,
    loop: true
})
    .type("Sell Items Faster")
    .pause(2000)
    .options({ speed: 100, deleteSpeed: 100 })
    .delete()
    .pause(50)
    .type("Boost Your Business")
    .pause(2000)
    .options({ speed: 100, deleteSpeed: 100 })
    .delete()
    .pause(50)
    .type("Build Your Product")
    .pause(2000)
    .options({ speed: 100, deleteSpeed: 100 })
    .delete()
    .pause(50)
    .go();

// FOR CLIENT LOGO SHOWCASE
$('.gallery-responsive').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: '<i class="fa fa-2x fa-chevron-right next"></i>',
    prevArrow: '<i class="fa fa-2x fa-chevron-left previous"></i>',

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});

// FOR COUNTER
$('.counter').countUp(
    {
        delay:100,
        time:1500
    }
);

// FOR SCROLL TO TOP BUTTON
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}