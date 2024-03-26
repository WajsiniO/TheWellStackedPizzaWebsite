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

let animationTriggered = false;

window.addEventListener('scroll', function() {
    if (!animationTriggered && window.scrollY >= 3300) {
        animationTriggered = true;

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
});