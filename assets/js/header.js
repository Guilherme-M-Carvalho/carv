

const handleToggleClass = (elem, classStr = "no-background") => {
    const positionScroll = Math.abs(document.body.getBoundingClientRect().top)
    const heightWindow = (window.innerHeight - 100);
    const item = $(elem)

    if (positionScroll > heightWindow) {
        item.removeClass(classStr)
    } else if (!item.hasClass(classStr)) {
        item.addClass(classStr)
    }
}

$(document).on("scroll", (event) => {
    handleToggleClass("header", "no-background")
    handleToggleClass("nav", "no-background-nav")
});
