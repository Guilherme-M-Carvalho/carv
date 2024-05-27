function setImgByFolder(folder) {
    const images = $(".img-banner")
    Array.from(images).forEach((e) => {
        const src = e.src.split("/")
        e.src = `./assets/images/${folder}/${src[src.length - 1]}`
    })
}




function handleSetImages() {
    const w = window.innerWidth;
    if (w > 640) {
        setImgByFolder("banner")
    } else if (w > 320) {
        setImgByFolder("banner2")
    } else {
        setImgByFolder("banner1")
    }


    if (w > 572) {
        $("#break-img").attr("src", "./assets/images/150/breakRepair.webp")
        $("#oil-img").attr("src", "./assets/images/150/oil.webp")
        $("#suspension-img").attr("src", "./assets/images/150/suspension.webp")
        $("#pneu-img").attr("src", "./assets/images/150/pneu.webp")
        $("#amortecedor-img").attr("src", "./assets/images/150/amortecedor.webp")
        $("#bucha-img").attr("src", "./assets/images/150/bucha.webp")
    } else {
        $("#break-img").attr("src", "./assets/images/breakRepair.webp")
        $("#oil-img").attr("src", "./assets/images/oil.webp")
        $("#suspension-img").attr("src", "./assets/images/suspension.webp")
        $("#pneu-img").attr("src", "./assets/images/pneu.webp")
        $("#amortecedor-img").attr("src", "./assets/images/amortecedor.webp")
        $("#bucha-img").attr("src", "./assets/images/bucha.webp")
    }
}

window.addEventListener("resize", handleSetImages);

$(document).ready(() => {
    handleSetImages()
})