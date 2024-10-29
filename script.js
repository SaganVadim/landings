const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.1 
});

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

document.addEventListener('mousemove', e => {
	const x = e.clientX;
	const y = e.clientY;
	document.body.style.background = `radial-gradient(circle at ${x}px ${y}px,  rgb(15, 15, 15), rgb(52, 52, 52))`;
});