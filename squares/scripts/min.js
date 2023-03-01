
/* CSS Variables */
const setCSSVar = o => {
    for (const [name, value] of Object.entries(o))
    document.documentElement.style.setProperty("--" + name, value);
}

/* Viewscreen height */
let wHeigh = $(".menu").height();

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

    timeline.fromTo($(".preloader"), 0.3, {opacity: 1}, {opacity: 0, ease: Power2.ease});
    setTimeout(() => $($(".preloader").css("display", "none")), 400);
});

window.onscroll = () => {
    fillNav();
    // $(".about").css("margin-top", -240*(window.scrollY / wHeigh) + "px");
    // $(".design").css("margin-top", -240*((window.scrollY - $(".about").height()) / wHeigh) + "px");
}

/* ========= */