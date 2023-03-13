/* Principle lsit */

let awards = {
    "Best Web Design Studio" : "This award would recognize the studio's exceptional ability to create stunning and effective website designs that meet the needs and objectives of their clients.",
    "Top E-Commerce Website Developer" : "This award would recognize the studio's expertise in developing high-quality, user-friendly e-commerce websites that help businesses succeed in the online marketplace.",
    "Best Small Business Website Developer" : "This award would recognize the studio's ability to create affordable, effective, and user-friendly websites for small businesses.",
    "Most Innovative Web Design Studio" : "This award would recognize the studio's ability to push the boundaries of web design and create innovative solutions that help their clients stand out in a crowded online marketplace.",
    "Best Customer Service": "This award would recognize the studio's commitment to providing exceptional customer service, including prompt response times, clear communication, and ongoing support for their clients."
}

const showDesc = n => {
    let thesame = $(".principle")[n].getAttribute("expanded") !== null

    $("[expanded] svg").html('<rect y="24" width="24" height="24" rx="12" transform="rotate(-90 0 24)" style="fill: var(--button)"/><path d="M8 12L16 12M12 8L12 16" style="stroke: var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>');
    $("[expanded] .description").css("display", "none");
    $("[expanded]").removeAttr("expanded");

    if(thesame) return;

    $(".principle")[n].setAttribute("expanded", "");
    $("[expanded] svg").html('<rect y="24" width="24" height="24" rx="12" transform="rotate(-90 0 24)" style="fill: var(--button)"/><path d="M8 12L16 12" style="stroke: var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>');
    $("[expanded] .description").css("display", "");
}

const showAward = n => {
    let name = Object.keys(awards)[n];
    let value = awards[name];

    $("[shown]").removeAttr("shown");
    $(".tabs div")[n].setAttribute("shown", "");

    $(".award").html('<div class="name">' + name + '</div>' + value);
}
