let mouth = document.querySelector('.mouth'),
pupils = document.querySelectorAll('.pupil');

document.addEventListener('mousemove', debounce(e => {
  let x = e.clientX,
  y = e.clientY,
  height = window.innerHeight,
  width = window.innerWidth;

  if (y > height / 2) {
    mouth.classList.remove('-closed');
  } else {
    mouth.classList.add('-closed');
  }

  let deltaX = (x - width / 2) / width,
  deltaY = (y - height / 2) / height;

  [].forEach.call(pupils, pupil => {
    pupil.style.transform = `
translateX(${deltaX * 25}px)
translateY(${deltaY * 25}px)`;
  });
}), 100);


function debounce(func, ms) {
  let callAllowed = true;

  return function () {
    if (!callAllowed) {
      return;
    }

    func.apply(this, arguments);

    callAllowed = false;

    setTimeout(() => {
      callAllowed = true;
    }, ms);
  };
};


const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        document.getElementById('animation-container').appendChild(canvas);

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        let time = 0;

        const rand = (min, max) => Math.random() * (max - min) + min;

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.vx = 0;
                this.vy = 0;
                this.ax = 0;
                this.ay = 0;
                this.hue = rand(0, 360);
                this.sat = rand(20, 90);
                this.light = rand(30, 80);
                this.maxSpeed = rand(1, 3); // Уменьшено для более плавного движения
            }

            update() {
                this.follow();

                this.vx += this.ax;
                this.vy += this.ay;

                const p = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
                const a = Math.atan2(this.vy, this.vx);
                const m = Math.min(this.maxSpeed, p);
                this.vx = Math.cos(a) * m;
                this.vy = Math.sin(a) * m;

                this.x += this.vx;
                this.y += this.vy;
                this.ax = 0;
                this.ay = 0;

                this.edges();
            }

            follow() {
                const angle = Math.sin(this.x * 0.01 + time * 0.01) * Math.PI / 9;
                this.ax += Math.cos(angle);
                this.ay += Math.sin(angle);
            }

            edges() {
                if (this.x < 0) {
                    this.x = canvas.width;
                }
                if (this.x > canvas.width) {
                    this.x = 0;
                }
                if (this.y < 0) {
                    this.y = canvas.height;
                }
                if (this.y > canvas.height) {
                    this.y = 0;
                }
            }

            render() {
                ctx.fillStyle = `hsla(${this.hue}, ${this.sat}%, ${this.light}%, 0.25)`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, 1, 0, Math.PI * 5); // Рисуем круг вместо линии
                ctx.fill();
            }
        }

        function setup() {
            for (let i = 0; i < 1000; i++) {
                particles.push(new Particle(rand(0, canvas.width), rand(0, canvas.height)));
            }
            draw();
        }

        function draw() {
            time++;
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.render();
            });
            requestAnimationFrame(draw);
        }

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        setup();