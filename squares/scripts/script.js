/* Next item */

const nextItem = i => {
    let e = $(".main-page > div")[i]
    console.log(e);
    timeline.fromTo($("html"), (e.offsetTop / window.scrollY), {scrollTop: window.scrollY}, {scrollTop: e.offsetTop, ease: Power2.easeInOut})
}

$(".more_about").click(() => {

    $(".preloader").css({"animation": "unset", "height": "0vh"});
    setTimeout(() => $(".preloader").css({"animation": "0.7s cubic-bezier(.61,.11,0,1) 0s both unload"}), 10);
    setTimeout(() => window.open("https://notjusta.github.io/squares/about", "_self"), 710);

})

$(".more_reviews").click(() => {

    $(".preloader").css({"animation": "unset", "height": "0vh"});
    setTimeout(() => $(".preloader").css({"animation": "0.7s cubic-bezier(.61,.11,0,1) 0s both unload"}), 10);
    setTimeout(() => window.open("https://notjusta.github.io/squares/reviews", "_self"), 710);

})
