document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll("[data-accordion-item]");

    items.forEach(item => {
      const header = item.querySelector("[data-accordion-header]");

      header.addEventListener("click", function () {
        items.forEach(i => {
          if (i !== item) i.classList.remove("active");
        });

        item.classList.toggle("active");
      });
    });
  });


  const elements = document.querySelectorAll('.magnetic');
const magneticRange = 100;

function moveElement(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
  
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const elementX = rect.left + rect.width / 2;
        const elementY = rect.top + rect.height / 2;
        const distanceX = mouseX - elementX;
        const distanceY = mouseY - elementY;
        const distance = Math.hypot(distanceX, distanceY);

        if (distance < magneticRange) {
            const attraction = (1 - distance / magneticRange) * 150;
            const moveX = (distanceX / distance) * attraction;
            const moveY = (distanceY / distance) * attraction;
            element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
            element.style.transform = 'translate(0, 0)';
        }
    });
}

// 

const scrollElements = document.querySelectorAll('.scroll-animation');

function elementInView(el, offset = 100) {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) - offset
    );
}

function displayScrollElement(el) {
    el.classList.add('visible');
}

function hideScrollElement(el) {
    el.classList.remove('visible');
}

function handleScrollAnimation() {
    scrollElements.forEach((el) => {
        if (elementInView(el, 150)) { // 
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
}

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

document.addEventListener('mousemove', moveElement);

const canvas = document.getElementById('canvas');
const container = document.querySelector('.lssIMYTyof.iGEiXlRONq');

if (canvas && container) {
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
        
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;

        let particles = [];

        function Particle(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 5 + 1;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
            this.color = `rgba(255, 255, 255, 0.1)`; 
            this.lifetime = 3000; 
            this.startTime = Date.now(); 

            this.update = function() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (Date.now() - this.startTime > this.lifetime) {
                    const index = particles.indexOf(this);
                    if (index > -1) {
                        particles.splice(index, 1);
                    }
                }
            };

            this.draw = function() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            };
        }

        function initParticles(event) {
            for (let i = 0; i < 10; i++) {
                const x = event.clientX - container.getBoundingClientRect().left;
                const y = event.clientY - container.getBoundingClientRect().top;
                particles.push(new Particle(x, y));
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            requestAnimationFrame(animate);
        }

        container.addEventListener('mousemove', initParticles);
        animate();

        window.addEventListener('resize', () => {
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
        });
    }
}
