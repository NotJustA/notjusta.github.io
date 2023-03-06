
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
$(".menu .themes span").css("left", localStorage["theme"] === "light" ? "1px" : "13px");

if (!localStorage["theme"]) localStorage["theme"] = "light";
const resize = () => setCSSVar({"artwork": ($(document).width() - 60) / 580});
resize();
window.onresize = () => setTimeout(resize(), 100);

/* ========= */

/* Theme */

const setTheme = () => {
    let theme = localStorage["theme"];
    setCSSVar({
        "bg": (theme === "light" ? "#D2D2D2" : "#181818"),
        "primary": (theme === "light" ? "#0D0D0D" : "#F2F2F2"),
        "secondary": (theme === "light" ? "#2D2D2D" : "#A2A2A2"),
        "light": (theme === "light" ? "#E7E7E7" : "#1C1C1C"),
        "button": (theme === "light" ? "#C3C3C3" : "#323232")
    })
}

const changeTheme = () => {
    localStorage["theme"] = localStorage["theme"] === "light" ? "dark" : "light";
    setTheme();
}

setTheme();

/* Menu */

const menu = () => {
    if ($(".menu").attr("style")) $(".menu").removeAttr("style");
    else $(".menu").css("display", "none");
}

$(".menu .themes").click(() => {
    let theme = localStorage["theme"];
    $(".menu .themes span").css("left", theme === "light" ? "13px" : "1px");
    changeTheme();
})

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

$(window).on("load", () => {
    console.log("Document is ready");
    $(".preloader").css("animation", "0.7s cubic-bezier(.61,.11,0,1) 1s loaded both")
    // timeline.fromTo($(".preloader"), 1, {y: 0}, {y: -wHeigh, ease: Power2.ease});
    // setTimeout(() => $($(".preloader").css("display", "none")), 400);

    timeline.fromTo($(".hero .title"), 0.3, {opacity: 0, y: 20}, {opacity: 1, y: 0, ease: Power2.easeInOutside}, "+=1.4")
    .fromTo($(".hero .subtext"), 0.3, {opacity: 0, y: 20}, {opacity: 1, y: 0, ease: Power2.easeInOutside}, "-=0.2")
    .fromTo($("nav"), 0.2, {opacity: 0, y: -10}, {opacity: 1, y: 0, ease: Power2.easeInOut}, "+=0.3")

    apearSection(1);
});

window.onscroll = () => {
    fillNav();
    apearSection(0);
    // $(".about").css("margin-top", -240*(window.scrollY / wHeigh) + "px");
    // $(".design").css("margin-top", -240*((window.scrollY - $(".about").height()) / wHeigh) + "px");
}

apearSection = d => {

    if (($(".hero").height() / 2) <= window.scrollY && $(".about").css("transform") === 'none')
    timeline.fromTo($(".about"), 0.5, {opacity: 0, y: 20}, {opacity: 1, y: 0, ease: Power2.easeInOutside}, (d ? "-=0.9" : "+=0"));

    if (($(".about").position().top + $(".about").height() / 2) <= window.scrollY && $(".design").css("transform") === 'none')
    timeline.fromTo($(".design"), 0.5, {opacity: 0, y: 20}, {opacity: 1, y: 0, ease: Power2.easeInOutside}, (d ? "-=0.9" : "+=0"));

    if (($(".design").position().top + $(".design").height() / 2) <= window.scrollY && $(".webdev").css("transform") === 'none')
    timeline.fromTo($(".webdev"), 0.5, {opacity: 0, y: 20}, {opacity: 1, y: 0, ease: Power2.easeInOutside}, (d ? "+=2.4" : "+=0"));

    if (($(".webdev").position().top + $(".webdev").height() / 2) <= window.scrollY && $(".ecommerce").css("transform") === 'none')
    timeline.fromTo($(".ecommerce"), 0.5, {opacity: 0, y: 20}, {opacity: 1, y: 0, ease: Power2.easeInOutside}, (d ? "+=0.5" : "+=0"));
}

/* ========= */
