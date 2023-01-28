const numCols = 25;
const numRows = 80;
const oddWord = 'frontend';
const evenWord = 'backend';
const height = 800;
const speed = 0.5;

document.addEventListener('DOMContentLoaded', function () {
    const towers = document.getElementById('towers');

    for (let i = 0; i < numCols; i++) {
        const tower = document.createElement('div');
        tower.classList.add('tower');

        for (let j = 0; j < numRows; j++) {
            const word1 = document.createElement('p');
            word1.innerHTML = oddWord;
            tower.appendChild(word1);
            const word2 = document.createElement('p');
            word2.innerHTML = evenWord;
            tower.appendChild(word2);
        }

        towers.appendChild(tower);
    }

    //AOS.init();

    gsap.timeline({
        scrollTrigger: {
            trigger: "main",
            start: "top top",
            end: "+=500",
            scrub: true
        }
    })
        .to("#caption", {xPercent: -40, autoAlpha: 0}, 0);

    gsap.timeline({
        scrollTrigger: {
            trigger: "main",
            start: "top top",
            end: "+=500",
            scrub: true
        }
    })
        .to("#caption span", {xPercent: -40, autoAlpha: 0}, 0);

    gsap.timeline({
        scrollTrigger: {
            trigger: "#content",
            start: "top bottom-=100",
            end: "+=700",
            scrub: true,
            toggleActions: 'play none none none',
        }
    })
    .fromTo('#welcome', {autoAlpha: 0, y: 300}, {duration: 1, autoAlpha: 1, y: 0});

    gsap.timeline({
        scrollTrigger: {
            trigger: "#expertise",
            start: "top bottom-=200",
            end: "+=500",
            scrub: true,
            toggleActions: 'play none none none',
        }
    })
        .fromTo('.circle1', {autoAlpha: 0, y: -100, ease: 'none.none'}, {duration: 1, autoAlpha: 1, y: 0, ease: 'none.none' });
    gsap.timeline({
        scrollTrigger: {
            trigger: "#expertise",
            start: "top bottom-=250",
            end: "+=500",
            scrub: true,
            toggleActions: 'play none none none',
        }
    })
        .fromTo('.circle2', {autoAlpha: 0, y: -100, ease: 'none.none'}, {duration: 1, autoAlpha: 1, y: 0, ease: 'none.none' });
    gsap.timeline({
        scrollTrigger: {
            trigger: "#expertise",
            start: "top bottom-=300",
            end: "+=500",
            scrub: true,
            toggleActions: 'play none none none',
        }
    })
        .fromTo('.circle3', {autoAlpha: 0, y: -100, ease: 'none.none'}, {duration: 1, autoAlpha: 1, y: 0, ease: 'none.none' });
    gsap.timeline({
        scrollTrigger: {
            trigger: "#expertise",
            start: "top bottom-=350",
            end: "+=500",
            scrub: true,
            toggleActions: 'play none none none',
        }
    })
        .fromTo('.circle4', {autoAlpha: 0, y: -100, ease: 'none.none'}, {duration: 1, autoAlpha: 1, y: 0, ease: 'none.none' });
    gsap.timeline({
        scrollTrigger: {
            trigger: "#expertise",
            start: "top bottom-=400",
            end: "+=500",
            scrub: true,
            toggleActions: 'play none none none',
        }
    })
        .fromTo('.circle5', {autoAlpha: 0, y: -100, ease: 'none.none'}, {duration: 1, autoAlpha: 1, y: 0, ease: 'none.none' })

    gsap.timeline({
        scrollTrigger: {
            trigger: "#project-ge",
            start: "top bottom-=200",
            end: "+=500",
            scrub: true,
            toggleActions: 'play none none none',
        }
    })
        .fromTo('#project-ge .col-img img', {autoAlpha: 0, x: -100, ease: 'none.none'}, {duration: 1, autoAlpha: 1, scale: 1, x: 0, ease: 'none.none' })

    gsap.timeline({
        scrollTrigger: {
            trigger: "#project-irvine",
            start: "top bottom-=200",
            end: "+=500",
            scrub: true,
            toggleActions: 'play none none none',
        }
    })
        .fromTo('#project-irvine .col-img img', {autoAlpha: 0, x: 100, ease: 'none.none'}, {duration: 1, autoAlpha: 1, scale: 1, x: 0, ease: 'none.none' })

    gsap.timeline({
        scrollTrigger: {
            trigger: "#project-francisco",
            start: "top bottom-=200",
            end: "+=500",
            scrub: true,
            toggleActions: 'play none none none',
        }
    })
        .fromTo('#project-francisco .col-img img', {autoAlpha: 0, x: -100, ease: 'none.none'}, {duration: 1, autoAlpha: 1, scale: 1, x: 0, ease: 'none.none' })

    gsap.timeline({
        scrollTrigger: {
            trigger: "#project-smartstop",
            start: "top bottom-=200",
            end: "+=500",
            scrub: true,
            toggleActions: 'play none none none',
        }
    })
        .fromTo('#project-smartstop .col-img img', {autoAlpha: 0, x: 100, ease: 'none.none'}, {duration: 1, autoAlpha: 1, scale: 1, x: 0, ease: 'none.none' })
});

window.addEventListener('scroll', function() {
    let yPos = window.scrollY;

    let towers = document.getElementsByClassName('tower');

    towers = [...towers];

    for (const key in towers) {
        const tower = towers[key];

        if (key % 2 === 0) {
            tower.style.top = -height + (yPos * 1.2 * speed) + 'px';
        } else {
            tower.style.top = -height + (yPos + (yPos / 0.5 * speed*1.4 * -1)) + 'px';

        }
    }
});