const w = window.innerWidth;
$(document).ready(() => {
    if(w > 572) {
        $("#break-img").attr("src", "./assets/images/150/breakRepair.webp")
        $("#oil-img").attr("src", "./assets/images/150/oil.webp")
        $("#suspension-img").attr("src", "./assets/images/150/suspension.webp")
        $("#pneu-img").attr("src", "./assets/images/150/pneu.webp")
        $("#amortecedor-img").attr("src", "./assets/images/150/amortecedor.webp")
        $("#bucha-img").attr("src", "./assets/images/150/bucha.webp")
    }
})
