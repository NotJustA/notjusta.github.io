
/* CSS Variables */
const setCSSVar = o => {
    for (const [name, value] of Object.entries(o))
    document.documentElement.style.setProperty("--" + name, value);
}

/* ========= */

$(".about").css({"padding-top": $("nav").height() + "px"});
$(".deisgn").css({"padding-top": $("nav").height() + "px"});

/* ========= */

window.onscroll = () => {
    if (window.scrollY) $("nav").css("background", "var(--light)");
    else $("nav").css("background", "var(--bg)");
}

const resize = () => setCSSVar({"artwork": ($(document).width() - 60) / 580});
resize();
window.onresize = () => setTimeout(resize(), 100);

if (!localStorage["theme"]) localStorage["theme"] = "light";

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

setTheme();

const changeTheme = () => {
    localStorage["theme"] = localStorage["theme"] === "light" ? "dark" : "light";
    setTheme();
}