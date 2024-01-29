const btn = document.querySelector(".btn");

btn.addEventListener("mouseover", (e) => {
    const x = (e.pageX - btn.offsetLeft);
    const y = (e.pageY - btn.offsetTop);

    btn.style.setProperty("--xPosition", x + "px");
    btn.style.setProperty("--yPosition", y + "px");
});
