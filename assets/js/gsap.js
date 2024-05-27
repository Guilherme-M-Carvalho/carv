
$(document).ready(function () {
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
        },
    })

    gsap.from(btnWhats, {
        opacity: 0,
        duration: 2,
        // x: 100
    })

    const w = window.innerWidth;
    // animation about-us
    if(w > 1099){
        gsap.from('.about-move', {
            scrollTrigger: {
                trigger: '.about-us',
                // markers: true,
                start: 'bottom bottom',
    
            },
            x: -(window.innerWidth / 2),
            opacity: 0,
            duration: 1
        })
    }

    const widthX = (window.innerWidth / 2)

    // animation best-services
    // if (widthX > 531) {
        gsap.from('.best-services-body-content', {
            ease: "expo.out",
            scrollTrigger: {
                trigger: '.best-service-image',
                start: 'bottom bottom',

                // markers: true
            },
            x: widthX,
            opacity: 0,
            duration: 2,
        })
    // }



    // animation our-advantages
    gsap.from('.left-advantages', {
        scrollTrigger: {
            trigger: '.our-advantages',
            start: 'bottom bottom',
            // markers: true,
            // start: "0px 80%",
        },
        x: -(window.innerWidth / 2),
        opacity: 0,
        duration: 1
    })

    // animation our-advantages
    gsap.from('.our-advantages', {
        scrollTrigger: {
            trigger: '.our-advantages',
            // markers: true,
            start: "0px 80%",
            start: 'bottom bottom',
        },
        x: (window.innerWidth / 2),
        opacity: 0,
        duration: 1
    })

    // animation our-advantages
    gsap.from('.result-guarantee-body', {
        scrollTrigger: {
            trigger: '.result-guarantee',
            // markers: true,
            start: 'bottom bottom',
        },
        x: -(window.innerWidth / 2),
        opacity: 0,
        duration: 1
    })
    // animation our-advantages
    gsap.from('.card-representation', {
        scrollTrigger: {
            trigger: '.card-representation',
            // markers: true,
            start: 'center bottom',
        },
        x: -(window.innerWidth / 2),
        opacity: 0,
        duration: 1
    })
    gsap.from('.card-aliment', {
        scrollTrigger: {
            trigger: '.card-aliment',
            // markers: true,
            start: 'center bottom',
        },
        x: -(window.innerWidth / 2),
        opacity: 0,
        duration: 1
    })
    gsap.from('.card-pneu', {
        scrollTrigger: {
            trigger: '.card-pneu',
            // markers: true,
            start: 'center bottom',
        },
        x: (window.innerWidth / 2),
        opacity: 0,
        duration: 1
    })
    gsap.from('.card-oleo', {
        scrollTrigger: {
            trigger: '.card-oleo',
            // markers: true,
            start: 'center bottom',
        },
        x: (window.innerWidth / 2),
        opacity: 0,
        duration: 1
    })
    gsap.from('.card-amortecedor', {
        scrollTrigger: {
            trigger: '.card-amortecedor',
            // markers: true,
            start: 'center bottom',
        },
        x: -(window.innerWidth / 2),
        opacity: 0,
        duration: 1
    })
    gsap.from('.card-bucha', {
        scrollTrigger: {
            trigger: '.card-bucha',
            // markers: true,
            start: 'center bottom',
        },
        x: (window.innerWidth / 2),
        opacity: 0,
        duration: 1
    })

    gsap.from('.what-offer-one', {
        scrollTrigger: {
            trigger: '.what-offer-one',
            // markers: true,
            start: 'bottom bottom',
        },
        x: -(window.innerWidth / 2),
        opacity: 0,
        duration: 2
    })
    gsap.from('.what-offer-two', {
        scrollTrigger: {
            trigger: '.what-offer-two',
            // markers: true,
            start: 'bottom bottom',
        },
        x: -(window.innerWidth / 2),
        opacity: 0,
        duration: 1.5
    })
    gsap.from('.what-offer-three', {
        scrollTrigger: {
            trigger: '.what-offer-three',
            // markers: true,
            start: 'bottom bottom',
        },
        x: -(window.innerWidth / 2),
        opacity: 0,
        duration: 1
    })
    // gsap.from('.card-right', {
    //     scrollTrigger: {
    //         trigger: '.card-left',
    //         // markers: true,
    //         start: 'bottom bottom',
    //     },
    //     x: (window.innerWidth / 2),
    //     opacity: 0,
    //     duration: 1
    // })

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

});
