document.querySelector("body").addEventListener("click", (event) => {
    let { target } = event;

    if (target.hasAttribute("x-smoothscroll") && target.hasAttribute("href")) {
        let gotoElement = document.querySelector(target.getAttribute("href"));
        if (gotoElement && typeof gotoElement.scrollIntoView === "function") {
            gotoElement.scrollIntoView({
                behavior: "smooth",
            });
            event.preventDefault();
        }
    }
});
