
  document.querySelectorAll('.RILGvZBgos').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.parentElement.nextElementSibling;
      
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
      
      header.classList.toggle('active');
    });
  });

  const canvas = document.getElementById("gravityCanvas");
  const ctx = canvas.getContext("2d");
  const container = document.querySelector(".tDeDjyEFvu");
  let animationStarted = false;
  let balls = [];

  canvas.width = container.offsetWidth;
  canvas.height = container.offsetHeight;

  class Ball {
    constructor(x, y, dx, dy, radius, color) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.color = color;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    }
    update() {
      if (this.y + this.radius + this.dy > canvas.height) {
        this.dy = -this.dy * 0.8;
      } else {
        this.dy += 1;
      }
      if (this.x + this.radius + this.dx > canvas.width || this.x - this.radius <= 0) {
        this.dx = -this.dx * 0.8;
      }
      this.x += this.dx;
      this.y += this.dy;
      this.draw();
    }
  }

  function generateBalls(num) {
    balls = [];
    for (let i = 0; i < num; i++) {
      const radius = Math.random() * 30 + 10;
      const x = Math.random() * (canvas.width - radius * 2) + radius;
      const y = Math.random() * (canvas.height - radius * 2) + radius;
      const dx = (Math.random() - 0.5) * 8;
      const dy = (Math.random() - 0.5) * 8;
      const color = `hsl(${Math.random() * 360}, 70%, 60%)`;
      balls.push(new Ball(x, y, dx, dy, radius, color));
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach(ball => ball.update());
    requestAnimationFrame(animate);
  }

  function startAnimation() {
    if (!animationStarted) {
      animationStarted = true;
      generateBalls(30);
      animate();
    }
  }

  function isElementInCenterViewport(el) {
    const rect = el.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = window.innerHeight / 2;
    return elementCenter >= viewportCenter - 50 && elementCenter <= viewportCenter + 50;
  }

  window.addEventListener("scroll", () => {
    if (isElementInCenterViewport(container)) {
      startAnimation();
    }
  });

  window.addEventListener("resize", () => {
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    balls.length = 0;
    generateBalls(30);
  });


  const cube = document.querySelector(".cube");
let mouseX = 0;
let mouseY = 0;

const rotateValue = 270;

const handleMouseMove = (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
  let rotateX = -(mouseY / window.innerHeight - 0.5) * rotateValue;
  let rotateY = (mouseX / window.innerWidth - 0.5) * rotateValue;

  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

window.addEventListener("mousemove", handleMouseMove);
