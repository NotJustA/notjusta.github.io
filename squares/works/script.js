/* Tabs */

const openTab = n => {
    $("[active]").removeAttr("active");
    $("button")[n].setAttribute("active", "");
}
