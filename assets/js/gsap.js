const btnWhats = $(".btn-whats")
const header = $(".header-sys")
const navbar = $(".navbar")


gsap.registerPlugin(ScrollTrigger);


// animation whats
gsap.from('.header-sys', {

    scrollTrigger: {
        onLeave() {
            header.toggleClass('no-background')
            navbar.toggleClass('no-background-nav')
        },
        onEnterBack() {
            header.toggleClass('no-background')
            navbar.toggleClass('no-background-nav')
        },
        trigger: '.about-us',
        start: 'top bottom',
        end: 'bottom top',
        start: "0px 95%",
        toggleClass: 'no-background',
    },
})

gsap.from(btnWhats, {
    opacity: 0,
    duration: 2,
    // x: 100
})

// animation about-us
gsap.from('.about-move', {
    scrollTrigger: {
        trigger: '.about-us',
        // markers: true,
        start: "0px 80%",
    },
    x: -(window.innerWidth / 2),
    opacity: 0,
    duration: 1
})

const widthX = (window.innerWidth / 2)

// animation best-services
if (widthX > 531) {
    gsap.from('.best-services-body-content', {
        ease: "expo.out",
        scrollTrigger: {
            trigger: '.best-service-image',
            start: "0px 80%",
            // markers: true
        },
        x: widthX,
        opacity: 0,
        duration: 2,
        rotation: 90
    })
}


// animation our-advantages
gsap.from('.left-advantages', {
    scrollTrigger: {
        trigger: '.our-advantages',
        // markers: true,
        start: "0px 80%",
    },
    x: -200,
    opacity: 0,
    duration: 1
})

// animation our-advantages
gsap.from('.right-advantages', {
    scrollTrigger: {
        trigger: '.our-advantages',
        // markers: true,
        start: "0px 80%",
    },
    x: (window.innerWidth / 2),
    opacity: 0,
    duration: 1
})

// animation best-services
// gsap.from('.best-services-body', {
//     ease: "expo.out",
//     scrollTrigger: {
    //         trigger: '.best-services',
//         start: "0px 80%",
//         // markers: true
//     },
//     x: (window.innerWidth / 2),
//     opacity: 0,
//     duration: 2,
//     rotation: 90
// })
