window.onload = function() {
    anime({
        targets: '.prawo img',
        translateX: ['100%', '0%'],
        opacity: [0, 1],
        borderRadius: ['0%', '30%'],
        easing: 'easeInOutQuad',
        duration: 2000
    });

    anime({
        targets: '.lewo',
        translateX: ['-100%', '0%'],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 2000
    });

    anime({
        targets: '.lewo h6',
        translateX: ['-100%', '0%'],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 1800
    });

    anime({
        targets: '.lewo p:first-child',
        translateX: ['-100%', '0%'],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 1600
    });

    anime({
        targets: '.icons img',
        translateY: ['100%', '0%'],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 2000
    });

    anime({
        targets: '.icons p',
        translateY: ['100%', '0%'],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 2000
    });
}

let animationTriggeredOne = false;
let animationTriggeredTwo = false;
let animationTriggeredThree = false;

window.addEventListener('scroll', function() {
    if (!animationTriggeredOne && window.scrollY >= 3300) {
        animationTriggeredOne = true;

        anime({
            targets: '.left',
            translateX: ['-100%', '0%'],
            easing: 'easeInOutQuad',
            duration: 1000
        });

        anime({
            targets: '.right',
            translateX: ['100%', '0%'],
            easing: 'easeInOutQuad',
            duration: 1000
        });

        anime({
            targets: '.elem',
            translateY: ['50%', '-5%'],
            easing: 'easeInOutQuad',
            duration: 1000
        });
    }
    if (!animationTriggeredTwo && window.scrollY >= 5200) {
        animationTriggeredTwo = true;

        anime({
            targets: '.wgore',
            translateY: ['50%', '0%'],
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 1000
        });
    }
    if (!animationTriggeredThree && window.scrollY >= 1200) {
        animationTriggeredThree = true;

        anime({
            targets: '.left',
            translateX: ['-50%', '0%'],
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 1000
        });
        anime({
            targets: '.right',
            translateX: ['50%', '0%'],
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 1000
        });
        anime({
            targets: '.up',
            translateY: ['50%', '0%'],
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 1000
        });
        anime({
            targets: '.down',
            translateY: ['-50%', '0%'],
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 1000
        });
    }
});

