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