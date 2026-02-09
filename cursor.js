const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");
const cursorScale = document.querySelectorAll(".cursor-scale");

if (cursor && cursor2) {
    let mouseX = 0;
    let mouseY = 0;

    // Keep cursor updates on the GSAP ticker to reduce layout churn.
    const renderCursor = () => {
        gsap.set([cursor, cursor2], {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    };

    gsap.ticker.add(renderCursor);

    window.addEventListener(
        "mousemove",
        (e) => {
            mouseX = e.clientX + 20;
            mouseY = e.clientY + 20;
        },
        { passive: true }
    );

    cursorScale.forEach((link) => {
        link.addEventListener("mousemove", () => {
            cursor.classList.add("grow");
            if (link.classList.contains("small")) {
                cursor.classList.remove("grow");
                cursor.classList.add("grow-small");
            }
        });

        link.addEventListener("mouseleave", () => {
            cursor.classList.remove("grow");
            cursor.classList.remove("grow-small");
        });
    });
}
