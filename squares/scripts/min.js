
/* CSS Variables */
const setCSSVar = o => {
    for (const [name, value] of Object.entries(o))
    document.documentElement.style.setProperty("--" + name, value);
}

/* Viewscreen height */
let wHeigh = screen.height;

/* Page timeline */
const timeline = new TimelineMax();

/* ========= */

/* Basic setup */

$(".about").css({"padding-top": $("nav").height() + "px"});
$(".deisgn").css({"padding-top": $("nav").height() + "px"});

const resize = () => setCSSVar({"artwork": ($(document).width() - 60) / 580});
resize();
window.onresize = () => setTimeout(resize(), 100);

/* ========= */

/* Menu */

const menu = () => {
    if (!$(".menu").attr("style")) $(".menu").css("animation", "0.7s cubic-bezier(.61,.11,0,1) 0s menu_open both")
    else $(".menu").css("animation", "0.7s cubic-bezier(.61,.11,0,1) 0s menu_close both")
}

/* Back to top */

$(".btt").click(() => {
    timeline.fromTo($("html"), 1, {scrollTop: window.scrollY}, {scrollTop: 0, ease: Power2.easeInOut})
})

/* Navigation bar */

const fillNav = () => {
    if (window.scrollY) $("nav").css("background", "var(--light)");
    else $("nav").css("background", "var(--bg)");
}

fillNav();

/* ========= */

/* Page behaviour */

$(window).on("load", () => 
    $(".preloader").css("animation", "0.7s cubic-bezier(.61,.11,0,1) 1s loaded both")
)

window.onscroll = () => {
    fillNav();
    // $(".about").css("margin-top", -240*(window.scrollY / wHeigh) + "px");
    // $(".design").css("margin-top", -240*((window.scrollY - $(".about").height()) / wHeigh) + "px");
}

/* ========= */
