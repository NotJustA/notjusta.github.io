/* == ================ == */
/* == Global variables == */
/* == ================ == */

// Review list
let reviews = [
    ["Sarah Johnson", "Floral Design Std.", "I recently had the pleasure of working with Squares on a website redesign project for my business. Their team of designers was professional, responsive, and creative. They really took the time to understand our brand and business goals, and delivered a stunning design that exceeded our expectations. I would highly recommend Squares for anyone looking for top-notch design services."],
    ["Emily Davis", "Davis Fitness Co.", "Squares did an excellent job designing our company's new website. They were able to capture our brand's essence and create a design that was both visually appealing and user-friendly. The team was easy to work with and provided regular updates throughout the process. We couldn't be happier with the end result!"],
    ["Mark Thompson", "Thompson's Travel Agency", "We hired Squares to develop a custom web application for our business, and they did not disappoint. Their team of developers was incredibly knowledgeable and skilled, and they were able to deliver a high-quality product within our timeline and budget constraints. We would definitely work with Squares again in the future."],
    ["Rachel Lee", "Lee's Marketing Solutions", "Squares did an excellent job building our new website. Their team of developers was able to take our ideas and turn them into a fully functional, responsive website that looks great on all devices. They were also great communicators throughout the process and provided us with regular updates. We highly recommend Squares for any web development needs."],
    ["John Smith", "Smith & Co. Design", "Squares helped us launch our new eCommerce store, and we couldn't be happier with the results. Their team was able to set up our store quickly and efficiently, and provided us with all the tools we needed to manage our inventory and process orders. Their expertise in eCommerce really helped us streamline our business and increase sales. Thank you, Squares!"],
    ["Michael Brown", "Brown's Tech Shop", "Squares has been an amazing partner in helping us grow our online business. Their team of eCommerce experts has been instrumental in driving traffic and sales to our store, and they are always available to answer any questions or provide guidance. We highly recommend Squares to anyone looking to take their eCommerce business to the next level."]
]

// Awards list
let awards = {
    "Best Web Design Studio" : "This award would recognize the studio's exceptional ability to create stunning and effective website designs that meet the needs and objectives of their clients.",
    "Top E-Commerce Website Developer" : "This award would recognize the studio's expertise in developing high-quality, user-friendly e-commerce websites that help businesses succeed in the online marketplace.",
    "Best Small Business Website Developer" : "This award would recognize the studio's ability to create affordable, effective, and user-friendly websites for small businesses.",
    "Most Innovative Web Design Studio" : "This award would recognize the studio's ability to push the boundaries of web design and create innovative solutions that help their clients stand out in a crowded online marketplace.",
    "Best Customer Service": "This award would recognize the studio's commitment to providing exceptional customer service, including prompt response times, clear communication, and ongoing support for their clients."
}

// Screen heihgt and cursor position
let wHeigh = screen.height, ctop = 0, cleft = 0;

// Page timeline
const timeline = new TimelineMax();

// Review index
if (!localStorage["review"]) localStorage["review"] = 0;
let reviewID = +(localStorage["review"]);

// Works category
if (!localStorage["cat"]) localStorage["cat"] = "all";

/* == ====== == */
/* == Cursor == */
/* == ====== == */

// Cursor movement
const cursorPos = e => {
    if (e.sourceCapabilities) {
        if (e.sourceCapabilities["firesTouchEvents"]) {
            if ($(".cursor").attr("style")) $(".cursor").css("opacity", 0);
            return;
        }
    }

    $(".cursor").css("opacity", 1);

    $(".cursor").css({
        "left": (e.clientX),
        "top": (e.clientY)
    });
}

document.onmousemove = cursorPos;
document.addEventListener("touchstart", () => $(".cursor").css("opacity", 0));

document.onmouseleave = () => {
    $(".cursor").css("opacity", 0);
}

$(".link, [pointer]").mouseenter(() => {
    $(".cursor").css("transform", "scale(3)")
})

$(".link, [pointer]").mouseleave(() => {
    $(".cursor").css("transform", "scale(1)")
})

$("[draggable]").mouseenter(() => {
    $(".cursor").css({
        "background-color": "#FFFFFF00",
        "border-width": "1px",
        "transform": "scale(3)",
        "mix-blend-mode": "normal"
    })
})

$("[draggable]").mouseleave(() => {
    $(".cursor").css({
        "background-color": "#FFFFFF",
        "border-width": "0px",
        "transform": "scale(1)",
        "mix-blend-mode": "difference"
    })
})

/* == ========= == */
/* == Functions == */
/* == ========= == */

// CSS Variables
const setCSSVar = o => {
    for (const [name, value] of Object.entries(o))
    document.documentElement.style.setProperty("--" + name, value);
}

// On window resize
const resize = () => setCSSVar({"artwork": ($(document).width() - 60) / 580});

// Navbar filling up
const fillNav = () => {
    if (window.scrollY) $("nav").css("background", "var(--light)");
    else $("nav").css("background", "var(--bg)");
}

// When page's loaded
$(window).on("load", () => 
    $(".preloader").css("animation", "0.7s cubic-bezier(.61,.11,0,1) 1s loaded both")
)

/* == ================== == */
/* == Functions for HTML == */
/* == ================== == */

// Opening & closing menu
const menu = () => {
    if (!$(".menu").attr("style"))
        $(".menu").css("animation", "0.7s cubic-bezier(.61,.11,0,1) 0s menu_open both")
   
    else { 
        $(".menu").css("animation", "0.7s cubic-bezier(.61,.11,0,1) 0s menu_close both");
        setTimeout(() => $(".menu").removeAttr("style"), 701);
    }
}

// Manifesto descriptions
const showPrinDesc = n => {
    let thesame = $(".principle")[n].getAttribute("expanded") !== null

    $("[expanded] img").attr("src", "https://notjusta.github.io/squares/shapes/expand.svg");
    $("[expanded] .description").css("display", "none");
    $("[expanded]").removeAttr("expanded");

    if(thesame) return;

    $(".principle")[n].setAttribute("expanded", "");
    $("[expanded] img").attr("src", "https://notjusta.github.io/squares/shapes/collapse.svg");
    $("[expanded] .description").css("display", "");
}

// Awards switcher
const showAward = n => {
    let name = Object.keys(awards)[n];
    let value = awards[name];

    $("[shown]").removeAttr("shown");
    $(".tabs div")[n].setAttribute("shown", "");

    $(".award").html('<div class="name">' + name + '</div>' + value);
}

// Back to top
const backtotop = () => timeline.fromTo(
    $("html"),
    0.0005 * window.scrollY,
    {scrollTop: window.scrollY},
    {scrollTop: 0, ease: Power2.easeInOut}
)

// Reviews carousel
const showReview = dir => {
    if (dir === "prev") reviewID = reviewID? reviewID - 1 : reviews.length - 1;
    else if (dir === "next") reviewID = (reviewID === reviews.length - 1)? 0 : reviewID + 1;
    localStorage["review"] = reviewID;
    
    $(".vlist .text").html(reviews[reviewID][2]);
    $(".vlist .author").html(reviews[reviewID][0] + '<span id="company">, ' + reviews[reviewID][1] + '</span>');

    return reviewID;
}

// Next item
const nextItem = i => {
    let e = $(".main-page > div")[i];
    
    timeline.fromTo(
        $("html"),
        (e.offsetTop / window.scrollY),
        {scrollTop: window.scrollY},
        {scrollTop: e.offsetTop, ease: Power2.easeInOut}
    )
}

// Works tab switch
const openTab = n => {
    $(".tabs [active]").removeAttr("active");
    $(".tabs button")[n].setAttribute("active", "");

    const cat = $(".tabs [active]").attr("class").split("-")[1];
    localStorage["cat"] = cat;

    if (cat === "all") {
        [...$("#works div.work")].forEach(e => e.removeAttribute("style"));
        return;
    } 

    [...$("#works div.work")].forEach(e => {
        if (e.getAttribute("category") !== cat) e.style.display = "none";
        else e.removeAttribute("style");
    });
}

/* == ================= == */
/* == After page loaded == */
/* == ================= == */

// Exectuning ByDefault functions
resize();
fillNav();
showReview("this");

// Event handlers
window.onresize = () => setTimeout(resize(), 100);
window.onscroll = e => { fillNav(); }

/* == ===== == */
/* == Links == */
/* == ===== == */

$(".link").click(e => {
    let path = "", dir = e.target.className.split(" ")[1];

    if (dir.split("_")[0] !== "more" && dir !== "home") {
        window.open("https://" + dir);
        return;
    }

    $(".preloader").css({"animation": "unset", "height": "0vh"});
    setTimeout(() => $(".preloader").css({"animation": "0.7s cubic-bezier(.61,.11,0,1) 0s both unload"}), 10);
    
    switch (dir) {
        case "home": break;
        case "more_about": path = "about"; break;
        case "more_reviews": path = "reviews"; break;
        case "more_contact": path = "contact"; break;

        case "more_works":
            path = "works";
            localStorage["cat"] = "all";
            break;

        case "more_design":
            path = "works";
            localStorage["cat"] = "design";
            break;

        case "more_webdev":
            path = "works";
            localStorage["cat"] = "webdev";
            break;

        case "more_ecommerce":
            path = "works";
            localStorage["cat"] = "ecommerce";
            break;
    }

    setTimeout(() => window.open("https://notjusta.github.io/squares/" + path, "_self"), 710);
})