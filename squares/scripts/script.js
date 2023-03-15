/* Next item */

const nextItem = i => {
    let e = $(".main-page > div")[i]
    console.log(e);
    timeline.fromTo($("html"), (e.offsetTop / window.scrollY), {scrollTop: window.scrollY}, {scrollTop: e.offsetTop, ease: Power2.easeInOut})
}

$(".link").click(e => {
    $(".preloader").css({"animation": "unset", "height": "0vh"});
    setTimeout(() => $(".preloader").css({"animation": "0.7s cubic-bezier(.61,.11,0,1) 0s both unload"}), 10);
    
    switch (e.target.className.split(" ")[1]) {
        case "more_about":
            setTimeout(() => window.open("notjusta.github.io/squares/about", "_self"), 710);
            break;

        case "more_works":
            setTimeout(() => window.open("notjusta.github.io/squares/works", "_self"), 710);
            break;

        case "more_design":
            setTimeout(() => window.open("notjusta.github.io/squares/works?cat=design", "_self"), 710);
            break;

        case "more_webdev":
            setTimeout(() => window.open("notjusta.github.io/squares/works?cat=webdev", "_self"), 710);
            break;

        case "more_ecommerce":
            setTimeout(() => window.open("notjusta.github.io/squares/works?cat=ecommerce", "_self"), 710);
            break;

        case "more_reviews":
            setTimeout(() => window.open("notjusta.github.io/squares/reviews", "_self"), 710);
            break;
    }
})
