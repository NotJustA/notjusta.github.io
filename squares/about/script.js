/* Principle lsit */

const showDesc = n => {
    let thesame = $(".principle")[n].getAttribute("expanded") !== null

    $("[expanded] svg").html('<rect y="24" width="24" height="24" rx="12" transform="rotate(-90 0 24)" style="fill: var(--button)"/><path d="M8 12L16 12M12 8L12 16" style="stroke: var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>');
    $("[expanded] .description").css("display", "none");
    $("[expanded]").removeAttr("expanded");

    if(thesame) return;

    $(".principle")[n].setAttribute("expanded", "");
    $("[expanded] svg").html('<rect y="24" width="24" height="24" rx="12" transform="rotate(-90 0 24)" fill="#C3C3C3"/><path d="M8 12L16 12" stroke="#0D0D0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>');
    $("[expanded] .description").css("display", "");
}