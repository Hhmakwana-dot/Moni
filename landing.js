const landingScreen = document.getElementById("landing-screen");
const categoryPage = document.getElementById("category-page");
const exploreButton = document.getElementById("landing-explore");
const networkCanvas = document.getElementById("landing-network");

exploreButton.addEventListener("click", () => {
  landingScreen.hidden = true;
  categoryPage.hidden = false;
  document.querySelector(".category-card")?.focus();
});

if (networkCanvas instanceof HTMLCanvasElement) {
  const context = networkCanvas.getContext("2d");

  if (context) {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const particles = [];
    const ripples = [];
    const connectionDistance = 155;
    let width = 0;
    let height = 0;
    let frame = 0;
    let lastFrameTime = 0;
    let pointer = null;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      networkCanvas.width = Math.round(width * pixelRatio);
      networkCanvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      particles.length = 0;
      const count = Math.min(80, Math.max(28, Math.round((width * height) / 18000)));
      for (let index = 0; index < count; index += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.08,
          vy: (Math.random() - 0.5) * 0.08,
          radius: 0.9 + Math.random() * 1.3,
          twinkleOffset: Math.random() * Math.PI * 2,
          twinkleSpeed: 0.0015 + Math.random() * 0.003,
          hasFlare: Math.random() > 0.72,
        });
      }
      draw(0);
    };

    const draw = (elapsed) => {
      context.clearRect(0, 0, width, height);

      if (pointer) {
        const glow = context.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          260,
        );
        glow.addColorStop(0, "rgba(139, 92, 246, 0.16)");
        glow.addColorStop(0.48, "rgba(34, 211, 238, 0.07)");
        glow.addColorStop(1, "rgba(34, 211, 238, 0)");
        context.fillStyle = glow;
        context.fillRect(0, 0, width, height);
      }

      ripples.forEach((ripple) => {
        const progress = Math.min(ripple.age / 900, 1);
        context.beginPath();
        context.arc(ripple.x, ripple.y, 12 + progress * 115, 0, Math.PI * 2);
        context.strokeStyle = `rgba(34, 211, 238, ${(1 - progress) * 0.56})`;
        context.lineWidth = 1.5 - progress;
        context.stroke();
        if (elapsed > 0 && !motionPreference.matches) ripple.age += elapsed;
      });
      for (let index = ripples.length - 1; index >= 0; index -= 1) {
        if (ripples[index].age >= 900) ripples.splice(index, 1);
      }

      particles.forEach((particle, index) => {
        if (!motionPreference.matches && elapsed > 0) {
          particle.x = (particle.x + particle.vx * elapsed + width) % width;
          particle.y = (particle.y + particle.vy * elapsed + height) % height;
        }

        let pointerDistance = Infinity;
        if (pointer) {
          const dx = pointer.x - particle.x;
          const dy = pointer.y - particle.y;
          pointerDistance = Math.hypot(dx, dy);
          if (elapsed > 0 && !motionPreference.matches && pointerDistance < 180) {
            const influence =
              ((1 - pointerDistance / 180) * elapsed * 0.035) /
              Math.max(pointerDistance, 1);
            particle.x -= dx * influence;
            particle.y -= dy * influence;
          }
        }

        for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
          const next = particles[nextIndex];
          const dx = particle.x - next.x;
          const dy = particle.y - next.y;
          const distance = Math.hypot(dx, dy);
          if (distance >= connectionDistance) continue;

          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(next.x, next.y);
          const nearPointer =
            pointer &&
            (Math.hypot(pointer.x - particle.x, pointer.y - particle.y) < 180 ||
              Math.hypot(pointer.x - next.x, pointer.y - next.y) < 180);
          context.strokeStyle = nearPointer
            ? `rgba(34, 211, 238, ${(1 - distance / connectionDistance) * 0.48})`
            : `rgba(160, 203, 235, ${(1 - distance / connectionDistance) * 0.2})`;
          context.lineWidth = 0.7;
          context.stroke();
        }

        const twinkle =
          0.55 + (Math.sin(performance.now() * particle.twinkleSpeed + particle.twinkleOffset) + 1) * 0.45;
        const brightness = Math.min(1, twinkle + (pointerDistance < 180 ? 0.15 : 0));
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(232, 242, 255, ${0.35 + brightness * 0.65})`;
        context.shadowColor = pointerDistance < 180
          ? "rgba(139, 92, 246, 0.95)"
          : "rgba(34, 211, 238, 0.8)";
        context.shadowBlur = 3 + brightness * (particle.hasFlare ? 15 : 8);
        context.fill();
        context.shadowBlur = 0;

        if (particle.hasFlare && brightness > 0.88) {
          const flareLength = 3 + brightness * 5;
          context.strokeStyle = `rgba(224, 241, 255, ${(brightness - 0.65) * 0.7})`;
          context.lineWidth = 0.7;
          context.beginPath();
          context.moveTo(particle.x - flareLength, particle.y);
          context.lineTo(particle.x + flareLength, particle.y);
          context.moveTo(particle.x, particle.y - flareLength);
          context.lineTo(particle.x, particle.y + flareLength);
          context.stroke();
        }
      });
    };

    const animate = (time) => {
      if (time - lastFrameTime >= 32) {
        const elapsed = lastFrameTime ? Math.min(time - lastFrameTime, 64) : 0;
        lastFrameTime = time;
        draw(elapsed);
      }
      frame = window.requestAnimationFrame(animate);
    };

    const start = () => {
      if (!frame && !document.hidden && !motionPreference.matches) {
        frame = window.requestAnimationFrame(animate);
      }
    };

    const stop = () => {
      window.cancelAnimationFrame(frame);
      frame = 0;
      lastFrameTime = 0;
    };

    resize();
    start();
    window.addEventListener("resize", resize);
    landingScreen.addEventListener("pointermove", (event) => {
      pointer = { x: event.clientX, y: event.clientY };
      if (motionPreference.matches) draw(0);
    });
    landingScreen.addEventListener("pointerleave", () => {
      pointer = null;
      if (motionPreference.matches) draw(0);
    });
    landingScreen.addEventListener("pointerdown", (event) => {
      ripples.push({ x: event.clientX, y: event.clientY, age: 0 });
      if (motionPreference.matches) draw(0);
    });
    motionPreference.addEventListener("change", () => {
      stop();
      draw(0);
      start();
    });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stop();
      else start();
    });
  }
}
