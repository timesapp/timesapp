// GSAP setup
default:
from = { y: 16 };
}
gsap.fromTo(el, { ...base, ...from }, {
...to,
delay,
scrollTrigger: {
trigger: el,
start: 'top 85%',
toggleActions: 'play none none reverse'
}
});
});


// Staggered specs lines
gsap.utils.toArray('[data-animate="staggerItem"]').forEach((item, i) => {
gsap.fromTo(item, { autoAlpha: 0, y: 10 }, {
autoAlpha: 1, y: 0, duration: 0.6, ease: 'power3.out',
scrollTrigger: { trigger: item, start: 'top 92%' }, delay: i * 0.08
});
});


// Parallax images (and hero bg)
gsap.utils.toArray('.img-parallax').forEach((el) => {
const speed = parseFloat(el.dataset.speed || '0.25');
gsap.to(el, {
yPercent: () => -(speed * 20),
ease: 'none',
scrollTrigger: {
trigger: el.closest('.section') || el,
start: 'top bottom',
end: 'bottom top',
scrub: true
}
});
});


// Gallery fade-in
gsap.utils.toArray('#gallery .grid img').forEach((img) => {
gsap.to(img, {
autoAlpha: 1, y: 0, duration: 0.7, ease: 'power3.out',
scrollTrigger: { trigger: img, start: 'top 95%' }
});
});


// Text fade-out as next section appears (hero heading)
const heroText = document.querySelector('#hero .hero__content');
if (heroText) {
gsap.to(heroText, {
autoAlpha: 0, y: -20,
scrollTrigger: {
trigger: '#features',
start: 'top bottom',
end: 'top center',
scrub: true
}
});
}
}
});
