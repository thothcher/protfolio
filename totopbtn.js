const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");
const scrollContainer = document.scrollingElement || document.documentElement;

const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

if (backToTopButton) {
    let isVisible = false;
    let ticking = false;

    // Use rAF to avoid doing DOM work on every scroll event.
    const onScroll = () => {
        if (ticking) {
            return;
        }

        ticking = true;
        window.requestAnimationFrame(() => {
            const shouldShow = scrollContainer.scrollTop > showOnPx;
            if (shouldShow !== isVisible) {
                backToTopButton.classList.toggle("hidden", !shouldShow);
                isVisible = shouldShow;
            }
            ticking = false;
        });
    };

    document.addEventListener("scroll", onScroll, { passive: true });
    backToTopButton.addEventListener("click", goToTop);
}