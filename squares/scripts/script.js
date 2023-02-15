window.onscroll = () => {
    if (window.scrollY) $("nav").css("background", "var(--light)");
    else $("nav").css("background", "var(--bg)");
}

$(".about").css({"padding-top": $("nav").height() + "px"});
$(".deisgn").css({"padding-top": $("nav").height() + "px"});

const resize = () => document.documentElement.style.setProperty("--artwork", ($(document).width() - 40) / 580);
resize();
window.onresize = () => setTimeout(resize(), 100);