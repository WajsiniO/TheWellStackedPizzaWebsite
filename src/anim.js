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

let animationTriggered = [false, false, false, false, false];
let pullUpButton = document.querySelector('.pullup');

window.addEventListener('scroll', function() {
    if (!animationTriggered[0] && window.scrollY >= 3300) {
        animationTriggered[0] = true;

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
    if (!animationTriggered[1] && window.scrollY >= 5000) {
        animationTriggered[1] = true;

        anime({
            targets: '.wgore',
            translateY: ['50%', '0%'],
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 1000
        });
    }
    if(!animationTriggered[3] && window.scrollY >= 2400){
        animationTriggered[3] = true;
        anime({
            targets: '.przekaski',
            translateX: ['-50%', '0%'],
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 1000
        });
        anime({
            targets: '.napoje',
            translateX: ['50%', '0%'],
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 1000
        });
      
    }
    if (!animationTriggered[2] && window.scrollY >= 750) {
        animationTriggered[2] = true;
        
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
    if(!animationTriggered[4] && window.scrollY >= 750) { 
        animationTriggered[4] = true;
        anime({
            targets: '.pullup',
            translateY: ['-50%', '0%'],
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 1000
        });
        pullUpButton.classList.remove("bhide");
    }
    if(animationTriggered[4] && window.scrollY <= 750) {
        animationTriggered[4] = false;
        anime({
            targets: '.pullup',
            translateY: ['0%', '-50%'],
            opacity: [1, 0],
            easing: 'easeInOutQuad',
            duration: 1000
        });
        setTimeout(1000,function() { pullUpButton.classList.add("bhide") });
    }
});

