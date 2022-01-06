function hamburgerChange() {
    $(".hamburger").toggleClass("change")
    $(".close-icon").toggleClass("change")
    $(".nav__menu").toggleClass("change")
    $("#darkness").toggleClass("change")
}

// slideshow animation

const changeIndex = (direction, max) => {
    if (direction == "increase") {
        currentIndex += 1
        if (currentIndex > max) {
            currentIndex = 0;
        }
        imgShowDesktop = slideshowArray[currentIndex].imageDesktop
        imgShowMobile = slideshowArray[currentIndex].imageMobile
        slideshowh1 = slideshowArray[currentIndex].h1
        slideshowp = slideshowArray[currentIndex].p
    }
    else if (direction == "decrease") {
        currentIndex -= 1
        if (currentIndex < 0) {
            currentIndex = max
        }
        imgShowDesktop = slideshowArray[currentIndex].imageDesktop
        imgShowMobile = slideshowArray[currentIndex].imageMobile
        slideshowh1 = slideshowArray[currentIndex].h1
        slideshowp = slideshowArray[currentIndex].p
    }
}

let currentIndex = 0
const slideshowArray = [
    {
        "h1": "Discover innovative ways to decorate", "p": "We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life.Create a room in your own style with our collection and make your property a reflection of you and what you love.", "imageDesktop": "./assets/images/desktop-image-hero-1.jpg", "imageMobile": "./assets/images/mobile-image-hero-1.jpg"
    }
    ,
    {
        "h1": "We are available all across the globe", "p": "With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we're in most major cities throughout the country.Find the branch nearest you using our store locator.Any questions? Don't hesitate to contact us today. ", "imageDesktop": "./assets/images/desktop-image-hero-2.jpg", "imageMobile": "./assets/images/mobile-image-hero-2.jpg"
    }
    ,
    {
        "h1": "Manufactured with the best materials", "p": "Our modern furniture store provide a high level of quality.Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible.With three decades of experience in this industry, we understand what customers want for their home and office.", "imageDesktop": "./assets/images/desktop-image-hero-3.jpg", "imageMobile": "./assets/images/mobile-image-hero-3.jpg"
    }
]
let imgShowDesktop = slideshowArray[currentIndex].imageDesktop
let imgShowMobile = slideshowArray[currentIndex].imageMobile
let slideshowh1 = slideshowArray[currentIndex].h1
let slideshowp = slideshowArray[currentIndex].p

$(".left-arrow").on("click", () => {
    changeIndex("decrease", 2)

    $(".slideshow-img-js").attr("src", imgShowDesktop)
    $(".slideshow-img-js").removeClass("fade-in")
    setInterval(() => {
        $(".slideshow-img-js").addClass("fade-in")
    }, 0.5);

    $(".slideshow-img-mobile-js").attr("src", imgShowMobile)
    $(".slideshow-img-mobile-js").removeClass("fade-in")
    setInterval(() => {
        $(".slideshow-img-mobile-js").addClass("fade-in")
    }, 0.5);

    $(".slideshow__desc h1").text(slideshowh1)
    $(".slideshow__desc h1").removeClass("fade-in")
    setInterval(() => {
        $(".slideshow__desc h1").addClass("fade-in")
    }, 0.5);
    $(".slideshow__desc p").text(slideshowp)
    $(".slideshow__desc p").removeClass("fade-in")
    setInterval(() => {
        $(".slideshow__desc p").addClass("fade-in")
    }, 0.5);
})
$(".right-arrow").on("click", () => {
    changeIndex("increase", 2)

    $(".slideshow-img-js").attr("src", imgShowDesktop)
    $(".slideshow-img-js").removeClass("fade-in")
    setInterval(() => {
        $(".slideshow-img-js").addClass("fade-in")
    }, 0.5);

    $(".slideshow-img-mobile-js").attr("src", imgShowMobile)
    $(".slideshow-img-mobile-js").removeClass("fade-in")
    setInterval(() => {
        $(".slideshow-img-mobile-js").addClass("fade-in")
    }, 0.5);

    $(".slideshow__desc h1").text(slideshowh1)
    $(".slideshow__desc h1").removeClass("fade-in")
    setInterval(() => {
        $(".slideshow__desc h1").addClass("fade-in")
    }, 0.5);

    $(".slideshow__desc p").text(slideshowp)
    $(".slideshow__desc p").removeClass("fade-in")
    setInterval(() => {
        $(".slideshow__desc p").addClass("fade-in")
    }, 0.5);
})
