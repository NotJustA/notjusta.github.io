const slider = document.querySelector('.slider');
let isDown = false, startX, scrollLeft;

slider.onmousedown = e => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
};

slider.onmouseleave = () => {
    isDown = false;
};

slider.onmouseup = () => {
    isDown = false;
};

slider.onmousemove = e => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
};