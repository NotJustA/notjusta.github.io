/* Next item */

const nextItem = i => {
    let e = $(".main-page > div")[i]
    console.log(e);
    timeline.fromTo($("html"), (e.offsetTop / window.scrollY), {scrollTop: window.scrollY}, {scrollTop: e.offsetTop, ease: Power2.easeInOut})
}