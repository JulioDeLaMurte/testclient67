//optional js

document.querySelectorAll(".btn_perso").forEach(item => {

    item.addEventListener('mousemove', (e) => {
        x = e.offsetX;
        y = e.offsetY;
        button.style.setProperty('--mouse-x', x + "px");
        button.style.setProperty('--mouse-y', y + "px");
    })
})