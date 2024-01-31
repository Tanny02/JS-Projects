const kits = ["snare", "kick", "crash", "tom"];
const container = document.querySelector(".container");


kits.forEach(kit => {
    const btn = document.createElement("button");
    btn.innerText = kit;
    btn.classList.add("btn");
    btn.style.backgroundImage = `url(Images/${kit}.png)`;
    const audio = document.createElement("audio");
    audio.src = `Sounds/${kit}.mp3`;
    container.appendChild(btn);
    container.appendChild(audio);
    btn.addEventListener("click", () => {
        audio.currentTime = 0;
        audio.play();
    });
    window.addEventListener("keydown", (e) => {
        if (e.key === kit.slice(0,1)) {
            audio.currentTime = 0;
            audio.play();
            btn.style.transform = "scale(.9)";
            setTimeout(() => {
                btn.style.transform = "scale(1)";
            }, 100);
        }
    });
});
