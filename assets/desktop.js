let timeSetter = setInterval(() => {
    time.innerHTML = new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true }).format(new Date())
    time.setAttribute("title", new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true, year: 'numeric', month: 'long', day: 'numeric' }).format(new Date()))
}, 60000);

document.querySelector(".desktop").onclick = function () {
    document.querySelectorAll(".icon").forEach((e) => {
        e.classList.remove("selected")
    })
}

document.querySelectorAll(".icon").forEach((icon) => {
    icon.onclick = function () {
        setTimeout(() => {
            document.querySelectorAll(".icon").forEach((e) => {
                e.classList.remove("selected")
            })
            this.classList.add("selected")
        }, 1);
    }
})

document.querySelector(".max").onclick = function () {
    document.querySelector(".window").classList.toggle("maximized")
}

document.querySelector(".min").onclick = function () {
    document.querySelector(".readme").classList.toggle("active")
    document.querySelector(".window").classList.toggle("minimized")
}

document.querySelector(".readme").onclick = function () {
    document.querySelector(".readme").classList.toggle("active")
    document.querySelector(".window").classList.toggle("minimized")
}

document.querySelector(".cls").onclick = function () {
    document.querySelector(".readme").style.display = "none"
    document.querySelector(".window").style.display = "none"
}

document.querySelector(".faisal-akhtar").ondblclick = function () {
    setTimeout( ()=> { this.classList.remove("selected") }, 2 )
    window.open("https://reddit.com/r/placestart/")
}

document.querySelector(".faisal-akhtar2").ondblclick = function () {
    setTimeout( ()=> { this.classList.remove("selected") }, 2 )
    window.open("https://www.youtube.com/watch?v=Q2CCgO5Z0xk/")
}

document.querySelector(".my-computer").ondblclick = function () {
    setTimeout( ()=> { this.classList.remove("selected") }, 2 )
    window.open("https://discord.gg/eDUuJYhjZY")
}

document.querySelector(".my-computer2").ondblclick = function () {
    setTimeout( ()=> { this.classList.remove("selected") }, 2 )
    window.open("https://place-wiki.stefanocoding.me/wiki/Windows_Taskbar")
}

document.querySelector(".note-pad").ondblclick = function () {
    setTimeout( ()=> { this.classList.remove("selected") }, 2 )
    document.querySelector(".readme").style.display = "initial"
    document.querySelector(".window").style.display = "initial"
    document.querySelector(".readme").classList.add("active")
    document.querySelector(".window").classList.remove("minimized")
}

document.querySelector("textarea").value = "\n		  Welcome to r/PlaceStart \n \n	Thank you to everybody who contributed to our community. \n \n    Here are some links to the recognition we received... \n- https://www.tiktok.com/@windows/video/7082886542066322731 \n- https://techcommunity.microsoft.com/t5/away-from-keyboard/r-place-on-reddit-this-weekend-featured-the-windows-start-button/m-p/3275648 \n- https://www.windowscentral.com/windows-fans-add-taskbar-place-collaborative-digital-canvas-hosted-reddit \n \n	Credits to https://github.com/faisalAkhtar/windows-xp \n	for the website design. \n \n \n	You can double-click the desktop icons. \n \n	We hope to see you again next time. :)"


dragWindow(document.querySelector(".window"));
function dragWindow(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    document.querySelector(".title-bar").onmousedown = dragging

    function dragging(e) {
        e = e || window.event;
        e.preventDefault();

        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onmouseup = stopDragging;
        document.onmousemove = draggedWindow;
    }

    function draggedWindow(e) {
        e = e || window.event;
        e.preventDefault();

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function stopDragging() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
